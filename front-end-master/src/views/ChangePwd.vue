<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="password">new passsword</label>
          <input
            v-model="user.password"
            ref="password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="errors.has('newpassword')"
            class="alert alert-danger"
            role="alert"
          > required!</div>
        </div>
        <div class="form-group">
          <label for="password">conform Password</label>
          <input
            v-model="password"
            v-validate="'required|confirmed:password'"
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          > Enter same password !</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>change</span>
          </button>
        </div>
        
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../models/user';
import UserService from '../services/user.service';
export default {
  name: 'ChangePwd',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
      password:'',
    };
  },computed:{
    currentUser() {
      return this.$store.state.auth.resetData;
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll(this.user.password.localeCompare(this.password)).then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        this.user.username = this.currentUser;
          UserService.changepwd(this.user).then(
            () => {
              alert('password reset successfull');
              this.$router.push('/login');

            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
    });
    }
 }
  };
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>