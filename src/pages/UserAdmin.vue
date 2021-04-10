<template> 
 <div class="wrapper">
 
 <div class="topnav">
  <div class="topnav-right">
    <!-- Perfil -->
    <a href="#search">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
      </svg>
    </a>

    <!-- Enviar mensaje -->
    <a href="#about">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    </a>

    <!-- Lista de mensaje -->
    <a href="#about"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list-stars" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z"/>
      </svg>
    </a>
  </div>
</div>
  <!-- content-wrapper -->
  <div class="content-wrapper">
  </div>
   <!-- main-footer -->
  <footer class="main-footer">
  </footer>
</div>
    
    <hr class="border" />

    <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" name="search">
        <div class="input-group-btn">
          <button class="btn btn-danger" type="submit">
            <i class="bi bi-search"></i>
          </button>
          
        </div>
      </div>
    </form>
  <section id="main-content">
    <section class="wrapper">
      <h3><i class="fa fa-angle-right"></i> Mensaje de usuarios</h3>
          	
        <!-- formulario del perfil -->
        <div class="row mt">
          <div class="col-lg-12">
            <div class="form-panel">

                <div class="row mt">
                  <div class="col-md-12">
                    <div class="content-panel">
                        <table class="table table-advance table-hover">
	                  	  <!-- <h4 class="mb"><i class="fa fa-angle-right"></i> Datos del perfil</h4> -->
	                  	  <hr>
                      <thead>
                        <tr>
                          <th><i class="bi bi-person"></i> Nombre </th>
                          <th><i class="bi bi-chat-right-text"></i>  Mensaje</th>
                          <th><i class="bi bi-mailbox"></i> Email</th>
                          <th><i class=" fa fa-edit"></i> Fecha </th>
                          <th></th>
                        </tr>
                      </thead>
                      
                      <tbody>
                        <tr>
                          <td>Maria</td>
                          <td>Te amo</td>
                          <td>maria@gmail.com</td>
                          <td><span class="label label-info label-mini">Publicada 15/04/2016 a las 21:41</span></td>
                          <td>      
                            <button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button> &nbsp; 
                            <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
                          </td>      
                        </tr>
                        
                        <tr>
                          <td> Francesca</td>
                          <td class="hidden-phone">Ti voglio bene / Ti amo.</td>
                          <td>Francesca@gmail.com</td>
                          <td><span class="label label-warning label-mini">Publicada 15/04/2016 a las 21:41</span></td>
                          <td>
                            <button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button>&nbsp; 
                            <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
                          </td>
                        </tr>
                        <tr>
                        <td>Celine </td>
                        <td class="hidden-phone"> je t’aime</td>
                        <td>celine@gmail.com </td>
                        <td><span class="label label-success label-mini">Publicada 15/04/2016 a las 21:41</span></td>
                        <td>
                          <button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button>&nbsp; 
                          <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
                        </td>
                      </tr>
              
                      <tr>
                        <td> Zehra</td>
                        <td class="hidden-phone">Seni seviyorum</td>
                        <td> Zehra@gmail.com</td>
                        <td><span class="label label-success label-mini">Publicada 15/04/2016 a las 21:41</span></td>
                        <td>
                          <button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button>&nbsp; 
                          <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Camilo</td>
                        <td class="hidden-phone"> Eu te amo</td>
                        <td>camilo@gmail.com</td>
                        <td><span class="label label-success label-mini">Publicada 15/04/2016 a las 21:41</span></td>
                        <td>
                          <button class="btn btn-success btn-xs"><i class="fa fa-check"></i></button>&nbsp; 
                          <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>
                        </td>
                      </tr>
                      
                              </tbody>
                          </table>
                      </div><!-- /content-panel -->
                  </div><!-- /col-md-12 -->
              </div><!-- /row -->
 
            </div>
          </div><!-- col-lg-12-->      	
        </div><!-- /row -->
    </section>
  </section>
</template>

<script>
export default {
//   name: "UserAdmin",
//   components: {},

//   setup() {
//     return {
        
//     }
//   },
// }
 data() {
    return {
      user: {
        rol: "Usuario",
        username: "Pepe",
        email: "pepe@gmail.com",
        firstName: "Pepito",
        lastName: "Perez",
        aboutMe: `is simply dummy text of the printing and typesetting industry.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>

<style lang="css" scoped>


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

</style>