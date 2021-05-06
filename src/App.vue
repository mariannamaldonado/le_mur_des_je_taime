<template>
  <div>
    <div class="vertical-nav bg-white" id="sidebar">
      <button
        id="sidebarCollapse"
        type="button"
        class="btn btn-md rounded-pill px-4 mb-4">
        <i class="fa fa-bars mr-2"></i>
      </button>
      <div class="py-4 px-3 mb-4 bg-light background">
        <div class="media d-flex align-items-center"></div>
      </div>
      <div class="media-body" style="text-align: center">
        <p class="font-weight-light text-muted mb-0"></p>
      </div>
      <br />
      <ul id="menu" class="nav flex-column bg-white mb-0">
        <li class="nav-link text-dark font-italic">
            <i class="fas fa-home"></i>
            &nbsp;<router-link class="menu" to="/"> Inicio</router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <i class="fas fa-address-card"></i>
            &nbsp;<router-link class="menu" to="/about"> Nosotros</router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <i class="fas fa-envelope-open-text"></i>
            &nbsp;<router-link class="menu" to="/Contact"> Contacto</router-link
            >
        </li>
        <li class="nav-link text-dark font-italic">
            <span>❤</span>
            &nbsp;<router-link class="menu" href="#item4" id="4" to="/LeMur"> Muro</router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <i class="bi bi-chat-right-dots-fill"></i>
            &nbsp;<router-link class="menu" to="/NewMessage"> Enviar Mensajes</router-link
            >
        </li>
        <hr class="border" />
        <li class="nav-link text-dark font-italic">
            <i class="fas fa-user-plus"></i>
            &nbsp;<router-link class="menu" to="/SignUp"> Registrarse</router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <i class="fas fa-sign-in-alt"></i>
            &nbsp;<router-link class="menu" to="/SignIn"> Iniciar Sesión</router-link>
        </li>
      </ul>
    </div>
    <div class="page-content" id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getToken"]),
  },
  created() {
    this.getToken();
  },
  name: "Home",
  props: {},
  setup() {},
  mounted() {
    // despues de hacer login con facebook/google. guarda el token en localstorage
    var url_params = new URL(location.href).searchParams;
    var authToken = url_params.get("token");
    if (authToken) {
      localStorage.setItem("token", authToken);
      url_params.delete("token");
      window.history.replaceState({}, document.title, window.location.origin);

      this.$store.state.token = authToken;
      this.$store.dispatch("getCurrentUser");
      this.$router.push("/Profile");
    }
    $("#sidebarCollapse, .nav-item .nav-link").on("click", function() {
      $("#sidebar, #content").toggleClass("active");
    });
  },
};
</script>

<style lang="scss" scoped>
.menu{
  text-decoration: none;
  color: #000000;
}
.menu:hover{
  color: #f71e1e;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
  transform: translateY(20px);

}
.container-fluid {
  padding-left: var(--bs-gutter-x, 0rem);
}
.page-footer span {
  color: rgb(185, 14, 14);
}
.background {
  background-image: url("../public/logo.png");
  background-size: cover;
  height: 130px;
}
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}
#sidebar.active {
  margin-left: -17rem;
}
#content.active {
  width: 100%;
  margin: 0;
}
.btn-danger {
  color: #fff;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgba(165, 165, 211, 0.5);
}
.btn-danger:active {
  color: #fff;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgba(100, 101, 116, 0.5);
}
#sidebarCollapse {
  position: absolute;
  right: -70px;
  top: 10px;
  padding: 2.7px;
  background-image: linear-gradient(
    to right,
    #cac7e2 0%,
    #03002d 70%,
    #575485 100%
  );
  transition: 0.5s;
  color: #000011;
  text-transform: uppercase;
  white-space: nowrap;
  background-size: 200% auto;
  box-shadow: 0 0 0 0.25rem rgba(100, 101, 116, 0.5);
}
#sidebarCollapse:hover {
  white-space: nowrap;
  color: white;
  background-position: right center;
}
#sidebar {
  z-index: 100;
}
@media (max-width: 768px) {
  #sidebar {
    position: absolute;
    left: 0;
    margin-left: -17rem;
  }
  #sidebarCollapse {
    position: absolute;
    right: -70px;
    top: 10px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
}
.separator {
  margin: 3rem 0;
  border-bottom: 1px dashed #fff;
}
.text-uppercase {
  letter-spacing: 0.1em;
}
.text-gray {
  color: #aaa;
}
</style>
