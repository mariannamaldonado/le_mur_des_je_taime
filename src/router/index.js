import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import UsersView from '../views/UsersView.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ListMessage from '../views/ListMessage.vue'
import NewMessage from '../views/NewMessage.vue'
import NotFound from '../views/NotFound.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import UserAdmin from '../views/UserAdmin.vue'
import UserProfile from '../views/UserProfile.vue'
import Muro from '../views/Muro.vue'
import Contact from '../views/Contact.vue'

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
    path: '/UsersView',
    name: 'UsersView',
    component: UsersView
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
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
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/UsersView',
    name: 'UsersView',
    component: UsersView
    
  },
  {
    path: '/UserAdmin',
    name: 'UserAdmin',
    component: UserAdmin
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/Muro',
    name: 'Muro',
    component: Muro
    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
