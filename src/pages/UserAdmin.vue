<template> 
  <section id="main-content">
    <section class="wrapper">
      <h3><i class="fa fa-angle-right"></i> Editar perfil</h3>
          	
        <!-- formulario del perfil -->
        <div class="row mt">
          <div class="col-lg-12">
            <div class="form-panel">
              <h4 class="mb"><i class="fa fa-angle-right"></i> Datos del perfil</h4>
                <form class="form-horizontal style-form" method="get">
                  <div class="row">
                    <div class="col-md-6">
                      <label class="col-sm-2 col-sm-2 control-label">Rol</label>
                        <div class="col-sm-10">
                          <input  class="form-control" 
                                  type="text" 
                                  label="Rol" 
                                  :disabled="true" 
                                  v-model="user.rol">
                        
                        </div>  
                    </div>          
                          
                    <div class="col-md-6">
                      <label class="col-sm-6 col-sm-6 control-label">Nombre de usuario</label>
                        <div class="col-sm-10">
                          <input  class="form-control" 
                                  type="text"
                                  label="Nombre de Usuario"
                                  placeholder="Username"
                                  v-model="user.username">
                        </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-sm-2 col-sm-2 control-label">Name</label>
                      <div class="col-sm-10">
                        <input  class="form-control"
                                type="text"
                                label="Name"
                                placeholder="First Name"
                                v-model="user.firstName">
                      </div>
                  </div>

                  <div class="form-group">
                    <label class="col-sm-2 col-sm-2 control-label">Apellido</label>
                      <div class="col-sm-10">
                        <input  type="text" 
                                class="form-control"
                                label="Apellido"
                                placeholder="Last Name"
                                v-model="user.lastName">
                      </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 col-sm-2 control-label">Email</label>
                      <div class="col-sm-10">
                        <input  class="form-control round-form" 
                                type="email"
                                label="Email"
                                placeholder="Email"
                                v-model="user.email">
                        </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 col-sm-2 control-label">Acerca de mí</label>
                      <textarea rows="5" 
                                class="form-control border-input"
                                placeholder="Here can be your description"
                                v-model="user.aboutMe">
                      </textarea>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary"> Actualizar Perfil</button>
                  </div>
                  <div class="clearfix"></div>
                </form>
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