<template>
  <div class="container">
    <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->
    <!-- <header class="jumbotron"> -->
      <h2 align="center">API</h2>
      <!-- <h1>{{ contents.api }}</h1> -->
    <ul v-for="content in contents" :key="content.api" class="ul">
    <li v-for="c in content" :key="c.apiname" class="ul">
         <ul>
             <br>
              <div class="card w3-hover-shadow">
              <div class="container">
              <label>API NAME</label>
              {{c.apiname}}<br>
              <label>CREATER</label>
              {{ c.CreatedBy}}<br>
              <label>VERSION</label>
              {{ c.Version}}<br>
              <label>API ID</label>
              {{ c._id}}<br>
              <label>ACCESS</label>
              {{c.access}}<br>
              <label>LINK</label>
              {{ c.Link }}<br>
              <label>Request</label>
              {{ c.Request }}
              <br>
              <label> Swagger </label>?
              <router-link :to="{name: 'swagger',params:{swagger:c.Swagger}}" class="nav-link">&nbsp;Swagger</router-link>
              <br>
              <router-link  :to="{name: 'comment', params: { admin:false,id:currentUser.id,apiname:c.apiname,name:currentUser.username }}" class="nav-link"><font-awesome-icon icon ="comment"/>&nbsp;Comment</router-link>
              <router-link v-if="c.Request == 'post'" :to="{name: 'apitest',params:{link:c.Link,data:c.Swagger}}" class="nav-link">&nbsp;Test POST</router-link>
              <router-link v-if="c.Request == 'get'" :to="{name: 'apitestget',params:{link:c.Link}}" class="nav-link">&nbsp;Test GET</router-link>
              <div v-if="c.access == 'private'">
              <button @click="checkaccess(content.apiname)">
              <font-awesome-icon icon="home" />send request
              </button>
              &nbsp;&nbsp;
              <!-- <button @click="checkToken"> -->
              <!-- <font-awesome-icon icon="home" />Token check -->
              
              <!-- </button> -->
              </div>
              <div v-else>
                <!-- <button >
              <font-awesome-icon icon="home" />Try me
                </button> -->
              </div>
              </div>
              </div>
         </ul>
     </li>
     </ul>
    <!-- </header> -->
    
</div>
</template>

<script>

import UserService from '../services/user.service';
import APIRecords from '../models/APIRecords';
import axios from 'axios';

    export default {
      data() {
        return {
        contents:'',
        APIRecords: new APIRecords('', ''),
        request:'',
        token:''
         // id:'',
          //comment: new Comment('', '') 
        //   post: {}
        }
      },
      computed: {
      currentUser() {
      return this.$store.state.auth.user;
      }
      },
      created() {
        //   this.id=this.$route.param.id;
         // console.log("the id "+this.$route.params.id);
        // let uri = `http://localhost:4000/posts/edit/${this.$route.params.title}`;
        // this.axios.get(uri).then((response) => {
        //     this.post = response.data;
        // });
      },
       mounted() {
       console.log("Method triggered");

          UserService.getTest().then(
      response => {
        this.contents = response.data;
      },
      error => {
        this.contents =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
       },
      methods: {
        updatePost() {
         //console.log("the id "+this.$route.params.id);
        // console.log("Method triggered");

         let uri='http://localhost:8080/api/viewapi';
         this.content=axios.post(uri,{});
         //this.$router.push('/comment');
         //location.reload();
        },
        checkaccess(apiname){
          UserService.checkaccess(apiname,this.currentUser.username).then(
            response=>{
                this.request=response.data
                  alert("request sent to the user")
                
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          )
        },checkToken(){
          UserService.checkToken(this.currentUser.username).then(
            response=>{
              this.token= prompt("Enter access token")
                  if(this.token.localeCompare(response.data.token)){
                   alert("Invalid token") 
                  }else{
                    alert("token accepted")
                         
         
              this.$router.push('/home');
            
            
        
        
                  }
            }
          )
        },
        tryme(){
              this.$router.push('/home');
            }
      }
    }
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
  .ul {
    list-style-type: none;
}
label {
    width:280px;
    clear:left;
    text-align:left;
    padding-right:10px;
}
</style>