<template>
 <div class="wrapper">
 
 <div class="topnav">
  <div class="topnav-right">
    <!-- Perfil -->
    <a href="/Profile">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
      </svg>
    </a>

    <!-- Enviar mensaje -->
    <a href="/NewMessage">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    </a>

    <!-- Lista de mensaje -->
    <a href="/Message"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list-stars" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z"/>
      </svg>
    </a>
  </div>
</div>
  <!-- content-wrapper -->
  <!-- <div class="content-wrapper">
  </div> -->
   <!-- main-footer -->
  <!-- <footer class="main-footer">
  </footer> -->
</div>
    
  <hr class="border" />
    <!-- FIN TOP-NAV    -->

    <!-- INICIO DE LA TARJETA DE PERFIL -->
  <div class="row"  v-for="(usuario, ind) in usuarios" :key="ind">
    <div class="col-xl-4 col-lg-5 col-md-6">
      <div class="container">
        <div class="cover-photo">
          <img class="profile" src="@/assets/img/faces/avatar1.jpg" alt="...">
        </div>
        <div class="profile-name">{{ usuario.firstname }} {{ usuario.lastname }}</div>
          <p class="about">{{ usuario.email }}</p>
          <button class="msg-btn">Enviar mensaje</button>
        </div>
      </div>
   <!-- FIN DE LA TARJETA DE PERFIL -->
      <div class="col-xl-8 col-lg-7 col-md-6">
        <section id="main-content">
          <section class="wrapper">
            <h3><i class="fa fa-angle-right"></i> Editar perfil</h3>
    <!-- formulario del perfil -->
            <div class="row mt">
              <div class="col-lg-12">
                <div class="form-panel">
                  <h6 class="mb"><i class="fa fa-angle-right"></i> Datos del perfil</h6>
                    <form class="form-horizontal style-form" method="get">
                      <div class="row">
                        <!-- <div class="col-md-6">
                          <label class="col-sm-2 col-sm-2 control-label">Rol</label>
                          <div class="col-sm-10">
                            <input  class="form-control" 
                                  type="text" 
                                  label="Rol" 
                                  :disabled="true" 
                                  v-model="user.rol">
                          </div>  
                        </div>           -->
                        <!-- <div class="col-md-6">
                          <label class="col-sm-6 col-sm-6 control-label">Nombre de usuario</label>
                          <div class="col-sm-10">
                          <input  class="form-control" 
                                  type="text"
                                  label="Nombre de Usuario"
                                  placeholder="Username"
                                  v-model="user.username">
                          </div>
                        </div> -->
                      </div>

                      <div class="form-floating mb-3">
                        <input
                            v-model="username"
                            type="text"
                            class="form-control floatingInput"
                            placeholder="Nombre"
                            />
                        <label for="floatingInput">
                          <i class="bi bi-file-earmark-person"></i>&nbsp;Nombre de usuario
                          </label>
                        </div>
                      <div class="form-floating mb-3">
                        <input
                            v-model="firstname"
                            type="text"
                            class="form-control floatingInput"
                            placeholder="Nombre"
                            />
                        <label for="floatingInput">
                         <i class="bi bi-emoji-heart-eyes"></i>&nbsp;Nombre
                          </label>
                        </div>

                 <div class="form-floating mb-3">
                        <input
                            v-model="firstname"
                            type="text"
                            class="form-control floatingInput"
                            placeholder="Nombre"
                            />
                        <label for="floatingInput">
                          <i class="bi bi-person"></i>&nbsp;Apellido
                          </label>
                        </div>

                  <div class="form-floating mb-3">
                        <input
                            v-model="firstname"
                            type="text"
                            class="form-control floatingInput"
                            placeholder="Nombre"
                            />
                        <label for="floatingInput">
                          <i class="bi bi-envelope-open"></i>&nbsp;Email
                          </label>
                        </div>
                 <div class="form-floating mb-3">
                        <input
                            v-model="firstname"
                            type="text"
                            class="form-control floatingInput"
                            placeholder="Nombre"
                            />
                        <label for="floatingInput">
                          <i class="bi bi-person-bounding-box"></i>&nbsp;Cambiar imagen de perfil
                          </label>
                        </div>
                  <div class="text-center">
                    <button type="button" class="btn"> Actualizar Perfil</button>
                  </div>
                  <div class="clearfix"></div> 
                </form>
            </div>
          </div><!-- col-lg-12-->      	
        </div><!-- /row -->
    </section>
  </section>
</div>
</div>
 <!-- <ContentFooter/> -->

</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
   name: "ListAdmin",
  components: {
   
  },
  setup() {
    let firstname = ref("");
    let lastname = ref("");
    let username = ref("");
    let email = ref("");
    let password = ref("");
    let message = ref("");
    let usuarios = reactive([]);
    onMounted(() => {
      listar();
    });
    function listar() {
      fetch("http://localhost:8081/api/users/listar")
        .then((resp) => resp.json())
        .then((datos) => {
          usuarios.splice(0);
          datos.forEach((usuario) => {
            usuarios.push(usuario);
          });
        });
    }
    function enviar() {
      fetch("http://localhost:8081/api/users/guardar", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname.value,
          lastname: lastname.value,
          username: username.value,
          email: email.value,
          password: password.value,
          message: message.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar())
        .catch((error) => console.log(error));
      //alert("Usuario ya esta registrado");
    }
    function eliminar(id) {
      fetch("http://localhost:8081/api/users/delete/" + id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar());
    }
    return {
      firstname,
      lastname,
      email,
      username,
      password,
      enviar,
      usuarios,
      message,
      eliminar,
    };
  },
}
</script>

<style scoped>
/* navbar */
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
  background-color: #3f4f66;
  color: black;
}
.topnav-right {
  float: right;
}
body {
  font-family: "lato", sans-serif;
  background-color: #f1f2f5;
}
h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}
/* lista */
.container{
  user-select: none;
  margin: 100px auto;
  background: #f4f3ef;
  color: #b3b8cd;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0,0,0,.75);
}
.cover-photo{
  background: url(https://coursefinders.com/blog/wp-content/uploads/2018/09/ti-amo-mur-je-taime-560x315.jpg);
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.profile{
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #f4f3ef;
  padding: 7px;
  background: #f4f3ef;
}
.profile-name{
  font-size: 25px;
  font-weight: bold;
  margin: 27px 0 0 120px;
}
.about{
  margin-top: 35px;
  line-height: 21px;
}
button{
  margin: 10px 0 40px 0;
}
.msg-btn, .follow-btn{
  background: #1f4b8d;;
  border: 1px solid #1f4b8d;
  padding: 10px 25px;
  color: #fff;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  border-radius: 25px;
}
.follow-btn{
  margin-left: 10px;
  background: transparent;
  color: #02899c;
}
.follow-btn:hover{
  color: #231e39;
  background: #03bfbc;
  transition: .5s;
}
.container i{
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: .5s;
}
.container i:hover{
  color: #03bfbc;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    color: #797979;
    background: #f2f2f2;
    font-family: 'Ruda', sans-serif;
    padding: 0px !important;
    margin: 0px !important;
    font-size: 13px;
        background-color: #fff;
}
.form-panel {
    background: #ffffff;
    margin: 10px;
    padding: 10px;
    box-shadow: 0px 3px 2px #aab2bd;
    text-align: left;
}
.wrapper {
    display: inline-block;
    margin-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-top: 0px;
    width: 100%;
}
.btn {
  display: inline-block;
  background: #1f4b8d;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;
}
/* new style */
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
</style>