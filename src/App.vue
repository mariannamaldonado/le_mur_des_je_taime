<template>
<<<<<<< HEAD
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Le Mur Des Je T'aime</h5>
 <ul class="nav flex-column">
  <li class="nav-item">
    <router-link class="nav-link active" to="/">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/about">about</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/UsersView">UsersView</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link disabled" to="/ForgotPassword">ForgotPassword</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/ListMessage">ListMessage</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/NewMessage">NewMessage</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link disabled" to="/NotFound">NotFound</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/SignIn">SignIn</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/SignUp">SignUp</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link disabled" to="/UserAdmin">UserAdmin</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/UserProfile">UserProfile</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/Muro">Muro</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link disabled" to="/Contact">Contact</router-link>
  </li>
</ul>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

    <div class="nav-brand">
      <LoginBox />
    </div>

=======
  <div class="navbar d-flex justify-content-between">
    <div id="nav">
      
    </div>
   
  </div>
>>>>>>> backend-crud
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
<<<<<<< HEAD
// .navbar{
//   display:inline-flex;
//   .nav-brand {
//   }
// }
=======
.navbar{
  display:inline-flex;
  // .nav-brand {
  // }
}
>>>>>>> backend-crud
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
export default {
 
};
</script>