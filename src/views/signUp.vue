<template>
<<<<<<< HEAD
  <div class="container-fluid justify-content-center">
      <div class="col col-6 offset-3 p-5 bg-white rounded my-5 shadow-sm">
        <h2>Registrate</h2>
         <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Usuario"
          />
          <label for="floatingInput"><i class="fas fa-user"></i>&nbsp;Usuario</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Nombre"
          />
          <label for="floatingInput"><i class="far fa-user"></i>&nbsp;Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Apellido"
          />
          <label for="floatingInput"><i class="far fa-user"></i>&nbsp;Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />
          <label for="floatingInput"><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label>
        </div>
       
        <div class="form-floating">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Contraseña"
          />
          <label for="floatingInput"><i class="fas fa-unlock-alt"></i>&nbsp;Contraseña</label>
        </div>
        <div class="form-floating">
          <select
            type="text"
            class="form-control floatingInput"
            placeholder="Rol"
          >
            <option value="" selected hidden><i class="fas fa-users-cog"></i>&nbsp;Rol</option>
            <option value="user"><i class="fas fa-users-cog"></i>&nbsp;Usuario</option>
            <option value="admin"><i class="fas fa-users-cog"></i>&nbsp;Administrador</option>
          </select>
          <label for="rol"></label>
        </div>
        <div class="form-group d-flex justify-content-center">
          <button type="button" id="loginbutton" class="btn btn-danger btn-lg">
            SIGN UP
          </button>
        </div>
        <div>
          <hr />
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-center">
              ¿Already member?&nbsp;<a href="SignIn" class="blue-text ml-1">
                Sign In</a
              >
            </p>
          </mdb-modal-footer>
        </div>
      </div>
    </div>
=======
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
>>>>>>> origin/backend-crud
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "SignUp",
  components: {},

  setup() {
<<<<<<< HEAD
    return {};
=======
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
>>>>>>> origin/backend-crud
  },
};
</script>

<<<<<<< HEAD
<style lang="scss" scoped>
/* .container-fluid {
  background-image: url("../../public/muroblur.png");
  background-size: cover;
} */

a {
  text-decoration: none;
}

.floatingInput,
.floatingPassword {
  border: 0;
  border-bottom: 2px solid #e4e6e9;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
  border-radius: 0;
}

.floatingInput:active,
.floatingInput:focus {
  border: 0;
  border-bottom: 2px solid #070A2B;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

.form-floating {
  border-radius: none !important;
}
.form-control:focus {
  border-bottom: 2px solid #070A2B;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

#loginbutton {
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
  border: none;
  background-image: linear-gradient(to right, #a19dcf, #03002d);
}

.btn-danger {
  color: #fff;
  background-color: #121ca8;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgba(165, 165, 211, 0.5);
}
.btn-danger:active {
  color: #fff;
  background-color: #4b51ad;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgba(100, 101, 116, 0.5);
}
=======
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

>>>>>>> origin/backend-crud
</style>