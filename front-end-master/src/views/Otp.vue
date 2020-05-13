<template>
<div class="col-md-12">
    <div class="card card-container">
    <form name="form" @submit.prevent="otpcheck">
        <div>Username : {{currentUser}}</div>
        <div class="form-group">
        <label for="otp">OTP</label>
          <input
            v-model="user.otp"
            v-validate="'required'"
            type="number"
            class="form-control"
            name="otp"
          />
          <div
            v-if="errors.has('otp')"
            class="alert alert-danger"
            role="alert"
          >OTP required</div>
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Verify</span>
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

export default {
  name: 'otp',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
    };
  },computed:{
    currentUser() {
      return this.$store.state.auth.resetData;
    }
  },
    methods: {
    otpcheck() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        this.user.username=this.currentUser;
        if (this.user.username) {
          this.$store.dispatch('auth/otp', this.user).then(
            () => {
              this.$router.push('/changepwd');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
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