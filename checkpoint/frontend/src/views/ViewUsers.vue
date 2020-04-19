<template>
  <div class="container">
    <header class="jumbotron">
      <!-- <h3>{{content}}</h3> -->
      <h3>Admin comment</h3>
    </header>
    <div>
        <!-- <li v-for="item in content" :key="item._id">
            <li v-for="user in item" :key="user._id">
            <h3>{{user}}</h3>
            <h3>{{users.status}}</h3>
            </li>
        </li> -->
        <li v-for="c in content" :key="c.comment">
         <ul>
             <!-- <h1 >ONE</h1> -->
             <br>
             <!-- <h1>The current user is {{user_id}}</h1> -->
             <!-- <h1>{{this.$route.params.admin}}</h1> -->
             <ol v-for="users in c" :key="users.username">
               <div  class="card w3-hover-shadow">
               <div class="container">
              <h3>{{users.username}}</h3>
              <!-- <h1>{{users.status}}</h1> -->
              <!-- <h3>{{ enteries.uid }}</h3> -->
              <h5><button v-if="users.status == 'active' "  class="btn btn-danger" @click.prevent="handleArchive(users._id)">archive comment</button></h5>
              <h5><button v-if="users.status == 'active' "  class="btn btn-primary" @click.prevent="handleRestore(users._id)">restore archived comment</button></h5>
              <!-- <h5 v-if="admin || user_id == enteries.uid "><router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" class="btn btn-primary">Edit</router-link></h5> -->
              </div>
               </div>
             </ol>
             <!-- <jw-pagination :items="c" @changePage="onChangePage"></jw-pagination> -->
         </ul>
     </li>
    </div>
    <router-link  :to="{name: 'comment', params: { admin:true }}" class="nav-link">Comment</router-link>
  </div>
</template>
<script>
import UserService from '../services/user.service';
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    //   this.content=axios.post('http://localhost:8080/api/auth/allUsers');
    UserService.getAllUsers().then(
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

  },
  methods: {
      handleArchive(id)
      {
        console.log("archived");
        console.log(id);
        let uri='http://localhost:8080/api/archive';
        axios.post(uri,{"id":id});
        location.reload();
      },
      handleRestore(id)
      {
        console.log("restored");
        console.log(id);
        let uri='http://localhost:8080/api/restore';
        axios.post(uri,{"id":id});
        location.reload();
      }

    }
};
</script>