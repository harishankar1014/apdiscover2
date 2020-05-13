<template>
      <div>
        &nbsp;&nbsp; &nbsp;&nbsp;
  <div class="para">
    
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <!-- <header class="jumbotron"> -->
      <!-- &nbsp;&nbsp;&nbsp;&nbsp; -->
      <div class="para">
<label><router-link  :to="{name: 'addComment', params: { user_id : user_id , apiname:title,uname:user_name }}" class="nav-link"><font-awesome-icon icon="plus"/>&nbsp;Add Comment</router-link></label>
    <label><router-link  :to="{name: 'userComment', params: { user_id: user_id,comment:content,title:this.$route.params.title }}" class="nav-link"><font-awesome-icon icon="eye"/>&nbsp;View My Comment</router-link></label>
    <label><router-link  :to="{name: 'archivedComments', params: { user_id: user_id,comment:content,apiname:title }}" class="nav-link"><font-awesome-icon icon="archive"/>&nbsp;Archived Comment</router-link></label>
      </div>
  <div class="para">
          <h4 align="center">COMMENTS OF THIS API</h4>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input class="input"  v-model="search"  type="text" placeholder="search box"/>
        <!-- <br>
        <div class="form-group">
          <label for="title">Regex</label>
          <input v-model="regex"  type="text" class="form-control" name="title" />
          <p>{{ regex | set }} </p>
        </div> -->
      <!-- <p>Hi {{ name | fallback }}!</p> - -->
      <!-- {{ test }} -->
      <!-- {{ filteredComments }} -->
      <ul v-for="enteries in filteredComments" :key="enteries.comment" class="ol">
               <div v-if="enteries.title==title && enteries.archived== false" class="card w3-hover-shadow">
               <div class="para1">
                 <label class="label1"> <font-awesome-icon icon="user"/>&nbsp;{{enteries.uname}}</label>
              <label class="label1">COMMENT</label>
              {{enteries.comment}}
             
              <hr>

              <button v-if="admin || user_id == enteries.uid " class="icon"  @click.prevent="handleDelete(enteries._id)"><font-awesome-icon icon="trash" /></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button v-if="admin || user_id == enteries.uid " class="icon"><router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" ><font-awesome-icon icon="edit" /></router-link></button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button v-if="admin || user_id == enteries.uid " class="icon"  @click.prevent="handleArchive(enteries._id)"><font-awesome-icon icon="archive" /></button>
              
              </div>
               </div>
             </ul>
      </div>
    <!-- </header> -->
    
</div>
</div>
</template>

<script>
import CommentService from '../services/comment.services';
import axios from 'axios';
import Comment from '../models/comment';
export default {
  name: 'Comment',
  data() {
    return {
      content:[],
      test:[],
      title:this.$route.params.apiname,
      user_id:this.$route.params.id,
      user_name:this.$route.params.name,
      comment: new Comment('', ''),
      admin:this.$route.params.admin,
      search:""
    };
  },
  created()
  {
      this.length=axios.post('http://localhost:8080/api/count',{"title":this.$route.params.title});
      // console.log(this.length);
      //  this.length=axios.post('http://localhost:8080/api/count',{"title":"one"});
      //  console.log(this.length);
  },
  mounted() {
    // console.log("mounted");
    CommentService.getTest(this.$route.params.title).then(
      response => {
        this.content = response.data;
        this.test = response.data.comment;
        // this.length=response.data.length;
        // console.log(this.length);
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    // this.length=axios.post('http://localhost:8080/api/count',{"title":"one"});

    
    // this.admin=this.$route.params.admin;
  },
  methods: {
      handleDelete(id)
      {
        // console.log(id);
        let uri='http://localhost:8080/api/delete';
        axios.post(uri,{"id":id});
        location.reload();
      },
      handleArchive(id)
      {
        // console.log(id);
        let uri='http://localhost:8080/api/archiveOne';
        axios.post(uri,{"id":id});
        location.reload();
      }
      // },
      // previousPage()
      // {
      //     console.log("previousPage");
      // },
      // nextPage()
      // {
      //     console.log("nextPage");
      // },
      // getLength: function()
      // {
      //        this.length=axios.post('http://localhost:8080/api/count',{"title":"one"});
      //        console.log(this.length);
      // }
    },
    computed:
    {
        // test:this.content[0],
        filteredComments: function(){
          //  return this.test.filter((enteries)=>{
              // enteries.comment.match(/active/g);
              // enteries;
          //  })
          // return this.test.filter(enteries=>enteries.comment.match(this.search));
          // var ret = this.test.filter(c => c.comment === "active comment");
            // return this.test.filter(c =>{c.comment.toLowerCase()});
            return this.test.filter(c =>{ return c.comment.toLowerCase().includes(this.search)})
          // return ret;
        }
    }
};

</script>

<style scoped>
.icon {
  background-color:white;
  color: black;
  padding: 5px;
  font-size: 15px;
  border: none;
}
.card{
    /* Add shadows to create the "card" effect */
    /* height: 280px; */
    /* width: 200px; */
    /* background-color:; */
    /* border-radius: 10px; */
    /* box-shadow: -1rem 0 3rem #000; */
    /* width: 2000px; */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
.card-header{
  /* border-style: double; */
  background-color:#C0C0C0;
  width: 1300px;
}
.card-body{
  width: 1300px;
}
.card-footer{
  width: 1300px;

}
/* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  /* Add some padding inside the card container */
  .container {
    width: 1300px;
  
    padding: 2px 16px 20px;
  }
  .input
  {
    padding:8px;display:block;border:1px solid rgba(152, 155, 152, 0.897);width:100%;
    align-items:center;
    }
    .ol {
    list-style-type: none;
}
label{
  width: 330px;
}
.label1{
  width:200px;
  
}
.dec{
  width:250%;
}
.hr{
  border-top: 1px solid rgba(152, 155, 152, 0.897);
  width: 100%;
}.para1{
  padding: 10px 10px 10px 10px;
  border: 2px solid rgba(152, 155, 152, 0.897);
  border-radius: 5px;
}
</style>