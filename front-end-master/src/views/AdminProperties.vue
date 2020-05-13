<template>
<div class="space">
  <div class="para">
<strong>CHANGE HEADER COLOR</strong><br>
<color-picker v-model="color" >select colors</color-picker>
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
<button class="button" @click="submitColor">change color</button>
<hr>
 <div class="dropdown">
      <strong>SELECT THE MENUS THAT SHOULD BE SHOWN TO USERS </strong><br>
      <button class="dropbtn1">Show Apps</button>
      <div class="dropdown-content"><hr>
        <label class="container">&nbsp;&nbsp;&nbsp;&nbsp;Newsfeed
        <input type="checkbox" value="NewsFeed" v-model="hideapp">
        <span class="checkmark"></span>
        </label><hr>
        <label class="container">&nbsp;&nbsp;Uploads<input type="checkbox" value="Upload" v-model="hideapp">
        <span class="checkmark"></span>
        </label>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button class="button" @click="hidecomponent(hideapp)">save</button>
  </div>
</div>
</div>
</template>
<script>
import ColorPicker from 'vue-bootstrap-colorpicker'
import UserService from '../services/user.service'

export default {
  name: 'adminproperties',
  components: {
    ColorPicker
  },
  data() {
    return {
      apps:[],
      hideapp:[],
      color: '',
      content: ''
    };
  },mounted(){
      UserService.getApps().then(
        response=>{
          this.apps=response.data.apps;
        },error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
      )
  },
  methods:{
      changeColor: function (color) {
      this.color = color;
    },hidecomponent(hide){
      UserService.hidecomponents(hide).then(
          alert("success")
      )
    },
    submitColor(){
      UserService.setColor(this.color).then(
        response=>{
          alert(response.data)
        },
        error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
      )
    }
  }
};
</script>
<style>
.space{
  padding-top: 50px;
}
.hr{
  border-top: 1px solid rgba(1, 8, 1, 0.897);
  padding-top: 5px;
}
.para{
  padding: 25px 25px 25px 25px;
  border: 2px solid rgba(81, 83, 81, 0.897);
  border-radius: 5px;
}
.dropbtn1 {
  background-color:rgb(160, 150, 150);
  color: rgb(7, 3, 3);
  padding: 8px;
  font-size: 15px;
  border: black;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  
}
.button{
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  padding: 20px 20px;
  text-decoration: none;
  display: block;
}
</style>
