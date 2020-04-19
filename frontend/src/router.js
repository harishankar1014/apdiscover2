import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import UserComment from './views/UserComments.vue';
import ViewUsers from './views/ViewUsers.vue';
import ArchivedComments from './views/ArchivedComments.vue';
Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      // lazy-loaded
      component: () => import('./views/ViewComments.vue')
    },
    {
      path: '/addComment',
      name: 'addComment',
      // lazy-loaded
      component: () => import('./views/AddComment.vue')
    },
    {
      path: '/edit/:id',
      name: 'editComment',
      // lazy-loaded
      component: () => import('./views/UpdateComment.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/userComment',
      name: 'userComment',
      // lazy-loaded
      component: UserComment
    },
    {
      path: '/viewUsers',
      name: 'viewUsers',
      component:ViewUsers
    },
    {
      path: '/archivedComments',
      name: 'archivedComments',
      component:ArchivedComments
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
