<template>
  <div class="container">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <header class="jumbotron">
    <li v-for="c in content" :key="c.comment">
         <ul>
             <h1 >{{c[0].title}}</h1>
             <br>
             <h1>The current user is {{user_id}}</h1>
             <!-- <h1>{{this.$route.params.admin}}</h1> -->
             <li v-for="enteries in c" :key="enteries.comment">
               <div class="card w3-hover-shadow">
               <div class="container">
              <h3>{{enteries.comment}}</h3>
              <h3>{{ enteries.uid }}</h3>
              <h5><button v-if="admin || user_id == enteries.uid "  class="btn btn-danger" @click.prevent="handleDelete(enteries._id)">Delete</button></h5>
              <h5><router-link :to="{name: 'editComment', params: { id: user_id,comment: enteries.comment }}" class="btn btn-primary">Edit</router-link></h5>
              </div>
               </div>
             </li>
             <!-- <jw-pagination :items="c" @changePage="onChangePage"></jw-pagination> -->
         </ul>
     </li>
    </header>
    <router-link  :to="{name: 'addComment', params: { user_id: user_id }}" class="nav-link">Add Comment</router-link>
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
      content:'',
      user_id:this.$route.params.id,
      comment: new Comment('', ''),
      admin:this.$route.params.admin,
      // admin:this.$route.params.admin,
    };
  },
  mounted() {
    CommentService.getTest().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    // console.log(this.content[0]);
    // this.admin=this.$route.params.admin;
  },
  methods: {
      handleDelete(id)
      {
        console.log(id);
        let uri='http://localhost:8080/api/delete';
        axios.post(uri,{"id":id});
        location.reload();
      },
      previousPage()
      {
          console.log("previousPage");
      },
      nextPage()
      {
          console.log("nextPage");
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