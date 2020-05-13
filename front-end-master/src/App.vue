<template>
  <div id="app">
    <!-- navbar-custom -->
     <!-- navbar-expand navbar-dark bg-dark -->
    <nav class="navbar navbar-expand navbar-custom">  
      <div v-if="currentUser" class="dropdown">
      <button class="dropbtn"  @click="active=!active"><font-awesome-icon icon="bars" />&ensp;</button>
      <!-- <div id="wrapper" class="toggled"> -->
      <vs-sidebar parent="body" default-index="1"  color="secondary" class="sidebar" spacer v-model="active">
        <br><h4 align="center">MENU BAR</h4><hr>
        <vs-sidebar-item  v-for="AllUsers in currentUser.menuitems" :key="AllUsers.id" @click="goComponent(AllUsers)">        
        <h5><font-awesome-icon icon="newspaper" />&nbsp;&nbsp;{{AllUsers}}</h5>
        </vs-sidebar-item>
        <vs-sidebar-item @click="show">
          what's new?
        </vs-sidebar-item>
        <!-- <vs-sidebar-item index="2" icon="gavel">
        History
        </vs-sidebar-item> -->
      </vs-sidebar>
      <modal name="hello-world">
            <div v-for="modal in whatdata" :key="modal.data">
              <li>{{modal.data}}</li>
            </div>
    </modal>        
      <!-- </div> --> 
      <!-- <div class="dropdown-content">
        <li class="nav-item" >
          <div class="nav-link">
          <font-awesome-icon icon="newspaper" />{{AllUsers}}
          </div>
        </li>
      </div> -->
      </div>
      <a href class="navbar-brand" @click.prevent>apdiscover</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
        <router-link to="/adminproperties" class="nav-link">properties</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
        <router-link to="/whatsnew" class="nav-link">What's new</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
.w3-bar-block .w3-bar-item {padding:20px}
:root{
    --primary-color: #C5C5C5!important;
    --secondary-color: #6C7478!important;
    --tertiary-color: #FFFFFF!important;
    --success-color: #80b855!important;
    --warning-color: #eaca44!important;
    --error-color: #ef4d4d!important;
  }
.navbar-custom .navbar-brand{
  color: #ddd;
} 
.navbar-custom .navbar-text { 
    color: black; 
}
.nav-item{
   list-style-type: none;
}
.navbar-custom { 
    background-color: var(--secondary-color); 
} 
.hr{
  border-top: 1px solid rgba(1, 8, 1, 0.897);
  padding:10px 10px 5px 10px;
}
.fontst{
  font-size: 50px;
  padding-left: 10px;
  
}
.dropbtn {
  background-color:var(--secondary-color);
  color: white;
  padding: 5px;
  font-size: 20px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  
}
.vs-sidebar{
  background-color:var(--secondary-color);
  color:white;
  font-size: 15px;
}
.vs-sidebar-item{
  color: white;
  padding-left: 50px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}
#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#wrapper.toggled {
  padding-left: 250px;
}
#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}
#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}
#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}
/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}
.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}
.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}
.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}
.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}
.sidebar-nav > .sidebar-brand a {
  color: #999999;
}
.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}
</style>
<script>
import UserService from './services/user.service'
import 'vuesax/dist/vuesax.css'
export default {
  name: 'app',
  data(){
    return {
      active:false,
      whatdata:''
    }
  },
  mounted(){
    UserService.getwhats().then(
      response=>{
        this.whatdata=response.data
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    )
    UserService.getColor().then(
      response => {
        let bodyStyles = document.body.style;
        bodyStyles.setProperty('--secondary-color', response.data);
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  methods: {
    show(){
      this.$modal.show('hello-world');
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    goComponent(menu){
      this.$router.push('/'+menu);
    }
  }
};
</script>
