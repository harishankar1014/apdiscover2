<template>
    <div>
        <h1>Test</h1>
    <li v-for="c in content" :key="c.comment">
         <ul>
             <h1>The current user is {{user_id}}</h1>
             <ol v-for="enteries in c" :key="enteries.comment">
               <div v-if="user_id == enteries.uid" class="card w3-hover-shadow">
               <div class="container">
               <h3>{{enteries.title}}</h3>
              <h3>{{enteries.comment}}</h3>
              <h5><button   class="btn btn-danger" @click.prevent="handleDelete(enteries._id)">Delete</button></h5>
              <h5><router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" class="btn btn-primary">Edit</router-link></h5>
              </div>
               </div>
             </ol>
         </ul>
     </li>
     </div>
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
        console.log(id);
        let uri='http://localhost:8080/api/delete';
        axios.post(uri,{"id":id});
        location.reload();
      }
      }
}
</script>