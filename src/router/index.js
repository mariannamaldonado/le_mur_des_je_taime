import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Contact from '../views/Contact.vue'
import Wall from '../views/Wall.vue'
import NotFound from '../views/NotFound.vue'


import NewMessage from '@/pages/NewMessage.vue'
import UserAdmin from '@/pages/UserAdmin.vue'
import Profile from "@/pages/Profile.vue";
import Profile2 from "@/pages/Profile2.vue";
import ListMessage from '@/pages/ListMessage.vue'

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/users',
    name: 'Users',
    component: function () {
      return import('../views/UsersView.vue')
    }
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Profile2',
    name: 'Profile2',
    component: Profile2
  },
  {
    path: '/ListMessage',
    name: 'ListMessage',
    component: ListMessage
  },
  {
    path: '/NewMessage',
    name: 'NewMessage',
    component: NewMessage
  },
  {
    path: '/UserAdmin',
    name: 'UserAdmin',
    component: UserAdmin
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/Wall',
    name: 'Wall',
    component: Wall
  }
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
