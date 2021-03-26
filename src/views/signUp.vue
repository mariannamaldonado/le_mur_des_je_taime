<template>
  <div class="login">
    <h2 class="title">¡Crea tu cuenta!</h2>
    <input class="form-input" v-model="firstname" required placeholder="Nombre"/>
    <input class="form-input" v-model="lastname" required placeholder="Apellidos"/>
    <input class="form-input" v-model="username" required placeholder="Seudonimo"/>
    <input class="form-input" v-model="email" required placeholder="Email"/>
    <input class="form-input" v-model="password" required placeholder="Password"/>
    <div class="form-submit">
      <button @click="enviar" class="btnLogin">Registrate</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "SignUp",
  components: {},

  setup() {
    let firstname = ref("");
    let lastname = ref("");
    let username = ref("");
    let email = ref("");
    let password = ref("");
    let usuarios = reactive([]);

    onMounted(() => {
       listar()
    });

    function listar() {
      fetch("http://localhost:8081/api/users/listar")
        .then((resp) => resp.json())
        .then((datos) => {
          usuarios.splice(0);
          datos.forEach((usuario) => {
            usuarios.push(usuario);
          });
        });
    }

    function enviar() {
      fetch("http://localhost:8081/api/users/guardar", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname.value,
          lastname: lastname.value,
          username: username.value,
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar())
        .catch((error) => console.log(error));
      //alert("Usuario ya esta registrado");
    }

    return {
      firstname,
      lastname,
      email,
      username,
      password,
      enviar,
      usuarios,
    };
  },
};
</script>

<style >
.login {
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
  margin-top: 3rem;
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

</style>