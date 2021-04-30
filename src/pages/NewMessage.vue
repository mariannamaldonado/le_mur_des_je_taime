<template>
  <div class="wrapper">
    <div class="topnav">
      <div class="topnav-right">
        <!-- Perfil -->
        <a href="/Profile">
          <p class="text-monospace">Profile</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            ></path>
          </svg>
        </a>
        <!-- Enviar mensaje -->
        <a href="/NewMessage">
          <p class="text-monospace">Enviar mensaje</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-chat-left-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
        </a>
        <!-- Lista de mensaje -->
        <a href="/ListMessage">
          <p class="text-monospace">Lista de mensajes</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-list-stars"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
            />
            <path
              d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z"
            />
          </svg>
        </a>
        <a href="#">
          <p class="text-monospace">Cerrar sesión</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="content-wrapper">
    </div>
    <footer class="main-footer">
    </footer>
  </div>
  <hr class="border" />
  <!-- <div class="container"> 
    <h2>Mensaje nuevo <small></small></h2>
  </div> -->
  <div class="card border-left-warning shadow h-100 py-2">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <h6 class="m-0 font-weight-bold text-primary">Mensaje nuevo</h6>
          <br />
          <div class="h5 mb-0 font-weight-bold text-gray-800">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control floatingInput"
                data-error="Por favor ingrese su nombre"
                placeholder="Nombre"
              />
              <label for="floatingInput">&nbsp;Destinatario:</label>
            </div>
          </div>
          <div class="h5 mb-0 font-weight-bold text-gray-800">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control floatingInput"
                data-error="Por favor ingrese su email"
                placeholder="nombre@ejemplo.com"
              />
              <label for="floatingInput">&nbsp;Email:</label>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <i class="fas fa-comments fa-2x text-gray-300"></i>
        </div>
      </div>
      <!-- tiny editor de texto -->
      <div class="card-body form-control floatingInput">
        <editor
          :init="{
            height: 300,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap',
              'searchreplace visualblocks code fullscreen',
              'print preview anchor insertdatetime media',
              'paste code help wordcount table',
            ],
            toolbar:
              'undo redo | styleselect  | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist | outdent indent | help',
            toolbar_mode: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            selector: 'textarea',
           
          }"
        >
        </editor>
        <div class="button-wrap">
          <hr />
          <a href="#" class="myButton">Enviar</a>
        </div>
      </div>
    </div>
  </div>
  <hr class="border" />
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <router-link :to="{ path: '/' }">Le mur des je t'aime</router-link>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &nbsp; Hecho con &nbsp;
        <a id="heart" href="#">&#9829;</a>&nbsp; por
        <a
          href="https://github.com/mariannamaldonado/le_mur_des_je_taime"
          target="_blank"
        >
          &nbsp; Final Project.</a
        >&nbsp;
      </div>
    </div>
  </footer>
  <!-- <ContentFooter /> -->
</template>
<!--  import ContentFooter from '@/components/ContentFooter' -->
<script>
import Editor from "@tinymce/tinymce-vue";

import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "NewMessage",
  components: {
    Editor,
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
// inicio button
.myButton {
  box-shadow: 0px 0px 0px 2px #3f71fa;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 10px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;
}
.myButton:hover {
  background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
  background-color: #476e9e;
}
.myButton:active {
  position: relative;
  top: 1px;
}
// fin booton

//borde tarjeta
.border-left-warning {
  border-left: 0.25rem solid #b7c8e0 !important;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
// navbar

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
  font-size: 12px;
}

.topnav a:hover {
  background-color: #b7c8e0;
  color: black;
}

.topnav-right {
  float: right;
}

// sidebar
body {
  font-family: "lato", sans-serif;
  background-color: #f1f2f5;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
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
  // margin: 0px !important;
  font-size: 13px;
  background-color: #fff;
}

.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.responsive-table .table-header {
  background-color: #b7c8e0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #f1f2f5;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-0 {
  flex-basis: 5%;
}
.responsive-table .col-1 {
  flex-basis: 15%;
}
.responsive-table .col-2 {
  flex-basis: 20%;
}
.responsive-table .col-3 {
  flex-basis: 50%;
}
.responsive-table .col-4 {
  flex-basis: 10%;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #b7c8e0;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}

.btn-info {
  color: #f8f9fa;
  background-color: #b7c8e0;
  border-color: #b7c8e0;
}

.btn {
  padding: 0.1rem 0.75rem;
}

#heart {
  font-size: 40px;
  color: #f27983;
  position: relative;
}

#heart:after {
  content: "♥";
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transition: 0s all ease;
}

#heart:hover:after {
  transform: scale(2);
  -webkit-transform: scale(2);
  opacity: 0;
  transition: 0.8s all ease;
}
</style>