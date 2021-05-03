<template>
  <div class="justify-content-center" id="frame">
    <div id="box" class="col col-12 col-lg-4 offset-lg-4 p-5 bg-white rounded">
      <h2 class="text-center">INICIO DE SESIÓN</h2>
      <br />
      <!--   <div>
          <p
            class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
          >
            o Iniciar sesión con:
          </p>
        </div>  -->
      <div class="block-wrap">
        <!-- google	 -->
        <div class="google">
          <a
            class="btn-google"
            href="http://localhost:8081/api/users/auth/google"
          >
            <div class="google-content">
              <div class="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlink:href="#a" overflow="visible" />
                  </clipPath>
                  <path
                    clip-path="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
              </div>
              <p>Sesión con Google</p>
            </div>
          </a>
        </div>
        <!-- facebook	 -->
        <div class="facebook">
          <a
            class="btn-fb"
            href="http://localhost:8081/api/users/auth/facebook/callback"
          >
            <div class="fb-content">
              <div class="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  version="1"
                >
                  <path
                    fill="#FFFFFF"
                    d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"
                  />
                  <path
                    fill="#4267b2"
                    d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"
                  />
                </svg>
              </div>
              <p>Sesión con Facebook</p>
            </div>
          </a>
        </div>
      </div>
      <br />
      <form @submit.prevent="login(user)">
        <div class="form-floating mb-3">
          <input
            v-model="user.email"
            required
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />
          <label for="floatingInput"
            ><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label
          >
        </div>
        <div class="form-floating">
          <input
            v-model="user.password"
            required
            type="password"
            class="form-control floatingInput"
            placeholder="Contraseña"
          />
          <label for="floatingInput"
            ><i class="fas fa-unlock-alt"></i>&nbsp;Contraseña</label
          >
        </div>
        <br />
        <div class="form-floating">
          <div class="d-flex justify-content-center">
            <router-link to="ForgotPassword"
              ><h6>¿Has olvidado tu contraseña?</h6></router-link
            >
          </div>
        </div>
        <div class="form-group d-flex justify-content-center">
          <button type="submit" id="loginbutton" class="btn btn-danger btn-md">
            INICIAR SESIÓN
          </button>
          <br /><br />
        </div>
        <br />
        <hr />
        <div>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-center">
              ¿No tienes una cuenta?&nbsp;
              <router-link to="SignUp" class="blue-text ml-1">
                Registrate
              </router-link>
            </p>
          </mdb-modal-footer>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style lang="scss" scoped>
#frame {
  padding-top: 60px;
  min-height: 100vh;
  background: url("../../public/double-bubble-outline.png");
}
#box {
  background: white;
  box-shadow: 0 0 15px #00000033;
}
.errors-ul {
  padding: 0;
  list-style-type: none;
}
.container-fluid {
  min-width: 400px;
}
.bg-white {
  background-image: url("../../public/double-bubble-outline.png");
  // linear-gradient(rgba(148,15,1, 0.8),rgba(255,0,0,0.8))
  background-blend-mode: multiply;
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
  background-color: transparent; //nuevo
  filter: none;
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
#loginbutton {
  color: #000011;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 30px;
  padding: 10px 40px;
  background-size: 200% auto;
  background-image: linear-gradient(
    to right,
    #cac7e2 0%,
    #03002d 70%,
    #575485 100%
  );
  transition: 0.5s;
}
#loginbutton:hover {
  white-space: nowrap;
  color: white;
  background-position: right center;
}
//style google y facebook
@import url("//fonts.googleapis.com/css?family=Roboto");
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
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
.btn-google,
.btn-fb {
  display: inline-block;
  border-radius: 1px;
  text-decoration: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  border-radius: 5px !important;
}
.btn-google .google-content,
.btn-google .fb-content,
.btn-fb .google-content,
.btn-fb .fb-content {
  display: flex;
  align-items: center;
  width: 250px;
  height: 50px;
}
.btn-google .google-content .logo,
.btn-google .fb-content .logo,
.btn-fb .google-content .logo,
.btn-fb .fb-content .logo {
  padding: 10px 20px;
  padding-right: 0;
  height: inherit;
}
.btn-google .google-content svg,
.btn-google .fb-content svg,
.btn-fb .google-content svg,
.btn-fb .fb-content svg {
  width: 18px;
  height: 18px;
}
.btn-google .google-content p,
.btn-google .fb-content p,
.btn-fb .google-content p,
.btn-fb .fb-content p {
  width: 100%;
  line-height: 1;
  text-align: center;
  font-weight: 500;
  padding: 10px;
  padding-left: 0;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
}
.btn-google {
  background: #fff;
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
</style>