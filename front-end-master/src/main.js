import Vue from 'vue';
import Vmodal from 'vue-js-modal';
import App from './App.vue';
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueSimpleAlert from "vue-simple-alert";
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faBars,
  faEdit,
  faUpload,
  faNewspaper,
  faTrash,
  faArchive,
  faRecycle,
  faComment,
  faEye,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt,faEdit,faBars,faUpload,faComment,faEye,faPlus,faNewspaper,faTrash,faArchive,faRecycle);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuesax);
Vue.use(Vuex);
Vue.use(Vmodal)
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
