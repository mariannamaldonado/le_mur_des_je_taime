<template>
  <div class="justify-content-center" id="frame">
    <div id="box" class="col col-12 col-lg-4 offset-lg-4 p-5 bg-white rounded">
      <h2 class="text-center">Registrate</h2>
      <br />
      <div class="alert alert-danger d-none" role="alert" id="errors">
        <ul class="errors-ul"></ul>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="form-floating mb-3">
            <input
              v-model="firstname"
              type="text"
              class="form-control floatingInput"
              placeholder="Nombre"
            />
            <label for="floatingInput"
              ><i class="fas fa-grin"></i>&nbsp;Nombre</label
            >
          </div>
        </div>
        <div class="col-6">
          <div class="form-floating mb-3">
            <input
              v-model="lastname"
              type="text"
              class="form-control floatingInput"
              placeholder="Apellido"
            />
            <label for="floatingInput"
              ><i class="fas fa-grin"></i>&nbsp;Apellido</label
            >
          </div>
        </div>
      </div>
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
      <div class="form-floating mb-3">
        <input
          v-model="password"
          type="password"
          class="form-control floatingInput"
          placeholder="Contraseña"
        />
        <label for="floatingInput"
          ><i class="fas fa-unlock-alt"></i>&nbsp;Contraseña</label
        >
      </div>
      <div class="form-group d-flex justify-content-center">
        <button
          @click="enviar"
          type="button"
          id="loginbutton"
          class="btn btn-md"
        >
          Registrate
        </button>
      </div>
      <div class="form-group d-flex justify-content-center text-center">
        Al pulsar en "Registrate", muestras tu consentimiento a nuestros
        terminos de servicio, politica de prvacidad y politica de cookies.
      </div>
      <div>
        <hr />
        <mdb-modal-footer class="mx-5 pt-3 mb-1">
          <p class="font-small grey-text d-flex justify-content-center">
            ¿Ya tienes una cuenta?&nbsp;<router-link
              to="SignIn"
              class="blue-text ml-1"
            >
              Inicia Sessión</router-link
            >
          </p>
        </mdb-modal-footer>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "SignUp",
  components: {},
  setup() {
    const router = useRouter();

    let firstname = ref("");
    let lastname = ref("");
    let email = ref("");
    let password = ref("");
    let users = reactive([]);
    onMounted(() => {
      console.log("¨la pagina esta descargada");
    });

    function enviar() {
      fetch("http://localhost:8081/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          if (data.errors) {
            // si el servidor devuelve errors, crear un ul para imprimir errores
            var ul = document.querySelector(".errors-ul");
            ul.innerHTML = "";
            //para cada errores en la respuesta, anadir un li dentro del ul
            for (const [key, errorobj] of Object.entries(data.errors)) {
              // console.log(key, errorobj);
              var li = document.createElement("li");
              li.innerHTML = errorobj.message;
              ul.appendChild(li);
            }
            //activar d-none = ensenar errors
            $("#errors").removeClass("d-none");
          } else {
            $("#errors").addClass("d-none");
            Swal.fire({
              title: "Bienvenido!",
              text: "Has registrado correctamente.",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => {
              router.push("/SignIn");
            });
          }
        });
    }
    return {
      firstname,
      lastname,
      email,
      password,
      enviar,
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
