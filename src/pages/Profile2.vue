<template>
 
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
            </div>
            </div>
                <!-- End of Topbar -->
    <!-- <hr class="border" /> -->
    <!-- FIN TOP-NAV    -->

    <!-- INICIO DE LA TARJETA DE PERFIL -->
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <div class="container">
          <div class="cover-photo">
            <img class="profile" src="@/assets/img/faces/avatar1.jpg" alt="...">
          </div>
          <div class="profile-name">Pepito Perez</div>
            <p class="about">"is simply dummy text of the printing and typesetting industry."</p>
            <button class="msg-btn">Message</button>
          </div>
        </div>

      <div class="col-xl-8 col-lg-7 col-md-6">
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
                    <label class="col-sm-2 col-sm-2 control-label">Nombre:</label>
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
 <ContentFooter/>
</template>
<script>


export default {
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

/* TopBar */


.sidebar .nav-item.dropdown .dropdown-toggle::after,
.topbar .nav-item.dropdown .dropdown-toggle::after {
  width: 1rem;
  text-align: center;
  float: right;
  vertical-align: 0;
  border: 0;
  font-weight: 900;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
}

.sidebar .nav-item.dropdown.show .dropdown-toggle::after,
.topbar .nav-item.dropdown.show .dropdown-toggle::after {
  content: "\f107";
}

.sidebar .nav-item .nav-link,
.topbar .nav-item .nav-link {
  position: relative;
}

.sidebar .nav-item .nav-link .badge-counter,
.topbar .nav-item .nav-link .badge-counter {
  position: absolute;
  transform: scale(0.7);
  transform-origin: top right;
  right: 0.25rem;
  margin-top: -0.25rem;
}

.sidebar .nav-item .nav-link .img-profile,
.topbar .nav-item .nav-link .img-profile {
  height: 2rem;
  width: 2rem;
}

.topbar {
  height: 4.375rem;
}

.topbar #sidebarToggleTop {
  height: 2.5rem;
  width: 2.5rem;
}

.topbar #sidebarToggleTop:hover {
  background-color: #eaecf4;
}

.topbar #sidebarToggleTop:active {
  background-color: #dddfeb;
}

.topbar .navbar-search {
  width: 25rem;
}

.topbar .navbar-search input {
  font-size: 0.85rem;
  height: auto;
}

.topbar .topbar-divider {
  width: 0;
  border-right: 1px solid #e3e6f0;
  height: calc(4.375rem - 2rem);
  margin: auto 1rem;
}

.topbar .nav-item .nav-link {
  height: 4.375rem;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
}

.topbar .nav-item .nav-link:focus {
  outline: none;
}

.topbar .nav-item:focus {
  outline: none;
}

.topbar .dropdown {
  position: static;
}

.topbar .dropdown .dropdown-menu {
  width: calc(100% - 1.5rem);
  right: 0.75rem;
}

.topbar .dropdown-list {
  padding: 0;
  border: none;
  overflow: hidden;
}

.topbar .dropdown-list .dropdown-header {
  background-color: #4e73df;
  border: 1px solid #4e73df;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #fff;
}

.topbar .dropdown-list .dropdown-item {
  white-space: normal;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-left: 1px solid #e3e6f0;
  border-right: 1px solid #e3e6f0;
  border-bottom: 1px solid #e3e6f0;
  line-height: 1.3rem;
}

.topbar .dropdown-list .dropdown-item .dropdown-list-image {
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
}

.topbar .dropdown-list .dropdown-item .dropdown-list-image img {
  height: 2.5rem;
  width: 2.5rem;
}

.topbar .dropdown-list .dropdown-item .dropdown-list-image .status-indicator {
  background-color: #eaecf4;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 0.125rem solid #fff;
}

.topbar .dropdown-list .dropdown-item .text-truncate {
  max-width: 10rem;
}

.topbar .dropdown-list .dropdown-item:active {
  background-color: #eaecf4;
  color: #3a3b45;
}

@media (min-width: 576px) {
  .topbar .dropdown {
    position: relative;
  }
  .topbar .dropdown .dropdown-menu {
    width: auto;
    right: 0;
  }
  .topbar .dropdown-list {
    width: 20rem !important;
  }
  .topbar .dropdown-list .dropdown-item .text-truncate {
    max-width: 13.375rem;
  }
}

.topbar.navbar-dark .navbar-nav .nav-item .nav-link {
  color: rgba(255, 255, 255, 0.8);
}

.topbar.navbar-dark .navbar-nav .nav-item .nav-link:hover {
  color: #fff;
}

.topbar.navbar-dark .navbar-nav .nav-item .nav-link:active {
  color: #fff;
}

.topbar.navbar-light .navbar-nav .nav-item .nav-link {
  color: #d1d3e2;
}

.topbar.navbar-light .navbar-nav .nav-item .nav-link:hover {
  color: #b7b9cc;
}

.topbar.navbar-light .navbar-nav .nav-item .nav-link:active {
  color: #858796;
}


.topbar {
    height: 4.375rem;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
}
.shadow {
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
}
.bg-white {
    background-color: #fff!important;
}
.navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
}
</style>
