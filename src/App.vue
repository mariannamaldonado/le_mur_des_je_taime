<template>
  <!-- <div class="navbar d-flex justify-content-between">
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
      <router-link to="/UserAdmin">Usuario Administrador</router-link> | 
      <router-link to="/UserProfile">Perfil Usuario</router-link> |
      <router-link to="/EditProfileForm">Editar Perfil</router-link> |
      <router-link to="/UserCard">Perfil Usuario2</router-link> |
      <router-link to="/MembersCard">carta usuario</router-link> 
    </div>
  </div> -->

<!-- <div class="area">
  </div>
  <nav class="main-menu">
            <ul>
                <li>
                    <a href="">
                    <router-link to="/">
                        <i class="fa fa-home fa-2x"></i>
                          <span class="nav-text">
                            Home
                          </span>
                    </router-link>  
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#">
                      <router-link to="/About">
                       <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Nosotros
                        </span>
                      </router-link>
                       
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                      <router-link to="/Contacto">
                      <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Contacto
                        </span>
                      </router-link>
                    </a>
                    
                </li>
               
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Muro
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <span class="nav-text">
                            Mensaje
                        </span>
                    </a>
                </li>

                 <li>
                    <a href="#">
                      <router-link to="/UserProfileR">
                       <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <span class="nav-text">
                            Mensaje
                        </span>
                      </router-link>
                      
                    </a>
                </li>
            </ul>


            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Cerrar sessión
                        </span>
                    </a>
                </li>  
            </ul>
        </nav> -->
  
  <router-view />
</template>

<style lang="scss">


</style>

<script>
export default {
  components: {

  },
};
</script>