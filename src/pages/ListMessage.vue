<template>
  <div class="wrapper">
    <div class="topnav">
      <div class="topnav-right">
        <a href="#search">
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

          <!-- Perfil -->
        </a>
        <a href="#about">
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
          <!-- Enviar mensaje -->
        </a>
        <a href="#about">
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
          <!-- Lista de mensaje -->
        </a>
      </div>
    </div>

    <div class="content-wrapper">
      <!-- content-wrapper -->
    </div>
    <footer class="main-footer">
      <!-- main-footer -->
    </footer>
  </div>

  <hr class="border" />

  <div class="container">
    <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="input-group">
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Search"
          name="search"
        />
        <div class="input-group-btn">
          <button class="btn btn-danger" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </form>
    <hr class="border" />
    <h2>Lista de mensajes enviados <small></small></h2>
    Seleccionar
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button type="button" class="btn btn-outline-secondary">
          <i class="bi bi-check2"></i>
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Todas</a>
          <a class="dropdown-item" href="#">Encriptado</a>
          <a class="dropdown-item" href="#">Publico</a>
        </div>
      </div>
      <div>
        &nbsp;
        <button class="btn btn-danger btn-xs">
          <i class="fa fa-trash-o"></i>
        </button>
        &nbsp;
        <button class="btn btn-info btn-xs">
          <i class="bi bi-arrow-repeat"></i>
        </button>
      </div>
    </div>
    <table class="table table-advance table-hover">
      <thead>
        <tr>
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-0"><i class="bi bi-ui-checks"></i></div>
              <div class="col col-1">Nombre</div>
              <div class="col col-2">Email</div>
              <div class="col col-3">Mensaje</div>
              <div class="col col-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
            </li>

            <li
              class="table-row"
              v-for="(user, ind) in filtredMessages"
              :key="ind"
            >
              <div class="col col-0" data-label="select">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>

              <div class="col col-1" data-label="name">
                {{ user.user }}
              </div>
              <div class="col col-2" data-label="email">
                {{ user.email }}
              </div>
              <div class="col col-3" data-label="message">
                {{ user.message }}
              </div>

              <div class="col col-4" data-label="eliminar">
                <button
                  class="btn btn-danger btn-xs"
                  @click="deleteMessage(user._id)"
                >
                  <i class="fa fa-trash-o"></i>
                </button>
              </div>
            </li>
          </ul>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  name: "SignUp",
  components: {},
  setup() {
    let Menssages = reactive([]);
    let search = ref("");

    let filtredMessages = computed(() => {
      return Menssages.filter((m) => m.message.indexOf(search.value) != -1);
    });
    console.log(Menssages);

    fetch("http://localhost:8081/api/message/list")
      .then((resp) => resp.json())
      .then((datos) => {
        datos.forEach((element) => {
          Menssages.push(element);
        });
      });

    function deleteMessage(id) {
      fetch("http://localhost:8081/api/users/delete/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((resp) => resp.json());
    }

    return {
      Menssages,
      search,
      filtredMessages,
      deleteMessage,
    };
  },
};
</script>
<style lang="scss" scoped>
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
  font-size: 17px;
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
  margin: 0px !important;
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
</style>