<template>
    <div>
        <h1>Archived Comments</h1>
        <div v-if="content == null">
            <h1>No archived comments</h1>
        </div>
        <div v-else>
        <ol v-for="posts in displayedPosts" :key="posts.comment">
        <div class="container">
      {{ posts.name}}    
      {{ posts.comment }}
      <h5><button v-if="admin || user_id == posts.uid "  class="btn btn-danger" @click.prevent="handleDelete(posts._id)">Delete</button></h5>
      <h5 v-if="admin || user_id == posts.uid "><router-link :to="{name: 'editComment', params: { id: posts._id,comment: posts.comment }}" class="btn btn-primary">Edit</router-link></h5>
      <h5><button  class="btn btn-danger" @click.prevent="handleRestore(enteries._id)">Restore</button></h5>  
        </div>
      </ol>
      <h5><button v-if="start+5 < filteredComments"  class="btn btn-danger" @click="start=start+5" >Next</button></h5>
      <h5><button  v-if="start !== 0 && start-5 >= 0"  class="btn btn-danger" @click="start=start-5" >Previous</button></h5>
      {{ filteredComments }}
     <h1>{{count}}</h1>
     <h1 v-if="count==-404">No archived comment</h1>
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
      count:-404,
      start:0,
      end:1
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
  },
  computed:
    {
        displayedPosts () {
      // return this.paginate(this.test);
      var archived= this.content.comment.filter(c =>{ return c.archived == true});
      return archived.slice(this.start,this.start+5);
    },
    filteredComments: function(){
            // console.log(this.len);
            var archived= this.content.comment.filter(c =>{ return c.archived == true});
            return archived.length;
          // return ret;
        }
    }
}
</script>