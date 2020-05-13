<template>
<div class=container>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div class="para">
        <label>USER ID</label>
        {{ user_id }}
        <!-- <label for="title">Title</label> -->
        <!-- <input v-model="comment.title" v-validate="'required'" type="text" class="form-control" name="title" /> -->
        <form name="form" @submit.prevent="handleComment">
        <div class="form-group">
          <label for="title">TITLE</label>
          {{title}}
          <!-- <input v-model="comment.title"  type="text" class="form-control" name="title" /> -->
        </div>
        <div class="form-group">
          <label for="comment">COMMENT</label>
          <!-- <input v-model="comment.comment"  type="text" class="form-control" name="comment" /> -->
          <textarea class="form-control" v-model="comment.comment" rows="5"></textarea>
        </div>
        <!-- <div class="form-group">
          <label for="comment">ID</label>
          <input v-model="comment.uid"  type="text" class="form-control" name="id" />
        </div> -->
        <div class="form-group">
          <button class="btn btn-primary btn-block" >
            <span>Submit</span>
          </button>
        </div>
        </form>
    </div>
</div>
</template>

<script>
import Comment from '../models/comment';
export default {
  name: 'AddComments',
  data() {
    return {
      // const formData : new FormData(),
      comment: new Comment('', '',''),
      title:this.$route.params.apiname,
      user_id : this.$route.params.user_id,
      user_name:this.$route.params.uname,
      // user_id:this.$route.params.user_id,
    //   submitted: false,
      // successful: false,
      message: ''
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },},
  methods:{
      handleComment(){
        this.comment.uid=this.user_id;
        this.comment.title=this.title;
        this.comment.uname=this.currentUser.username;
        // this.$router.push('/comment');
        this.$store.dispatch('comment/insert', this.comment).then(
            () => {
              alert('commented successfully')
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
    width:360px;
    clear:left;
    text-align:left;
    padding-right:10px;
}
input{padding:8px;display:block;border:none;border-bottom:1px solid black;width:20%}
</style>