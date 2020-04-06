<template>
  <div >
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
        <router-link  :to="{name: 'comment', params: { admin:false }}" class="nav-link">Comment</router-link>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'User',
  data() {
    return {
      content: ''
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
