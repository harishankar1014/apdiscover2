<template>
  <div class="container">
  <!-- <input ref="pictureInput" @change="onChange" width="100" height="100" radius="50" margin="16" accept="image/jpeg,image/png" type="file"/> -->
      &nbsp;&nbsp;&nbsp;&nbsp;
    <div class="para">
      <h3>Personal info</h3><br>
      <label>USERNAME</label>
      {{currentUser.username}}
      <hr>
      <label>TOKEN</label>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}<br>
      <hr>
      <label>ID</label>
      {{currentUser.id}}
    </div>
     &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;
    <div class="para">
      <h3>Contact info</h3>
      <label>EMAIL</label>
      <input v-if="edit" v-model="newmail"/>
      <strong v-if="!edit"> {{currentUser.email}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="inputBox" class="icon"><font-awesome-icon v-if="!edit" icon="edit" />{{text}} </button> 
    <hr>
      <label>CHANGE PASSWORD</label>
      
      <input v-if="passedit" v-model="newpass" 
                             v-validate="'required'"
                             type="password"
                            class="input"
            name="password"/>
              <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >Password is required!</div>
      <button @click="passinput(newpass)" class="icon">{{text1}}&nbsp;<font-awesome-icon v-if="!passedit" icon="edit" /></button> 
    <hr>
    <label>PHONE NUMBER</label>
    </div>
    
     &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;
    <p class="para">
    <label>AUTHORITIES:</label>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
    </p>
  </div>
</template>
<script>
import userService from '../services/user.service';
import User from '../models/user';

export default {
  name: 'Profile',
  data(){
    return{
      user:new User(),
      edit: false,
      passedit: false,
      icon:"edit",
      text:'',
      text1:'change',
      newmail:'',
      avatar:null,
      newpass:''
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods:{
    inputBox(){
     
      if(this.edit){
          this.edit=!true;
          this.text=""
          this.currentUser.email=this.newmail;
      userService.changemail(this.currentUser).then(
      response =>{
      alert("changed successfully");
                response.data;
      },
     
    )
      }else{
      this.edit=true;
      this.text="submit"
    }
       
    },
    onChange (image) {
      if (image) {
        userService.uploadimg(this.currentUser.username,image).then(
          alert('Picture loaded.')
        )
      } else {
        alert('FileReader API not supported: use the <form>, Luke!')
      }
    },passinput(newpassword){
      this.$validator.validate().then(isValid => {
        if (isValid) {
      if(this.passedit){
        this.passedit=!this.passedit;
        this.user.username=this.currentUser.username;
        this.user.password=newpassword;
        this.text1='change';
        this.newpass='';
        userService.changepwd(this.user).then(
                  response=>{
                alert("changed successfully");
                response.data;
        },
        error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }

        )
      }else{
        this.passedit=!this.passedit;
        this.text1="submit"
        
      }
      }
      });
    }
}
}
</script>
<style>
.icon {
  background-color:white;
  color: black;
  padding: 5px;
  font-size: 20px;
  border: none;
}
.para{
  padding: 25px 25px 25px 25px;
  border: 2px solid rgba(152, 155, 152, 0.897);
  border-radius: 5px;
}
.hr{
  border-top: 1px solid rgba(152, 155, 152, 0.897);;
}
label {
    width:360px;
    clear:left;
    text-align:left;
    padding-right:10px;
}
input{padding:8px;display:block;border:none;border-bottom:1px solid black;width:20%}

    

.alert {
   width:25%;    
}

</style>