<template>
  <div class="loginbox">
    <div class="formulario" v-if="!user.email">
      <input v-model="email" placeholder="email" />
      <input v-model="password" placeholder="password" />
      <div>
        <button @click="login" class="btn btn-info">Login</button>
      </div>
    </div>
    <div v-else>
      Bienvenid@ {{ user.nombre }} {{user.apellidos}} 
        <button class="btn btn-warning" @click="logout">Salir</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "LoginBox",
  props: {},
  setup() {
    const store = useStore();
    let email = ref("");
    let password = ref("");
    let user = computed(() => {
      return store.getters.getUser;
    });

    function login() {
      fetch("http://localhost:8081/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "Application/json" },
      })
        .then((resp) => resp.json())
        .then((user) => {
          if (user) store.commit("setUser", user)
          else alert("Usuario o password incorrectos")
        })
    }

    function logout() {
        store.commit("setUser", {})
    }

    return {
      email,
      password,
      login, logout,
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
.loginbox {
  max-width: 300px;
  padding: 10px;
  .formulario {
    display: inline-flex;
    input,
    button {
      width: 80%;
      margin: 5px;
    }
  }
}
</style>