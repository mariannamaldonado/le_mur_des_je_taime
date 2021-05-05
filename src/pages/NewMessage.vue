<template>
  <Menu />
  <div class="card border-left-warning shadow h-100 py-2">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <!-- <h6 class="m-0 font-weight-bold text-primary">Mensaje nuevo</h6>
          <br /> -->
          <div class="h5 mb-0 font-weight-bold text-gray-800">
            <div class="form-floating mb-3">
              <input
                v-model="addresseName"
                type="text"
                class="form-control floatingInput"
                data-error="Por favor ingrese nombre"
                placeholder="Nombre"
              />
              <label for="floatingInput">&nbsp;Para:</label>
            </div>
          </div>
          <div class="h5 mb-0 font-weight-bold text-gray-800">
            <div class="form-floating mb-3">
              <input
                v-model="addresseEmail"
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
      <editor
        v-model="message"
        :init="{
          height: 260,
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
      <br />
      <div class="form-floating mb-3">
        <input
          v-model="encryption_key"
          type="number"
          class="form-control floatingInput"
          data-error="Por favor ingrese su clave"
          placeholder="Clave"
        />
        <label for="floatingInput">Clave de desencriptación del mensaje</label>
      </div>
      <div class="boton">
        <a class="cta" @click="encryption">
          <span>Encriptar</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
      <br />
      <hr class="border" />
      <div class="boton">
        <a href="#" class="cta" @click="SendMessage">
          <span>Enviar mensaje</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <hr class="border" />
  <ContentFooter />
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import Menu from "@/components/Menu.vue";
import ContentFooter from "@/components/ContentFooter";
import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "NewMessage",
  components: {
    Editor,
    Menu,
    ContentFooter,
  },
  setup() {
    let Messages = reactive([]);
    let search = ref("");
    let message = ref("");
    let addresseEmail = ref("");
    let addresseName = ref("");
    let encryption_key = ref("");

    onMounted(() => {
      getMessageList();
    });

    let filtredMessages = computed(() => {
      return Messages.filter((item) => {
        return item.message.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    function getMessageList() {
      fetch("http://localhost:8081/api/message/list")
        .then((resp) => resp.json())
        .then((datos) => {
          Messages.splice(0);
          datos.forEach((element) => {
            Messages.push(element);
          });
        });
    }

    function SendMessage() {
      fetch("http://localhost:8081/api/message/save/" + id,{
        method: "POST",
        body: JSON.stringify({
          message: message.value,
          addresseEmail: addresseEmail.value,
          addresseName: addresseName.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((datos) => listar())
      //alert("Mensaje ya esta registrado");
    }

function encryption() {
      fetch("http://localhost:8081/api/message/save/608bc8603f37963f34d6ec98",{
        method: "POST",
        body: JSON.stringify({
          message: message.value,
          addresseEmail: addresseEmail.value,
          addresseName: addresseName.value,
          encryption_key: encryption_key.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((datos) => listar())
    }
    return {
      encryption,
      encryption_key,
      addresseEmail,
      addresseName,
      message,
      SendMessage,
      search,
      getMessageList,
      Messages,
      filtredMessages,
    };
  },
};
</script>

<style lang="scss" scoped>
.boton {
  padding-top: 2em;
  cursor: pointer;
}
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
  border-bottom: 2px solid #212529;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}
.form-floating {
  border-radius: none !important;
}
.form-control:focus {
  border-bottom: 2px solid #212529;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}
.border-left-warning {
  border-left: 0.25rem solid #b7c8e0 !important;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
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
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 16px;
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

<style lang="sass" scoped>
$color: #111
$primary: #b7c8e0
html, body
  height: 100%
body
  display: grid
  font-family: Avenir, sans-serif
  color: $color
a
  text-decoration: none
  color: inherit
.cta
  position: relative
  margin: auto
  padding: 19px 22px
  transition: all .2s ease
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    border-radius: 28px
    background: rgba($primary,.5)
    width: 40px
    height: 40px
    transition: all .3s ease
  span
    position: relative
    font-size: 10px
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    position: relative
    top: 0
    margin-left: 10px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: $color
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 100%
      background: rgba($primary,1)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)
</style>
