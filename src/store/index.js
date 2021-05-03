import { createStore } from 'vuex'
// para que los datos en store se mantengan despues de refresh de pagina
// import createPersistedState from "vuex-persistedstate";
// const dataState = createPersistedState({
//   paths: ['token',  'user'],  // only variable which we want to persist even after page refresh
//   storage: window.localStorage 

// })

import router from '@/router'

export default createStore({
  state: {
    token: null,
    user: {
      name : 'default user',
      email : 'default@email.com',
      firstname : 'John',
      lastname : 'Doe',
      avatar : 'assets/img/faces/avatar1.jpg'
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUser(state, user){
      state.user = user
  }
  },
  actions: {
    async login({ commit }, user) {
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
        commit('setToken', userDB.data.token)
        localStorage.setItem('token', userDB.data.token)
        router.push("/Profile")
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
      localStorage.removeItem('item')
      commit('setToken', null)
    },


    // envia un request al servidor con token. y el servidor devuelve el usuario correspondiente al token
    async getCurrentUser(context){
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
        console.log(response)
        context.commit("setUser", response)
      } catch (error) {
        console.log(error)
      }
    },


  },
  modules: {
  },
  // plugins: [dataState],
})