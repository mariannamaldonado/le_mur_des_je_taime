<template>
  <div class="container-fluid justify-content-center">
      <div class="col col-6 offset-3 p-5 bg-white rounded shadow-sm">
        <h2>INICIO DE SESIÓN</h2>

        <div class="form-floating mb-3" v-if="!user.email">
          <input
            v-model="email"
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />
          <label for="floatingInput"><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label>
        </div>

        <div class="form-floating">
          <input
            v-model="password"
            type="text"
            class="form-control floatingInput"
            placeholder="Contraseña"
          />
          <label for="floatingInput"><i class="fas fa-unlock-alt"></i>&nbsp;Contraseña</label>
        </div>

        <!-- <div class="form-floating">
          <select
            type="text"
            class="form-control floatingInput"
            placeholder="Rol"
          >
            <option value="" selected hidden>Rol</option>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          <label for="rol"></label>
        </div> -->
        <br />
        <div class="form-floating">
          <div class="d-flex justify-content-center">
            <a href="ForgotPassword"><h6>¿Has olvidado tu contraseña?</h6></a>
          </div>
        </div>

        <div class="form-group d-flex justify-content-center">
          <button @click="login" type="button" id="loginbutton" class="btn btn-danger btn-lg">
            INICIAR SESIÓN
          </button>
        </div>
        <br />
        <div>
          <p
            class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
          >
            o Iniciar sesión con:
          </p>
          <p class="social d-flex justify-content-center">
            <img src="../../public/google.png" alt="Google" />
            <img src="../../public/facebook.png" alt="Facebook" />
            <img src="../../public/instagram.png" alt="Instagram" />
          </p>
          <div class="row my-3 d-flex justify-content-center">
            <mdb-btn
              type="button"
              color="white"
              rounded
              class="mr-md-3 z-depth-1a"
              ><mdb-icon fab icon="facebook" class="blue-text text-center"
            /></mdb-btn>
            <mdb-btn
              type="button"
              color="white"
              rounded
              class="mr-md-3 z-depth-1a"
              ><mdb-icon fab icon="twitter" class="blue-text"
            /></mdb-btn>
            <mdb-btn type="button" color="white" rounded class="z-depth-1a"
              ><mdb-icon fab icon="google-plus" class="blue-text"
            /></mdb-btn>
          </div>
        </div>
        <hr />
        <div>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-center">
              ¿Not a member?&nbsp;<a href=" SignUp" class="blue-text ml-1">
                Sign Up</a
              >
            </p>
          </mdb-modal-footer>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "SingIn",
 components: {},

  setup() {
    const store = useStore();
    let email = ref("");
    let password = ref("");
    let user = computed(() => {
      return store.getters.getUser;
    });

    function login() {
      fetch("http://localhost:8081/api/user/login", {
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
<style lang="scss" scoped>
/* .container-fluid {
  background-image: url("../../public/muroblur.png");
  background-size: cover;
} */

.social img {
  width: 40px;
  height: 30px;
  padding: 0 5px;
}
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
</style>