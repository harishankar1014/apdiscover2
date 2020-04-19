<template>
    <div>
        <h1>Archived Comments</h1>
        <div v-if="content == null">
            <!-- <h1>No archived comments</h1> -->
        </div>
        <div v-else>
        <li v-for="c in content" :key="c.comment">
         <ul>
             <!-- <h1 v-if="count !== -404">The archived comments are</h1> -->
             <!-- <h1>{{this.$route.params.admin}}</h1> -->
             <ol v-for="enteries in c" :key="enteries.comment">
               <div v-if="enteries.title=='one' && enteries.archived== true" class="card w3-hover-shadow">
               <div class="container">
              <h3>{{enteries.comment}}</h3>
              <!-- <h3>{{ enteries.uid }}</h3> -->
              <!-- {{count = count +1}} -->
              <h5><button v-if="admin || user_id == enteries.uid "  class="btn btn-danger" @click.prevent="handleDelete(enteries._id)">Delete</button></h5>
              <h5 v-if="admin || user_id == enteries.uid "><router-link :to="{name: 'editComment', params: { id: enteries._id,comment: enteries.comment }}" class="btn btn-primary">Edit</router-link></h5>
              <h5><button  class="btn btn-danger" @click.prevent="handleRestore(enteries._id)">Restore</button></h5>
              </div>
               </div>
             </ol>
             <!-- <jw-pagination :items="c" @changePage="onChangePage"></jw-pagination> -->
         </ul>
     </li>
     <!-- <h1>{{count}}</h1>
     <h1 v-if="count==-404">No archived comment</h1> -->
     </div>
     <router-link  :to="{name: 'comment', params: { admin:true }}" class="nav-link"> Go back to Comment</router-link>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:'Archive',
    data() {
    return {
      content:this.$route.params.comment,
      count:-404
    //   user_id:this.$route.params.id,
    //   comment: new Comment('', ''),
    //   admin:this.$route.params.admin,
    //   name:'hari',
    //   regex:'',
      // admin:this.$route.params.admin,
    };
  },
  methods: {
      handleDelete(id)
      {
        // console.log(id);
        let uri='http://localhost:8080/api/delete';
        axios.post(uri,{"id":id});
        location.reload();
      },
      handleRestore(id)
      {
        // console.log(id);
        let uri='http://localhost:8080/api/restoreOne';
        axios.post(uri,{"id":id});
        location.reload();
      }
      // },
      // previousPage()
      // {
      //     console.log("previousPage");
      // },
      // nextPage()
      // {
      //     console.log("nextPage");
      // },
      // getLength: function()
      // {
      //        this.length=axios.post('http://localhost:8080/api/count',{"title":"one"});
      //        console.log(this.length);
      // }
    }
}
</script>