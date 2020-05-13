<template>
    <div>
    <h3>What's New??</h3>
    <textarea class="form-control" v-model="data" rows="3"></textarea>
    <button @click="submit">Upload</button>
<div class ="para" v-for="modal in whatdata" :key="modal.data">
              {{modal.data}}
              <button class="icon"  @click.prevent="handleDelete(modal._id)"><font-awesome-icon icon="trash" /></button>
            </div>
    </div>
</template>
<script>
import userService from '../services/user.service';
export default {
    data(){
        return{
            data:'',
            whatdata:''
        }
    }, mounted(){
        userService.getwhats().then(
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
    },
    methods:{
         handleDelete(id)
      {
        userService.deletewhats(id).then(
          response=>{
            alert(response.data)
          }
        )
        location.reload();
      },
        submit(){
            userService.sendnew(this.data).then(
                response=>{
                    alert(response.data)
                }
            )
        }
    },
   
}
</script>