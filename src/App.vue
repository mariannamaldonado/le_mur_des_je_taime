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
      <ul id="menu" data-animation="to-right" class=" menu nav flex-column bg-white mb-0">
        <li class="nav-link text-dark font-italic">
            <span><i class="fas fa-home"></i></span>
            &nbsp;<router-link aria-hidden="true"  to="/"> <span>Inicio</span></router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <span><i class="fas fa-address-card"></i></span>
            &nbsp;<router-link aria-hidden="true"  to="/about"> <span>Nosotros</span></router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <span><i class="fas fa-envelope-open-text"></i></span>
            &nbsp;<router-link aria-hidden="true"  to="/Contact"> <span>Contacto</span></router-link
            >
        </li>
        <li class="nav-link text-dark font-italic">
            <span>❤</span>
            &nbsp;<router-link aria-hidden="true" to="/MessageBase"><span> Muro</span></router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <span><i class="bi bi-chat-right-dots-fill"></i></span>
            &nbsp;<router-link aria-hidden="true"  to="/NewMessage"> <span>Enviar Mensajes</span></router-link
            >
        </li>
        <hr class="border" />
        <li class="nav-link text-dark font-italic">
            <span><i class="fas fa-user-plus"></i></span>
            &nbsp;<router-link aria-hidden="true"  to="/SignUp"> <span>Registrarse</span></router-link>
        </li>
        <li class="nav-link text-dark font-italic">
            <span><i class="fas fa-sign-in-alt"></i></span>
            &nbsp;<router-link aria-hidden="true"  to="/SignIn"><span> Iniciar Sesión</span></router-link>
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
    $("#sidebarCollapse, .nav .nav-link").on("click", function() {
      $("#sidebar, #content").toggleClass("active");
    });
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
}
.menu li {
  margin-right: 70px;
  position: relative;
  display: block;
  overflow: hidden;
}
.menu li span {
  color: black;
  transition: transform 0.9s ease-out;
}
.menu li span:first-child {
  display: inline-block;
  padding: 10px;
}
.menu li span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}
.menu i {
  font-size: 25px;
}
.menu li:hover span:first-child {
  transform: translateY(90%);
}
.menu li:hover span:last-child,
.menu[data-animation] li:hover span:last-child {
  transform: none;
}
.menu[data-animation="to-right"] li span:last-child {
  transform: translateX(-100%);
}
.menu[data-animation="to-right"] li:hover span:first-child {
  transform: translateX(20%);
}
.container-fluid {
  padding-left: var(--bs-gutter-x, 0rem);
}
.background {
  background-image: url("../public/logo.png");
  background-size: cover;
  height: 110px;
}
.vertical-nav {
  min-width: 17rem;
  width: 15rem;
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
