import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{}
  },
  getters: {
    getUser(state){
      return state.user
    }
  },
  mutations: {
    setUser(state,valor){
      state.user=valor
    },  
  },
  actions: {
    fetchUsers(mutations){
      fetch('http://localhost:8081/api/listar')
        .then(resp=>resp.json())
        .then(datos=>{
          mutations.commit('setUser',datos[0])
        })
    }
  },
  modules: {
    
  }
})
