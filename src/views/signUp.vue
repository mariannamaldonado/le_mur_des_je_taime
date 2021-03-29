<template>
  <div class="container">
    <div class="justify-content" center>
      <div class="col col-4 offset-4">
        <h2>Sign Up</h2>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Nombre"
          />

          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Apellido"
          />

          <label for="floatingInput">Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />

          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Usuario"
          />

          <label for="floatingInput">Usuario</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Contraseña"
          />
          <label for="floatingInput">Contraseña</label>
        </div>

        <div class="form-floating">
          <select
            type="text"
            class="form-control floatingInput"
            placeholder="Rol"
          >
            <option value="" selected hidden >Rol</option>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          <label for="rol"></label>
        </div>

        <div class="form-group">
          <button type="button" id="loginbutton" class="btn btn-danger btn-lg">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr/>
  <div>
    <mdb-modal-footer class="mx-5 pt-3 mb-1">
      
      <p class="font-small grey-text d-flex justify-content-center">
        ¿Already member?<a href="SignIn" class="blue-text ml-1"> Sign In</a>
      </p>
    </mdb-modal-footer>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  components: {},

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
  border-bottom: 2px solid #23528b;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);

}

.form-floating {
  border-radius: none !important;
}
.form-control:focus {
  border-bottom: 2px solid #23528b;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

#loginbutton {
  font-size: 1.5em;
  margin-top: 50px;
  border-radius: 50px;
  padding: 10px 40px;
  border: none;
  background-image: linear-gradient(to right, #a19dcf, #03002d);
}

.btn-danger {
    color: #fff;
    background-color: #121ca8;
    border-color: transparent;
    box-shadow: 0 0 0 .25rem rgba(165, 165, 211, .5);
}
.btn-danger:active {
    color: #fff;
    background-color: #4b51ad;
    border-color: transparent;
    box-shadow: 0 0 0 .25rem rgba(100, 101, 116, .5);
}
</style>