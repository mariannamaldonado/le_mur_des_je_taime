<template>
  <div class="justify-content-center" id="frame">
    <div id="box" class="col col-12 col-lg-4 offset-lg-4 p-5 bg-white rounded">
      <h4 class="text-center">Recupera tú contraseña</h4>
      <br />
      <div class="form-floating mb-3">
        <input
          v-model="email"
          type="text"
          class="form-control floatingInput"
          placeholder="name@ejemplo.com"
        />
        <label for="floatingInput"
          ><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label
        >
      </div>
      <div class="form-group d-flex justify-content-center">
        <button
          @click="forgotPassword(email)"
          type="button"
          id="loginbutton"
          class="btn"
        >
          ENVIAR EMAIL
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "ForgotPassword",
  components: {},
  data() {
    return {
      email: "",
    };
  },
  setup() {
    const router = useRouter();

    async function forgotPassword(email) {
      let {
        data,
      } = await axios.post(`http://localhost:8081/api/users/forgotpassword`, {
        email: email,
      });
      if (data.error)
        Swal.fire({
          text: data.error,
          icon: "error",
          confirmButtonText: "OK",
        });
      else {
        Swal.fire({
          // title: "Enviado!",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          router.push("/SignIn");
        });
      }
    }
    return {
      forgotPassword,
    };
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
  background-color: transparent;
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
  box-shadow: 0 0 0 0.25rem rgba(100, 101, 116, 0.5);
}
#loginbutton:hover {
  white-space: nowrap;
  color: white;
  background-position: right center;
}
</style>