<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
    <router-link  :to="{name: 'comment', params: { admin:true }}" class="nav-link">Comment</router-link>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Admin',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
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
  }
};
</script>
