<template>
  <div class="container">
    &nbsp;
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
    <div class="para">
    <h6>API TOKEN REQUESTS:</h6>
    <!-- <h5>{{request}}</h5> -->
    <div v-if=" request == ''">
            <h6 align="center">No requests</h6>
        </div>
        
        <div v-else>
    
    <div v-for="c in request" :key="c.username" class="parareq">
      
    <h6 align="center"> {{c}}</h6>         
        <!-- <span>Picked: {{ apirequest }}</span> -->
    <button @click="apibutton('accept',c)">Accept</button>&nbsp;&nbsp;
    <button @click="apibutton('deny',c)">Deny</button>
    </div>
        </div>
      <hr>
    <!-- <h5>Api request from you</h5> -->
    <h6>TOKEN FOR YOU</h6>
    <div v-if=" token == ''">
            <h6 align="center">No tokens</h6>
        </div>
        
        <div v-else>
      <label>TOKEN</label>
       {{token}} 
            
        </div>
        
        <!-- <div v-else>
        <h5 align="center">No tokens</h5>
        </div> -->
    </div>
    <router-link to="/displayapi" class="nav-link">
      <font-awesome-icon icon="eye" />&nbsp;View Api
    </router-link>
    <router-link to="/viewapi" class="nav-link">
      <font-awesome-icon icon="upload" />&nbsp;Post Api
    </router-link>
  </div>
</template>
<script>
import UserService from '../services/user.service';
import userService from '../services/user.service';

export default {
  name: 'User',
  data() {
    return {
      content: '',
      request:'',
      apirequest:'',
      token:''
    };
  },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
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
    userService.getRequest(this.currentUser.username).then(
      response=>{
        this.request=response.data.request;
        this.token=response.data.token;
      }
    )
  },methods:{
    apibutton(apirequest,user){
      UserService.getApiAccess(apirequest,user,this.currentUser.username).then(
        response=>{
        alert(response.data)
        }
      )
    }
  }
};
</script>
<style>
.parareq{
  padding: 15px 15px 15px 15px;
  border: 2px solid rgba(152, 155, 152, 0.897);
  border-radius: 5px;
  width: 150px;
}
.jumbotron{
  padding: 15px 15px 15px 15px;
}


</style>
