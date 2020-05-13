import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user ,resetData:null }
  : { status: { loggedIn: false }, user: null ,resetData:null};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    reset({ commit }, user) {
      return AuthService.reset(user).then(
        user => {
          commit('resetSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('resetFailure');
          return Promise.reject(error);
        }
      );
    },
    otp({ commit }, user) {
      return AuthService.otp(user).then(
        user => {
          commit('otpSuccess',user);
          return Promise.resolve(user);
        },
        error => {
          commit('otpFailure');
          return Promise.reject(error);
        }
      );
    },
    changepwd({ commit }, user) {
      return AuthService.otp(user).then(
        user => {
          commit('changepwdSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('changepwdFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    otpSuccess(state,user){
      state.status.loggedIn=false;
      state.resetData=user.username;
    },
    otpFailure(state){
      state.status.loggedIn=false;
    },
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    resetFailure(state) {
      state.status.loggedIn = false;
    },
    resetSuccess(state,user) {
      state.status.loggedIn = false;
      state.resetData=user.username;
    },
  }
};
