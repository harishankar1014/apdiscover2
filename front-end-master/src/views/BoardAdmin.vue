<template>
  <div class="container">
    <header class="jumbotron"> 
      <h3>{{alluser['username']}}</h3>
  <table class="table table-bordered">
			<thead>
				<tr>
					<th> username</th>
					<th> email</th>
					<th> roles Taken</th>
          <th> activity status</th>
          <th> User status </th>
				</tr>
			</thead>
			<tr v-for="AllUsers in alluser" :key="AllUsers.id" >
				<td>{{AllUsers.username}}</td>
        <td>{{AllUsers.email}}</td>
        <td v-if="AllUsers.roles.toString() === ans.toString()" >user</td>
        <td v-else-if="AllUsers.roles.toString() === ans1.toString()">admin</td>
        <td v-else>moderator</td>
        <td><button v-on:click="changeStatus(AllUsers.username)" v-if="AllUsers.status.localeCompare('active')">Locked</button>
        <button v-on:click="changeStatus(AllUsers.username)" v-else>UnLocked</button></td>
        <td><button v-on:click="changeblocked(AllUsers.username)">{{AllUsers.check_blocked}}</button></td>
			</tr>
		</table>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';


export default {
  name: 'Admin',
  data() {
    return {
      alluser:[],
      ans: [ "5e78b19e2b2d0029c44c18b5" ],
      ans1: [ "5e78b19e2b2d0029c44c18b7" ],
      date: '',
      times: '',
    };
  },methods:{
    changeStatus(uname){
      UserService.userStatus(uname).then(
      response => {
        alert("User status changed!!...");
        uname=response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    },
    changeblocked(uname){
        UserService.checkBlocked(uname).then(
      response => {
        alert("Account  blocked");
        uname=response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    }
  },
  mounted() {
    UserService.getAdminBoard().then(
      response => {
        this.content = response.data;
        this.date=new Date();
        this.times=new Date(this.date.getTime() - (7 * 24 * 60 * 60 * 1000));
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getAllUsers().then(
      response=>{
        this.alluser = response.data;
      },
      error => {
        this.alluser =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style scoped>
.weather-data {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.weather-icon {
  flex-grow: 1;
}

.weather-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
}

.weather-stats .location {
  font-size: 30px;
}

.weather-temp {
  flex-grow: 1;
  font-size: 30px;
}

img {
  width: 70px;
}

button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
