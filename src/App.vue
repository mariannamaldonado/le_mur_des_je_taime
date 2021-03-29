<template>
  <div class="navbar d-flex justify-content-between">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/users">Users</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/contacto">Contacto</router-link>|
      <router-link to="/SignUp">Sign Up</router-link>|
      <router-link to="/SignIn">Sign In</router-link>|
      <router-link to="/ForgotPassword"> Forgot Password</router-link>|
     
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
  /* .nav-brand {
  } */
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