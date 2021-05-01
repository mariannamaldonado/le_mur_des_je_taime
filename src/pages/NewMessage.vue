<template>
  <Menu />
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
      <!-- inicio -->
      <div class="card-body">
        <div>
          <form method="post">
            <textarea id="mytextarea">Ciao, Ti amo!</textarea>
            <div class="button-wrap">
              <hr />
              <a href="#" class="myButton">Enviar</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <hr class="border" />
  <ContentFooter />
</template>

<script>
import Menu from "@/components/Menu.vue";
import ContentFooter from "@/components/ContentFooter";
import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "NewMessage",
  components: {
    Menu,
    ContentFooter,
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
