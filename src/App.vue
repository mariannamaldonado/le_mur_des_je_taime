<template>
  <div class="navbar d-flex justify-content-between">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/users">Users</router-link> | 
      <router-link to="/About">Quienes Somos</router-link> | 
      <router-link to="/NotFound">404</router-link> | 
      <router-link to="/Contacto">Contacto</router-link> | 
      <router-link to="/ListMessage">List Message</router-link> | 
      <router-link to="/NewMessage">Nuevo Mensaje</router-link> | 
      <router-link to="/ForgotPassword">Olvidaste tu password</router-link> | 
      <router-link to="/SignIn">Iniciar sesión</router-link> | 
      <router-link to="/SignUp">Crear una cuenta</router-link> | 
      <router-link to="/UserAdmin">Usuario Admin</router-link> | 
      <router-link to="/UserProfile">Perfil Usuario</router-link>

    </div>
    <div class="nav-brand">
      <LoginBox />
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar{
  display:inline-flex;
  .nav-brand {
  }
}
#nav {
  padding-left: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>

<script>
import LoginBox from "@/components/LoginBox";
export default {
  components: {
    LoginBox,
  },
};
</script>