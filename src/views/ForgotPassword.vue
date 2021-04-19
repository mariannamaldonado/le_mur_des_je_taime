<template>
  <div class="container justify-content-center" id="frame">
      <div class="col col-12 col-lg-4 offset-lg-4 p-5 bg-white rounded shadow-sm">
        <h4>Recupera tú contraseña</h4>
        <br>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />
          <label for="floatingInput"><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label>
        </div> 

        <div class="form-group d-flex justify-content-center">
          <button type="button" id="loginbutton" class="btn btn-danger btn-lg">  
            ENVIAR EMAIL
          </button>
        </div>
      </div>
    </div>   
</template>

<script>
export default {
  name: "ForgotPassword",
  components: {},

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

//background 
/*  .container-fluid {
  background-image: url("../../public/muroblur.png");
  background-size: cover;
}
  */
.container-fluid{
  min-width: 400px;
}

a{
  text-decoration: none;
}
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

//efecto button  revisar borde rojo
/* #loginbutton {
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
  border: none;
  background-image: linear-gradient(to right, #a19dcf, #03002d);
} */


#loginbutton {
  color: #9c0505;
  background: transparent;
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
}

#loginbutton:hover {
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
  border: none;
  background-image: linear-gradient(to right, #a19dcf, #03002d);
}


.btn-danger {
  color: #fff;
  background-color: #121ca8;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgba(165, 165, 211, 0.5);
}
.btn-danger:active {
  color: #fff;
  background-color: #4b51ad;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgba(100, 101, 116, 0.5);
}
#frame{
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>