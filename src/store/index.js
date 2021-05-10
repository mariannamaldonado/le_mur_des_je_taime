import { createStore } from 'vuex'
import Swal from "sweetalert2";
// para que los datos en store se mantengan despues de refresh de pagina
import createPersistedState from "vuex-persistedstate";
const dataState = createPersistedState({
  paths: ['token',  'user'],  // only variable which we want to persist even after page refresh
  storage: window.sessionStorage
})


import router from '@/router'
export default createStore({
  state: {
    token: null,
    user: {
      _id:'',
      name: '',
      email: '',
      firstname: '',
      lastname: '',
      avatar: 'assets/img/faces/avatar1.jpg',
      role:''
    }
  },
getters: {
  getUser(state){
    return state.user      
  }
},
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit, dispatch }, user) {
      try {
        console.log(user.email)
        console.log(user.password)
        const res = await fetch('http://localhost:8081/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:user.email, password:user.password})
        })
        const userDB = await res.json()

        if(!userDB.error){
          commit('setToken', userDB.data.token)
          localStorage.setItem('token', userDB.data.token)
          dispatch('getCurrentUser')
          console.log("routing to NewMessage")
          router.push("/Profile")
        }
        else{
          Swal.fire({
            // title: "Enviado!",
            text: "El Usuario o la contrasena son incorrectas",
            icon: "error",
            confirmButtonText: "OK",
          });
        }

      } catch (error) {
        console.log(error)
      }
    },
    getToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token')
      commit('setToken', null)
      commit('setUser', {
        _id: '',
        name: '',
        email: '',
        firstname: '',
        lastname: '',
        avatar: 'assets/img/faces/avatar1.jpg'
      })
    },
    // envia un request al servidor con token. y el servidor devuelve el usuario correspondiente al token
    async getCurrentUser(context) {
      console.log("inside get current user")
      try {
        var res = await fetch('http://localhost:8081/api/users/secure/currentuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        })
        var response = await res.json()
        context.commit("setUser", response)        

      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {
  },
  plugins: [dataState],
})