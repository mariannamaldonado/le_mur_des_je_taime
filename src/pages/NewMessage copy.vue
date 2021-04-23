<template>
 <div class="wrapper">
    <div class="topnav">
      <div class="topnav-right">
         <!-- Perfil -->
        <a href="@/Profile">
          <p class="text-monospace">Profile</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            ></path>
          </svg>
        </a>
          <!-- Enviar mensaje -->
        <a href="@/NewMessage">
          <p class="text-monospace">Enviar mensaje</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-chat-left-dots"
            viewBox="0 0 16 16">
            <path
              d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
        </a>
        <!-- Lista de mensaje -->
        <a href="@/ListMessage">
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
         <!-- Cerrar sesión-->
        <a href="#">
          <p class="text-monospace">Cerrar sesión</p>
         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="content-wrapper">
      <!-- content-wrapper -->
    </div>
    <footer class="main-footer">
      <!-- main-footer -->
    </footer>


  <hr class="border" />

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
      </div>
    </div>
    <!-- inicio -->

    <div class="card-body">
      <div>
        <form method="post">
          <textarea id="mytextarea">Ciao, Ti amo!</textarea>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewMessage",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.border-left-warning {
  border-left: 0.25rem solid #b7c8e0 !important;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
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

// body {
//   font-family: "lato", sans-serif;
//   background-color: #f1f2f5;
// }

// h2 {
//   font-size: 26px;
//   margin: 20px 0;
//   text-align: center;
// }
// h2 small {
//   font-size: 0.5em;
// }

// textarea {
//   overflow: hidden;
// }



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
  border-bottom: 2px solid #070a2b;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

.form-floating {
  border-radius: none !important;
}

.form-control:focus {
  background: transparent;
  border-bottom: 2px solid #292a36;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}
</style>
