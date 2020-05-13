import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import AdminProperties from './views/AdminProperties';
import UserComment from './views/UserComments.vue';
import ViewUsers from './views/ViewUsers.vue';
import ArchivedComments from './views/ArchivedComments.vue';
import ApiTest from './views/ApiTest.vue'
import ApiTestGet from './views/ApiTestGet.vue'
import Swagger from './views/Swagger.vue'
Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/adminproperties',
      name: 'adminpropoerties',
      component: AdminProperties
    },
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
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },{
      path: '/apitest',
      name: 'apitest',
      // lazy-loaded
      component: ApiTest
    },
    {
      path: '/apitestget',
      name: 'apitestget',
      // lazy-loaded
      component: ApiTestGet
    },
    {
      path: '/swagger',
      name: 'swagger',
      // lazy-loaded
      component: Swagger
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
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path:'/resetpassword',
      name: 'resetpassword',
      component:()=> import('./views/ResetPassword.vue')
    },
    {
      path:'/displayapi',
      name: 'displayapi',
      component:()=> import('./views/displayapi.vue')
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
      path:'/viewapi',
      name: 'viewapi',
      component:()=> import('./views/viewapi.vue')
    },
    {
      path:'/otp',
      name: 'otp',
      component:()=> import('./views/Otp.vue')
    },
    {
      path:'/changepwd',
      name: 'changepwd',
      component:()=> import('./views/ChangePwd.vue')
    },
    {
      path:'/NewsFeed',
      name:'NewsFeed',
      component:()=> import('./views/NewsFeed.vue')
    },
    {
      path:'/Upload',
      name:'Upload',
      component:()=> import('./views/Upload.vue')
    },
    {
      path:'/whatsnew',
      name:'whatsnew',
      component:()=> import('./views/whatnew.vue')
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
