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
      <ul id="menu" class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fas fa-home"></i>
            &nbsp;<router-link to="/">Inicio</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
             <i class="fas fa-address-card"></i>
            &nbsp;<router-link to="/about">Nosotros</router-link>
          </a>
        </li>
          <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fas fa-envelope-open-text"></i>
            &nbsp;<router-link class="js-scroll-trigger" to="/Contact">Contacto</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="bi bi-chat-right-dots-fill"></i>
            &nbsp;<router-link class="js-scroll-trigger" to="/NewMessage">Enviar Mensajes</router-link>
          </a>
        </li>
        <hr class="border" />
        <li class="nav-item">
          <a href="#item4" id="4" class="nav-link text-dark font-italic">
            <span>❤</span>
            &nbsp;<router-link to="/Wall"
              >Muro</router-link
            >
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
          <i class="fas fa-user-plus"></i>
            &nbsp;<router-link to="/SignUp">Registrarse</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
           <i class="fas fa-sign-in-alt"></i>
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
import { mapActions } from 'vuex'

export default {
  methods:{
    ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  },
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
//boton sidebar
.fa-bars:before {
    color: #11489a;
}
//corazon rojo
.page-footer span {
  color: rgb(185, 14, 14);
}
// hover del menu
  ul#menu li a{
        position: relative;
        font-weight:500;
        color:rgb(49, 46, 46);
        margin: 0px 15px;
        text-decoration: none;
    }
    ul#menu li a:after{
        position: absolute;
        text-decoration: none;
        bottom: 7px;
        left: 0px;
        width: 100%;
        height: 4px;
        background-color: rgb(165 165 211 / 50%);
        content: "";
        opacity: 0;
        transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
        transform: translateY(20px);        
    }
    ul#menu li a:hover:after{
      text-decoration: none;
        opacity:4;
        transform: translateY(15px)
        
    }

// fin hover menu
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
  color: #9c0505;
  position: absolute;
  right: -70px;
  top: 10px;
  border: none;
}
#sidebarCollapse:hover {
  background-image: linear-gradient(to right, #a19dcf, #03002d);
  
  cursor: pointer;
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
