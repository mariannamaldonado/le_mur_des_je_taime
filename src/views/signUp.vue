<template> 
  <div>
    <h1>Crear nueva cuenta</h1>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "SignUp",
  components: {},

  setup() {
    let firstname = ref("");
    let lastname = ref("");
    let username = ref("");
    let email = ref("");
    let password = ref("");
    let usuarios = reactive([]);

    onMounted(() => {
       listar()
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
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => listar())
        .catch((error) => console.log(error));
      //alert("Usuario ya esta registrado");
    }

    return {
      firstname,
      lastname,
      email,
      username,
      password,
      enviar,
      usuarios,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>