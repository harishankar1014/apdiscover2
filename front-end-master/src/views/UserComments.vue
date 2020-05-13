<template>
<div>
  &nbsp;&nbsp;
    <div class="para">
        <!-- <h1>Test</h1> -->
    <li v-for="c in content" :key="c.comment" class="ol">
         <ul>
             <label>USER ID </label>
             {{user_id}}
             <ol v-for="enteries in c" :key="enteries.comment">
               <div v-if="user_id == enteries.uid" class="card w3-hover-shadow">
               <div class="container">
                 <label>API NAME</label>
               {{enteries.title}}<br>
               <label>COMMENT</label>
              {{enteries.comment}}<br>
              <label><button   class="icon" @click.prevent="handleDelete(enteries._id)"><font-awesome-icon icon="trash" /></button></label>
              <router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" class="icon"><font-awesome-icon icon="edit" /></router-link>
              </div>
               </div>
             </ol>
             <br>
         </ul>
     </li>
     </div></div>
</template>
<script>
import axios from 'axios';
export default {
     data() {
        return {
        //   id:this.$route.params.id,
          user_id:this.$route.params.user_id,
          content: this.$route.params.comment 
        //   post: {}
        }
      },
      methods:{
          handleDelete(id)
      {
        
        let uri='http://localhost:8080/api/delete';
        axios.post(uri,{"id":id});
        location.reload();
      }
      }
}
</script>
<style>
.para{
  padding: 25px 25px 25px 25px;
  border: 2px solid rgba(152, 155, 152, 0.897);
  border-radius: 5px;
}
.hr{
  border-top: 1px solid rgba(152, 155, 152, 0.897);;
}
label {
    width:160px;
    clear:left;
    text-align:left;
    padding-right:10px;
}
input{padding:8px;display:block;border:none;border-bottom:1px solid black;width:20%}
.ol {
    list-style-type: none;
}
</style>