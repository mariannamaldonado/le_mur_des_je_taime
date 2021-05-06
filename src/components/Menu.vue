<template>
  <div class="wrapper">
    <div class="topnav">
      <div class="topnav-right">
        <a href="/Profile">
          <img src="https://img.icons8.com/color/48/000000/user-location.png" />
          <p class="text-monospace">Perfil de usuario</p>
        </a>
        <a href="/NewMessage">
          <img
            src="https://img.icons8.com/color/48/000000/speech-bubble-with-dots.png"
          />
          <p class="text-monospace">Enviar mensaje</p>
        </a>
        <a href="/SentMessagesList">
          <img src="https://img.icons8.com/color/48/000000/wish-list.png" />
          <p class="text-monospace">Lista de mensajes</p>
        </a>
        <a href="#" @click="logout">
          <img
            src="https://img.icons8.com/dotty/80/000000/lock-orientation.png"
          />
          <p class="text-monospace">Cerrar sesión</p>
        </a>
        <a href="/Profile">
          <img
            src="https://img.icons8.com/color/48/000000/user-location.png"
          />
          <p>Hola, {{user.firstname}}</p>
        </a>

      </div>
    </div>
  </div>
  <hr class="border" />
</template>

<script>
import {mapActions} from 'vuex'
import {ref } from 'vue'
export default {
  name: "Menu",
methods: {
    ...mapActions(['logout'])
  },
  
};
</script>

<style lang="scss" scoped>
img,
svg {
  vertical-align: middle;
  height: 25px;
}
// navbar
.topnav {
  overflow: hidden;
  background-color: #f1f2f5;
  margin: 3rem 0;
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
.btn-info {
  color: #f8f9fa;
  background-color: #b7c8e0;
  border-color: #b7c8e0;
}
.btn {
  padding: 0.1rem 0.75rem;
}
</style>