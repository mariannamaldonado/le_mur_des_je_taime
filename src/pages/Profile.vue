<template>
  <Menu />

  <!-- INICIO DE LA TARJETA DE PERFIL -->
  <div class="row" v-for="(usuario, ind) in usuarios" :key="ind">
    <div class="col-xl-4 col-lg-5 col-md-6">
      <div class="container">
        <div class="cover-photo">
          <img class="profile" src="@/assets/img/faces/avatar1.jpg" alt="..." />
        </div>
        <div class="profile-name">
          {{ usuario.firstname }} {{ usuario.lastname }}
        </div>
        <p class="about">{{ usuario.email }}</p>
        <button class="msg-btn">Enviar mensaje</button>
      </div>
    </div>
    <!-- FIN DE LA TARJETA DE PERFIL -->
    <div class="col-xl-8 col-lg-7 col-md-6">
      <section id="main-content">
        <section class="wrapper">
          <h3><i class="fa fa-angle-right"></i> Editar perfil</h3>
          <!-- formulario del perfil -->
          <div class="row mt">
            <div class="col-lg-12">
              <div class="form-panel">
                <h6 class="mb">
                  <i class="fa fa-angle-right"></i> Datos del perfil
                </h6>
                <form class="form-horizontal style-form" method="get">
                  <div class="row"></div>

                  <div class="form-floating mb-3">
                    <input
                      v-model="username"
                      type="text"
                      class="form-control floatingInput"
                      placeholder="Nombre"
                    />
                    <label for="floatingInput">
                      <i class="bi bi-file-earmark-person"></i>&nbsp;Nombre de
                      usuario
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      v-model="firstname"
                      type="text"
                      class="form-control floatingInput"
                      placeholder="Nombre"
                    />
                    <label for="floatingInput">
                      <i class="bi bi-emoji-heart-eyes"></i>&nbsp;Nombre
                    </label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      v-model="firstname"
                      type="text"
                      class="form-control floatingInput"
                      placeholder="Nombre"
                    />
                    <label for="floatingInput">
                      <i class="bi bi-person"></i>&nbsp;Apellido
                    </label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      v-model="firstname"
                      type="text"
                      class="form-control floatingInput"
                      placeholder="Nombre"
                    />
                    <label for="floatingInput">
                      <i class="bi bi-envelope-open"></i>&nbsp;Email
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      v-model="firstname"
                      type="text"
                      class="form-control floatingInput"
                      placeholder="Nombre"
                    />
                    <label for="floatingInput">
                      <i class="bi bi-person-bounding-box"></i>&nbsp;Cambiar
                      imagen de perfil
                    </label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn">Actualizar Perfil</button>
                  </div>
                  <div class="clearfix"></div>
                </form>
              </div>
            </div>
            <!-- col-lg-12-->
          </div>
          <!-- /row -->
        </section>
      </section>
    </div>
  </div>
 
  <hr class="border" />
  <ContentFooter />
</template>

<script>
import Menu from "@/components/Menu.vue";
import ContentFooter from '@/components/ContentFooter';
import { ref, reactive, onMounted } from "vue";
export default {
  name: "ListAdmin",
  components: {
    Menu,
    ContentFooter

  },
  setup() {
    let firstname = ref("");
    let lastname = ref("");
    let username = ref("");
    let email = ref("");
    let password = ref("");
    let message = ref("");
    let usuarios = reactive([]);
    onMounted(() => {
      listar();
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
          message: message.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar())
        .catch((error) => console.log(error));
      //alert("Usuario ya esta registrado");
    }

    function eliminar(id) {
      fetch("http://localhost:8081/api/users/delete/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar());
    }

    return {
      firstname,
      lastname,
      email,
      username,
      password,
      enviar,
      usuarios,
      message,
      eliminar,
    };
  },
};
</script>

<style scoped>
/* navbar */

.topnav {
  overflow: hidden;
  background-color: #f1f2f5;
}

.topnav a {
  float: left;
  color: #0a0a0a;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #3f4f66;
  color: black;
}

.topnav-right {
  float: right;
}

body {
  font-family: "lato", sans-serif;
  background-color: #f1f2f5;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}
/* lista */
.container {
  user-select: none;
  margin: 100px auto;
  background: #f4f3ef;
  color: #b3b8cd;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.75);
}
.cover-photo {
  background: url(https://coursefinders.com/blog/wp-content/uploads/2018/09/ti-amo-mur-je-taime-560x315.jpg);
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.profile {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #f4f3ef;
  padding: 7px;
  background: #f4f3ef;
}
.profile-name {
  font-size: 25px;
  font-weight: bold;
  margin: 27px 0 0 120px;
}
.about {
  margin-top: 35px;
  line-height: 21px;
}
button {
  margin: 10px 0 40px 0;
}
.msg-btn,
.follow-btn {
  background: #1f4b8d;
  border: 1px solid #1f4b8d;
  padding: 10px 25px;
  color: #fff;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  border-radius: 25px;
}
.follow-btn {
  margin-left: 10px;
  background: transparent;
  color: #02899c;
}
.follow-btn:hover {
  color: #231e39;
  background: #03bfbc;
  transition: 0.5s;
}
.container i {
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.5s;
}
.container i:hover {
  color: #03bfbc;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  color: #797979;
  background: #f2f2f2;
  font-family: "Ruda", sans-serif;
  padding: 0px !important;
  margin: 0px !important;
  font-size: 13px;
  background-color: #fff;
}

.form-panel {
  background: #ffffff;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 3px 2px #aab2bd;
  text-align: left;
}

.wrapper {
  display: inline-block;
  margin-top: 60px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-top: 0px;
  width: 100%;
}

.btn {
  display: inline-block;
  background: #1f4b8d;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;
}

/* new style */

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
</style>
