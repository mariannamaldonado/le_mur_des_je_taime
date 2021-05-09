<template>
  <div v-if="user.role == true">
    <Menu />

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <i class="bi bi-search"></i>
        </div>
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
      />
    </div>

    <div class="row gx-5" v-for="(usuario, ind) in usuarios" :key="ind">
      <div class="col-xl-8 col-lg-7 col-md-6">
        <div class="container">
          <div class="cover-photo">
            <img
              class="profile"
              src="@/assets/img/faces/avatar.jpg"
              alt="..."
            />
          </div>
          <div class="profile-name">
            {{ usuario.firstname }} {{ usuario.lastname }}
          </div>
          <p class="about">Email: {{ usuario.email }}</p>
          <label for="floatingInput">
            <i class="bi bi-person-bounding-box"></i>&nbsp;Cambiar imagen de
            perfil
          </label>
          <div class="form-floating mb-3 custom-file">
            <input type="file" class="custom-file-input" />
          </div>
          <button
            class="btn btn-danger btn-xs"
            @click="deleteMessage(Message._id)"
          >
            <i class="fa fa-trash-o"></i>
          </button>
          <hr class="border" />
        </div>
      </div>
    </div>

    <hr class="border" />
    <ContentFooter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Menu from "@/components/Menu.vue";
import ContentFooter from "@/components/ContentFooter";
import { ref, reactive, onMounted } from "vue";
export default {
  name: "ListAdmin",
  components: {
    Menu,
    ContentFooter,
  },
  computed: {
    ...mapState(["user"]),
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
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: "Font Awesome 5 Free";
  /* font-size: inherit; */
  /* line-height: inherit; */
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
  margin: 10px auto;
  margin-left: 5.5em;
  background: #f4f3ef;
  color: #b3b8cd;
  border-radius: 5px;
  width: 650px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.75);
}
.cover-photo {
  background: url(https://bestanimations.com/media/i-love-you/925483873iloveyou-languages-gif.gif);
  background-color: rgb(226, 61, 61);
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
</style>

