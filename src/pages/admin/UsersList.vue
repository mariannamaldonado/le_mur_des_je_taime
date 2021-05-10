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
            @click="deleteMessage(usuario._id, ind)"
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
import Swal from "sweetalert2";

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
          console.log(usuarios)
        });
    }
    function deleteMessage(id) {
      console.log(id)
      fetch("http://localhost:8081/api/users/delete/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => {
          Swal.fire({
              text: "Usuario eliminado con exito!",
              icon: "success",
              confirmButtonText: "OK",
            }).then((_) => {
              listar()
            });
          
          });
    }

    return {
      usuarios,
      deleteMessage,
    };
  },
};
</script>

<style  lang="scss" scoped>
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
  background:  url('../../assets/img/baner.jpg');
  background-size: cover;
  background-position: center;
  // background-color: rgb(226, 61, 61);
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



.profile-card {
  width: 56px;
  height: 56px;
  z-index: 2;
  overflow: hidden;
  opacity: 0;
  margin-top: 70px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
    0px 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
}
.profile-card header {
  
  width: 179px;
  height: 280px;
  padding: 40px 20px 30px 20px;
  display: inline-block;
  border-right: 4mm ridge rgba(220, 50, 50, 0.6);
  background-image: url('../../assets/img/baner.jpg');
  color: #ffffff;
  margin-top: 50px;
  opacity: 0;
  text-align: center;
}
.profile-card header h1 {
  color: rgb(255, 255, 255);
}
.profile-card header a {
  display: inline-block;
  text-align: center;
  position: relative;
  margin: 25px 30px;
}
.profile-card header a:after {
  position: absolute;
  content: "";
  bottom: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  -webkit-transform: scale(0);
  transform: scale(0);
  content: "❤";
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.profile-card header a > img {
  width: 120px;
  max-width: 100%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: -webkit-box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
  -webkit-box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 0 0.25rem rgba(100, 101, 116, 0.5);
}
.profile-card header a:hover > img {
  -webkit-box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
}
.profile-card .profile-bio {
  width: 175px;
  height: 180px;
  display: inline-block;
  padding: 50px 20px 30px 20px;
  background: #ffffff;
  color: #333333;
  margin-top: 50px;
  text-align: center;
  opacity: 0;
}
</style>

