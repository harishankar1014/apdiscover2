import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { comment} from './comment.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    comment
  }
});
