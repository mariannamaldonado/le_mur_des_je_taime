<template>
  <Menu />
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
              <div class="col col-1">Para</div>
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
              v-for="(Message, ind) in Messages"
              :key="ind"
            >
              <div class="col col-0" data-label="select">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
              <div class="col col-1" data-label="name">
                {{ Message.addresseName }}
              </div>
              <div class="col col-2" data-label="email">
                {{ Message.addresseEmail }}
              </div>
              <div class="col col-3" data-label="message">
                {{ Message.message }}
              </div>
              <div class="col col-4" data-label="eliminar">
                <button
                  class="btn btn-danger btn-xs"
                  @click="deleteMessage(Message._id)"
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
  <ContentFooter />
</template>

<script>
import Menu from "@/components/Menu.vue";
import ContentFooter from "@/components/ContentFooter";
import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "SentMessagesList",
  components: {
    Menu,
    ContentFooter,
  },
  setup() {
    let Messages = reactive([]);
    let search = ref("");

    onMounted(() => {
      getMessageList();
    });

    let filtredMessages = computed(() => {
      return Messages.filter((item) => {
        return item.message.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    function getMessageList() {
      fetch("http://localhost:8081/api/message/listUser/")
        .then((resp) => resp.json())
        .then((datos) => {
          datos.forEach((element) => {
            Messages.push(element);
          });
        });
    }
    
    function deleteMessage(id) {
      fetch("http://localhost:8081/api/message/delete/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          filtredMessages();
        });
    }

    return {
      Messages,
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
  flex-basis: 3%;
}
.responsive-table .col-1 {
  flex-basis: 12%;
}
.responsive-table .col-2 {
  flex-basis: 31%;
}
.responsive-table .col-3 {
  flex-basis: 55%;
}
.responsive-table .col-4 {
  flex-basis: 4%;
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
</style>