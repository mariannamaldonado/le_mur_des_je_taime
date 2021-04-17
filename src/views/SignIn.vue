<template>
  <div class="container-fluid justify-content-center" id="frame">
      <div class="col col-12 col-lg-6 offset-lg-3 p-5 bg-white rounded shadow-sm" >
        <h2>INICIO DE SESIÓN</h2>

        <div class="form-floating mb-3" v-if="!user.email">
          <input
            v-model="email" required
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />
          <label for="floatingInput"><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label>
        </div>

        <div class="form-floating">
          <input
            v-model="password" required
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
          <button @click="login" type="login" id="loginbutton" class="btn btn-danger btn-lg">
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
  </div>
<div class="block-wrap">

	<!-- google	 -->
	<div>
		<a class="btn-google" href="/auth/google">
			<div class="google-content">
				<div class="logo">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
					<defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
				</svg>
				</div>
				<p>Sign in with Google</p>
			</div>
		</a>
	</div>

	<!-- facebook	 -->
	<div>
		<a class="btn-fb" href="/auth/facebook">
			<div class="fb-content">
				<div class="logo">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" version="1">
        <path fill="#FFFFFF" d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"/>
        <path fill="#4267b2" d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"/>
      </svg>
				</div>
				<p>Sign in with Facebook</p>
			</div>
		</a>
	</div>

</div>


        <hr />
        <div>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-center">
              ¿No tienes una cuenta?&nbsp;<a href=" SignUp" class="blue-text ml-1">
                Registrate</a>
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
          if (user){
            store.commit("setUser", user)
           alert("Login succes")
          }
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
 .container-fluid {
  background-image: url("../../public/muroblur.png");
  background-size: cover;
} 
.container-fluid{
  min-width: 400px;
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
  border-bottom: 2px solid #212529;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

.form-floating {
  border-radius: none !important;
}
.form-control:focus {
  border-bottom: 2px solid #212529;
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

//style google y facebook

@import url("//fonts.googleapis.com/css?family=Roboto");
*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

.block-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}
.block-wrap > div {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.btn-google, .btn-fb {
  display: inline-block;
  border-radius: 1px;
  text-decoration: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
}
.btn-google .google-content, .btn-google .fb-content, .btn-fb .google-content, .btn-fb .fb-content {
  display: flex;
  align-items: center;
  width: 250px;
  height: 50px;
}
.btn-google .google-content .logo, .btn-google .fb-content .logo, .btn-fb .google-content .logo, .btn-fb .fb-content .logo {
  padding: 10px 20px;
  padding-right: 0;
  height: inherit;
}
.btn-google .google-content svg, .btn-google .fb-content svg, .btn-fb .google-content svg, .btn-fb .fb-content svg {
  width: 18px;
  height: 18px;
}
.btn-google .google-content p, .btn-google .fb-content p, .btn-fb .google-content p, .btn-fb .fb-content p {
  width: 100%;
  line-height: 1;
  text-align: center;
  font-weight: 500;
  padding: 10px ;
  padding-left: 0;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
}

.btn-google {
  background: #FFF;
}
.btn-google:hover {
  box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
}
.btn-google:active {
  background-color: #eee;
}
.btn-google .google-content p {
  color: #757575;
}

.btn-fb {
  padding-top: 1.5px;
  background: #4267b2;
  background-color: #3b5998;
}
.btn-fb:hover {
  box-shadow: 0 0 3px 3px rgba(59, 89, 152, 0.3);
}
.btn-fb .fb-content p {
  color: rgba(255, 255, 255, 0.87);
}

#frame{
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>