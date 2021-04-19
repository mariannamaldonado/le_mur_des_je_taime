<template>
  <div class="container-fluid">
    <!-- Vertical navbar -->
    <div class="vertical-nav bg-white" id="sidebar">
      <button
        id="sidebarCollapse"
        type="button"
        class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4">
        <i class="fa fa-bars mr-2"></i>
      </button>
      <div class="py-4 px-3 mb-4 bg-light background">
        <div class="media d-flex align-items-center">
          <!-- <img src="../public/muro.jpg" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
      &nbsp;-->
        </div>
      </div>
      
      <!--   <p
        class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0"
      ></p> -->
      <div class="media-body" style="text-align: center">
        <h4 class="m-0">Le Mur des Je T'aime</h4>
        <p class="font-weight-light text-muted mb-0"></p>
      </div>
      <br />
      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-house-door"></i>
            &nbsp;<router-link to="/">Inicio</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-card-heading"></i>
            &nbsp;<router-link to="/about">Nosotros</router-link>
          </a>
        </li>
          <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-envelope-open"></i>
            &nbsp;<router-link class="js-scroll-trigger" to="/Contact">Contacto</router-link>
          </a>
        </li>
         <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-suit-heart"></i>
            &nbsp;<router-link class="js-scroll-trigger" to="/Wall">Muro</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-chat-left-dots"></i>
            &nbsp;<router-link class="js-scroll-trigger" to="/NewMessage">Enviar Mensajes</router-link>
          </a>
        </li>

        <hr class="border" />
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-person-plus"></i>
            &nbsp;<router-link to="/SignUp">Registrarse</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-box-arrow-in-right"></i>
            &nbsp;<router-link to="/SignIn">Iniciar Sesión</router-link>
          </a>
        </li>
      
      </ul>

    </div>
    <!-- End vertical navbar -->

    <!-- Page content holder -->
    <div class="page-content" id="content">
      <!-- Toggle button -->
      <router-view />
    </div>
    <!-- End demo content -->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Home",
  props: {},
  setup() {},
  mounted() {
    $("#sidebarCollapse, .nav-item .nav-link").on("click", function () {
      $("#sidebar, #content").toggleClass("active");
    });
  },
};
</script>



<style lang="scss"  scoped>
  /*.container-fluid {
  background: url("../public/muroblur.png") no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  background-size: 100% 100%;  
  
 }*/
a {
  text-decoration: none;
  color: #0f1433;
}

.background {
  background-image: url("../public/muro.jpg");
  background-size: cover;
  height: 80px;
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

/* for toggle behavior */

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
}
#sidebar {
  z-index:100;
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

/*
* =========================================
* FOR DEMO PURPOSE
* =========================================
*/
body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
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
