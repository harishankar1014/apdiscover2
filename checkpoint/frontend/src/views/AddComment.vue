<template>
    <div>
        <!-- <label for="title">Title</label> -->
        <!-- <input v-model="comment.title" v-validate="'required'" type="text" class="form-control" name="title" /> -->
        <form name="form" @submit.prevent="handleComment">
        <div class="form-group">
          <label for="title">Title</label>
          <input v-model="comment.title"  type="text" class="form-control" name="title" />
        </div>
        <div class="form-group">
          <label for="comment">Comment</label>
          <!-- <input v-model="comment.comment"  type="text" class="form-control" name="comment" /> -->
          <textarea class="form-control" v-model="comment.comment" rows="5"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" >
            <span>Submit</span>
          </button>
        </div>
        </form>
    </div>
</template>

<script>
import Comment from '../models/comment';
export default {
  name: 'AddComments',
  data() {
    return {
      // const formData : new FormData(),
      comment: new Comment('', ''),
    //   submitted: false,
      // successful: false,
      message: ''
    };
  },
  methods:{
      handleComment(){
        console.log(this.comment.comment);
        // this.$router.push('/comment');
        this.$store.dispatch('comment/insert', this.comment).then(
            () => {
              this.$router.push('/comment');
            },
            error => {
              // this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
      }
      }
  };
</script>