<template>
  <div class="wrapper">
    <div class="topnav">
      <h5 class="title">Hola, {{user.firstname}}!</h5>
      <div class="topnav-right">
         <router-link to="/MessageBase">
           <span style="font-size:125%">❤</span>
          <p class="text-monospace">Muro</p>
        </router-link>
        <router-link to="/Profile">
          <img src="https://img.icons8.com/color/48/000000/user-location.png" />
          <p class="text-monospace">Perfil de usuario</p>
        </router-link>
        <router-link to="/NewMessage" v-if="user.role !== true">
          <img src="https://img.icons8.com/color/48/000000/speech-bubble-with-dots.png"/>
          <p class="text-monospace">Enviar mensaje</p>
        </router-link>
        <router-link to="/SentMessagesList" v-if="user.role !== true">
          <img src="https://img.icons8.com/color/48/000000/wish-list.png" />
          <p class="text-monospace">Lista de mensajes</p>
        </router-link>
 
        <router-link to="/MessagesList" v-if="user.role == true">
          <img src="https://img.icons8.com/color/48/000000/wish-list.png"/>
          <p class="text-monospace">Gestión de mensajes</p>
        </router-link>
        <router-link to="/UsersList" v-if="user.role == true">
          <img src="https://img.icons8.com/color/48/000000/user-location.png"/>
          <p class="text-monospace">Gestión de usuario</p>
        </router-link>
               <router-link to="#" @click="logout">
          <img src="https://img.icons8.com/dotty/80/000000/lock-orientation.png"/>
          <p class="text-monospace">Cerrar sesión</p>
        </router-link>
        <router-link>
          <div class="cover-photo">
            <img class="profile" :src="user.avatar" alt="..." />
          </div>
          <p>{{ user.firstname }}</p>
        </router-link>
      </div>
    </div>
  </div>
  <hr class="border" />
</template>
<script>
import { mapState, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "Menu",
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapState(["user"]),
  }
};
</script>

<style lang="scss" scoped>

img,
svg {
  vertical-align: middle;
  height: 25px;
}
.profile{
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #F4F3EF;
  padding: 7px;
  background: #F4F3EF;
}
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
.btn-info {
  color: #f8f9fa;
  background-color: #b7c8e0;
  border-color: #b7c8e0;
}
.btn {
  padding: 0.1rem 0.75rem;
}
h5.title{
  display: inline-block;
  padding-top: 28px;
  padding-left: 20px;
}
</style>