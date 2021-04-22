import { textChangeRangeIsUnchanged } from 'typescript'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{},
    total:0
  },
  getters: {
    getUser(state){
      return state.user
    },
    getTotal(state){
      return state.total
    }
  },
  mutations: {
    setUser(state,valor){
      state.user=valor
    },
    setTotal(state,valor){
      state.total=valor
    }    
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