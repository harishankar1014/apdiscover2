// EditComponent.vue

<template>
  <div>
    <h1>{{this.$route.params.id}}</h1>
     <!-- <form @submit.prevent="updatePost"> -->
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="comment.title">
          </div>
        </div>
        </div> -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="comment.comment" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary"  @click.prevent="updatePost()">Update</button>
        </div>
    <!-- </form>  -->
  </div>
</template>

<script>
import Comment from '../models/comment';
import axios from 'axios';
    export default {

      data() {
        return {
          id:this.$route.params.id,
          comment: new Comment('', '') 
        //   post: {}
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
      methods: {
        updatePost() {
        //  console.log("the id "+this.$route.params.id);
        //  console.log(this.comment.comment);
         let uri='http://localhost:8080/api/update';
         axios.post(uri,{"id":this.$route.params.id,"comment":this.comment.comment});
         this.$router.push({name:'user',params:{id:this.id}});
        //  location.reload();
        }
      }
    }
</script>