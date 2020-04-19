<template>
  <div class="container">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
          <!-- <h1>{{displayedPosts}}</h1> -->
    <header class="jumbotron">
          <h1>Search</h1>
          <input v-model="search"  type="text" placeholder="search box"/>
        <!-- <br>
        <div class="form-group">
          <label for="title">Regex</label>
          <input v-model="regex"  type="text" class="form-control" name="title" />
          <p>{{ regex | set }} </p>
        </div> -->
      <!-- <p>Hi {{ name | fallback }}!</p> - -->
      <!-- {{ test }} -->
      <!-- {{ filteredComments }} -->
      <ol v-for="enteries in filteredComments" :key="enteries.comment">
               <div v-if="enteries.title=='one' && enteries.archived== false" class="card w3-hover-shadow">
               <div class="container">
              <h3>{{enteries.comment}}</h3>
              <h5><button v-if="admin || user_id == enteries.uid "  class="btn btn-danger" @click.prevent="handleDelete(enteries._id)">Delete</button></h5>
              <h5 v-if="admin || user_id == enteries.uid "><router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" class="btn btn-primary">Edit</router-link></h5>
              <h5><button v-if="admin || user_id == enteries.uid "  class="btn btn-danger" @click.prevent="handleArchive(enteries._id)">Archive</button></h5>
              </div>
               </div>
             </ol>
    </header>
    <router-link  :to="{name: 'addComment', params: { user_id: user_id }}" class="nav-link">Add Comment</router-link>
    <router-link  :to="{name: 'userComment', params: { user_id: user_id,comment:content }}" class="nav-link">View My Comment</router-link>
    <router-link  :to="{name: 'archivedComments', params: { user_id: user_id,comment:content }}" class="nav-link">Archived Comment</router-link>
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
      test:this.ret,
      user_id:this.$route.params.id,
      comment: new Comment('', ''),
      admin:this.$route.params.admin,
      search:"",
      start:0,
      fComments:this.filteredComments
      
    };
  },
  created()
  {
      this.length=axios.post('http://localhost:8080/api/count',{"title":"one"});
      // console.log(this.length);
      //  this.length=axios.post('http://localhost:8080/api/count',{"title":"one"});
      //  console.log(this.length);
  },
  mounted() {
    // console.log("mounted");
    CommentService.getTest().then(
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
      }
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
            var ret= this.test.filter(c =>{ return c.comment.toLowerCase().includes(this.search)});
          return ret;
        },
        displayedPosts () {
      return this.test
    }
    }
};

</script>

<style scoped>
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
  width: 2000px;
}
.card-body{
  width: 2000px;
}
.card-footer{
  width: 2000px;

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
</style>