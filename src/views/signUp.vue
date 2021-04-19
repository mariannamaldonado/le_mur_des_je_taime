<template>
  <div class="container justify-content-center" id="frame">
    <div class="col col-12 col-lg-4 offset-lg-4 p-5 bg-white rounded shadow-sm">
      <h2>Registrate</h2>
      <div class="alert alert-danger d-none" role="alert" id="errors">
          <ul class="errors-ul">

          </ul>
      </div>
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
          class="btn btn-danger btn-lg"
        >
          GUARDAR
        </button>
      </div>
      <div>
        <hr />
        <mdb-modal-footer class="mx-5 pt-3 mb-1">
          <p class="font-small grey-text d-flex justify-content-center">
            ¿Tienes una cuenta?&nbsp;<a href="SignIn" class="blue-text ml-1">
              Inicia Sessión</a
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
export default {
  name: "SignUp",
  components: {},
  setup() {
    let firstname = ref("");
    let lastname = ref("");
    let email = ref("");
    let password = ref("");
    let users = reactive([]);
    onMounted(() => {
      console.log("¨la pagina esta descargada")
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
      .then(data => {
        console.log(data)
        if(data.errors){
          // si el servidor devuelve errors, crear un ul para imprimir errores
          var ul = document.querySelector('.errors-ul')
          ul.innerHTML = ""
          //para cada errores en la respuesta, anadir un li dentro del ul
          for (const [key, errorobj] of Object.entries(data.errors)) {
            // console.log(key, errorobj);
            var li = document.createElement('li')
            li.innerHTML = errorobj.message

            ul.appendChild(li)
          }
          //activar d-none = ensenar errors
          $("#errors").removeClass("d-none")

        }
        else {
           $("#errors").addClass("d-none")
          console.log("success")
        }
      })
      /* alert("Usuario ya esta registrado"); */
    }
    return {
      firstname,
      lastname,
      email,
      password,
      enviar
    };
  },
};
</script>

<style lang="scss" scoped>
//background
/* .container-fluid {
  background-image: url("../../public/muroblur.png");
  background-size: cover;
} */

.errors-ul {
  padding: 0;
  list-style-type: none;
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
#frame {
  padding-top: 50px;
  padding-bottom: 50px;
}

#loginbutton {
  color: #9c0505;
  background: transparent;
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
}

#loginbutton:hover {
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
  border: none;
  background-image: linear-gradient(to right, #a19dcf, #03002d);
}


</style>