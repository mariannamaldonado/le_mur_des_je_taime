import { isElementAccessExpression } from 'typescript';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import store from '../store'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/ReceivedMessages',
    name: 'ReceivedMessages',
    component: () => import('@/pages/ReceivedMessages.vue'),
    meta: { requiresAuth: true }
  }, 
  {
    path: '/SentMessagesList',
    name: 'SentMessagesList',
    component: () => import('@/pages/SentMessagesList.vue'),
    meta :{ requiresAuth: true}
  },
  {
    path: '/NewMessage',
    name: 'NewMessage',
    component: () => import('@/pages/NewMessage.vue'),
     meta: { requiresAuth: true }
  },
  {
    path: '/UsersList',
    name: 'UsersList',
    component: () => import('@/pages/admin/UsersList.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/MessagesList',
    name: 'MessagesList',
    component: () => import('@/pages/admin/MessagesList.vue'),
    meta: { requiresAuth: true }
  },
  // {
  //   // catch all 404 - define at the very end
  //   path: '*',
  //   component: () => import('./views/NotFound.vue')
  //   },
  {
    path: '/LeMur',
    name: 'LeMur',
    component: () => import('../views/LeMur.vue'),
  },
  {
    path: '/Resetpassword',
    name: 'ResetPassword',
    component: () => import('../views/ResetPassword.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log("routing to secure route")
    if (store.state.token == null){
      console.log("token is null")
      next({ name: 'SignIn' })
    }
    else{
      console.log("token is not null")
      next()
    }
  }
  else{
    next()
  }
})

export default router


