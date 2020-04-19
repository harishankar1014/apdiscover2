<template>
  <div >
    <h1>{{user.email}}</h1>
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
        <router-link  :to="{name: 'comment', params: { admin:false,id:user.id }}" class="nav-link">Comment</router-link>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'User',
  data() {
    return {
      content: '',
      user:this.$store.state.auth.user,
    };
  },
  mounted() {
    UserService.getUserBoard().then(
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
