<template>
<div>
  &nbsp;&nbsp;
    <div class="para">
        <h5 align="center">Archived Comments</h5>
       
      <hr>
        <div v-if="content == null">
            <h5 align="center">No archived comments</h5>
        </div>
        
        <div v-else>
        <li v-for="c in content" :key="c.comment" class="ul">
         <ul >
             <!-- <h1 v-if="count !== -404">The archived comments are</h1> -->
             <!-- <h1>{{this.$route.params.admin}}</h1> -->
             <ol v-for="enteries in c" :key="enteries.comment">
               <div v-if="enteries.title==title && enteries.archived== true" class="card w3-hover-shadow">
               <div class="container">
              <label>COMMENT</label>
              {{enteries.comment}}<hr>
              <!-- <h3>{{ enteries.uid }}</h3> -->
              <!-- {{count = count +1}} -->
              <button v-if="admin || user_id == enteries.uid "  class="icon" @click.prevent="handleDelete(enteries._id)"><font-awesome-icon icon ="trash"/></button>
              <button v-if="admin || user_id == enteries.uid "><router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" class="icon"><font-awesome-icon icon ="edit"/></router-link></button>
              <button  class="icon" @click.prevent="handleRestore(enteries._id)"><font-awesome-icon icon ="recycle"/></button>
              </div>
               </div>
               
             </ol>
             <!-- <jw-pagination :items="c" @changePage="onChangePage"></jw-pagination> -->
         </ul>
     </li>
     <!-- <h1>{{count}}</h1>
     <h1 v-if="count==-404">No archived comment</h1> -->
     </div>
     <router-link  :to="{name: 'comment', params: { admin:true }}"  class="nav-link" align="center"> Go back to Comment</router-link>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default{
    name:'Archive',
    data() {
    return {
      title:this.$route.params.apiname,
      content:this.$route.params.comment,
      count:-404
    //   user_id:this.$route.params.id,
    //   comment: new Comment('', ''),
    //   admin:this.$route.params.admin,
    //   name:'hari',
    //   regex:'',
      // admin:this.$route.params.admin,
    };
  },
  methods: {
      handleDelete(id)
      {
        // console.log(id);
        let uri='http://localhost:8080/api/delete';
        axios.post(uri,{"id":id});
        location.reload();
      },
      handleRestore(id)
      {
        // console.log(id);
        let uri='http://localhost:8080/api/restoreOne';
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
    }
}
</script>
<style>
.icon {
  background-color:white;
  color: black;
  padding: 5px;
  font-size: 15px;
  border: none;
}
.ul {
    list-style-type: none;
}
</style>