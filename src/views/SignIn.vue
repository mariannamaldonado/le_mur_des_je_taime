<template>
  <div class="container-fluid justify-content-center">
      <div class="col col-6 offset-3 p-5 bg-white rounded shadow-sm">
        <h2>Sign In</h2>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="name@ejemplo.com"
          />
          <label for="floatingInput"><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control floatingInput"
            placeholder="Contraseña"
          />
          <label for="floatingInput"><i class="fas fa-unlock-alt"></i>&nbsp;Contraseña</label>
        </div>

        <!-- <div class="form-floating">
          <select
            type="text"
            class="form-control floatingInput"
            placeholder="Rol"
          >
            <option value="" selected hidden>Rol</option>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          <label for="rol"></label>
        </div> -->
        <br />
        <div class="form-floating">
          <div class="d-flex justify-content-center">
            <a href="ForgotPassword"><h6>¿Has olvidado tu contraseña?</h6></a>
          </div>
        </div>

        <div class="form-group d-flex justify-content-center">
          <button type="button" id="loginbutton" class="btn btn-danger btn-lg">
            SIGN IN
          </button>
        </div>
        <br />
        <div>
          <p
            class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
          >
            or Sign In with:
          </p>
          <p class="social d-flex justify-content-center">
           <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
           <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxNjdFRTY7IiBkPSJNNDkyLjY2OCwyMTEuNDg5bC0yMDguODQtMC4wMWMtOS4yMjIsMC0xNi42OTcsNy40NzQtMTYuNjk3LDE2LjY5NnY2Ni43MTUNCgljMCw5LjIyLDcuNDc1LDE2LjY5NiwxNi42OTYsMTYuNjk2aDExNy42MDZjLTEyLjg3OCwzMy40MjEtMzYuOTE0LDYxLjQxLTY3LjU4LDc5LjE5NEwzODQsNDc3LjU4OQ0KCWM4MC40NDItNDYuNTIzLDEyOC0xMjguMTUyLDEyOC0yMTkuNTNjMC0xMy4wMTEtMC45NTktMjIuMzEyLTIuODc3LTMyLjc4NUM1MDcuNjY1LDIxNy4zMTcsNTAwLjc1NywyMTEuNDg5LDQ5Mi42NjgsMjExLjQ4OXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxMkIzNDc7IiBkPSJNMjU2LDQxMS44MjZjLTU3LjU1NCwwLTEwNy43OTgtMzEuNDQ2LTEzNC43ODMtNzcuOTc5bC04Ni44MDYsNTAuMDM0DQoJQzc4LjU4Niw0NjAuNDQzLDE2MS4zNCw1MTIsMjU2LDUxMmM0Ni40MzcsMCw5MC4yNTQtMTIuNTAzLDEyOC0zNC4yOTJ2LTAuMTE5bC01MC4xNDctODYuODENCglDMzEwLjkxNSw0MDQuMDgzLDI4NC4zNzEsNDExLjgyNiwyNTYsNDExLjgyNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwRjk5M0U7IiBkPSJNMzg0LDQ3Ny43MDh2LTAuMTE5bC01MC4xNDctODYuODFjLTIyLjkzOCwxMy4zMDMtNDkuNDgsMjEuMDQ3LTc3Ljg1MywyMS4wNDdWNTEyDQoJQzMwMi40MzcsNTEyLDM0Ni4yNTYsNDk5LjQ5NywzODQsNDc3LjcwOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQ1MDA7IiBkPSJNMTAwLjE3NCwyNTZjMC0yOC4zNjksNy43NDItNTQuOTEsMjEuMDQzLTc3Ljg0N2wtODYuODA2LTUwLjAzNEMxMi41MDIsMTY1Ljc0NiwwLDIwOS40NDQsMCwyNTYNCglzMTIuNTAyLDkwLjI1NCwzNC40MTEsMTI3Ljg4MWw4Ni44MDYtNTAuMDM0QzEwNy45MTYsMzEwLjkxLDEwMC4xNzQsMjg0LjM2OSwxMDAuMTc0LDI1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCMjY7IiBkPSJNMjU2LDEwMC4xNzRjMzcuNTMxLDAsNzIuMDA1LDEzLjMzNiw5OC45MzIsMzUuNTE5YzYuNjQzLDUuNDcyLDE2LjI5OCw1LjA3NywyMi4zODMtMS4wMDgNCglsNDcuMjctNDcuMjdjNi45MDQtNi45MDQsNi40MTItMTguMjA1LTAuOTYzLTI0LjYwM0MzNzguNTA3LDIzLjY3MywzMTkuODA3LDAsMjU2LDBDMTYxLjM0LDAsNzguNTg2LDUxLjU1NywzNC40MTEsMTI4LjExOQ0KCWw4Ni44MDYsNTAuMDM0QzE0OC4yMDIsMTMxLjYyLDE5OC40NDYsMTAwLjE3NCwyNTYsMTAwLjE3NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEOTNGMjE7IiBkPSJNMzU0LjkzMiwxMzUuNjkzYzYuNjQzLDUuNDcyLDE2LjI5OSw1LjA3NywyMi4zODMtMS4wMDhsNDcuMjctNDcuMjcNCgljNi45MDMtNi45MDQsNi40MTEtMTguMjA1LTAuOTYzLTI0LjYwM0MzNzguNTA3LDIzLjY3MiwzMTkuODA3LDAsMjU2LDB2MTAwLjE3NEMyOTMuNTMsMTAwLjE3NCwzMjguMDA1LDExMy41MSwzNTQuOTMyLDEzNS42OTN6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
          </p>
          <div class="row my-3 d-flex justify-content-center">
            <mdb-btn  type="button"
                      color="white"
                      rounded
                      class="mr-md-3 z-depth-1a">
                      
            <mdb-icon fab icon="facebook" 
                      class="blue-text text-center"/>
            </mdb-btn>

            <mdb-btn
              type="button"
              color="white"
              rounded
              class="mr-md-3 z-depth-1a"
              ><mdb-icon fab icon="twitter" class="blue-text"
            /></mdb-btn>
            <mdb-btn type="button" color="white" rounded class="z-depth-1a">
            <mdb-icon fab icon="google-plus" class="blue-text"/>
            </mdb-btn>
          </div>
        </div>
        <hr />
        <div>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-center">
              ¿Not a member?&nbsp;<a href=" SignUp" class="blue-text ml-1">
                Sign Up</a
              >
            </p>
          </mdb-modal-footer>
        </div>
      </div>
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

div.image {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K)}
/* .container-fluid {
  background-image: url("../../public/muroblur.png");
  background-size: cover;
} */

.social img {
  width: 40px;
  height: 30px;
  padding: 0 5px;
}
a {
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
  border-bottom: 2px solid #070A2B;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

.form-floating {
  border-radius: none !important;
}
.form-control:focus {
  border-bottom: 2px solid #070A2B;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

#loginbutton {
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
</style>