<template>
  <div class="loginbox">
    <div class="formulario" v-if="!user.email">
      <h2 class="title">¡Bienvenido de nuevo!</h2>
      <div class="form-submit">
        <button @click="facebook" class="btnLogin">Continua con Facebook</button>
      </div>
      <div class="form-submit">
        <button  @click="google" class="google btnLogin">Continua con Google</button>
      </div>
      <input class="form-input" v-model="email" required placeholder="Email" />
      <input class="form-input" v-model="password" required placeholder="Password" />
      <div class="form-submit">
        <button @click="login" class="btnLogin">Login In</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
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
      fetch("http://localhost:8081/api/users/login", {
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
      login, 
      logout,
      user,
    };
  },
};
</script>

<style >
.loginbox {
  padding: 2rem;
  color: black;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.title {
  text-align: center;
  color: black;
  margin-bottom: 50px;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  border-radius: 15px;
  color: black;
  margin: 1em;

}

.form-submit {
  top: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  margin-top: 3em;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.btnLogin {
width: 257px;
height: 49px;
left: 83px;
top: 301px;
color:white;
background: #8E97FD;
border: 1px solid #8E97FD;
box-sizing: border-box;
border-radius: 40px;

}

.google{
width: 257px;
height: 49px;
left: 83px;
top: 301px;
color:black;
background: white;
border: 1px solid white;
box-sizing: border-box;
border-radius: 40px;

}
</style>