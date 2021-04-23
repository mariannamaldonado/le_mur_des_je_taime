import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: ()=> import( '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: ()=> import( '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ()=> import( '../views/Contact.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: ()=> import( '../views/UsersView.vue'),    
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: ()=> import( '../views/SignIn.vue'),
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: ()=> import( '../views/SignUp.vue'),
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ()=> import( '../views/ForgotPassword.vue'),
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: ()=> import( '@/pages/Profile.vue'),
    meta :{ requiresAuth: true}
  },
  {
    path: '/Profile2',
    name: 'Profile2',
    component: ()=> import( '@/pages/Profile2.vue'),
  },
  {
    path: '/ListMessage',
    name: 'ListMessage',
    component: ()=> import( '@/pages/ListMessage.vue'),
      meta :{ requiresAuth: true}
  },
  {
    path: '/NewMessage',
    name: 'NewMessage',
    component: ()=> import( '@/pages/NewMessage.vue'),
  },
  {
    path: '/UserAdmin',
    name: 'UserAdmin',
    component: ()=> import( '@/pages/UserAdmin.vue'),

  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: ()=> import( '../views/NotFound.vue'),
  },
  {
    path: '/Wall',
    name: 'Wall',
    component: ()=> import( '../views/Wall.vue'),
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && store.state.token === null) next({name: 'Home'})
        // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio   
    else
        // En caso contrario sigue...
        next()
})


export default router


