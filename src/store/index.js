import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {

    }
  },
  actions: {
    async login({ commit }, user) {
      console.log(user)
      try {
        const res = await fetch('http://localhost:8081/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        const userDB = await res.json()
          console.log(userDB)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
