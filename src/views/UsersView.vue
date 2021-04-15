<template>
  <div class="prueba">
      <div class="formulario">
        <h1>UsersManager</h1>
            <div>Nombre: <input v-model="firstname"></div>
            <div>Apellidos: <input v-model="lastname"></div>
            <div>Email: <input v-model="email"></div>
            <div>Password: <input v-model="password"></div>
            <button @click="enviar" class="btn btn-primary">Enviar</button>
      </div>
    <hr>
    <h5>** Listado de usuarios **</h5>    
    <!-- esto es una tabla con el listado de usuarios-->    
    <div style="text-align:left;">
        <div v-for="(usuario,ind) in usuarios" :key="ind">
            <a @click="eliminar(usuario._id)" class="eliminar" >
                <i class="bi bi-person-bounding-box"></i>        
            </a> | 
            {{usuario.firstname}} 
            {{usuario.lastname}} | 
            {{usuario.email}} |
            <PasswordHide :password="usuario.password"/>
        </div>
    </div>
  </div>
</template>
<script>
import PasswordHide from '@/components/PasswordHide'
import { ref, reactive, computed, onMounted } from 'vue'
        
export default {
    name:'UsersView',
    components:{
        PasswordHide
    },
    props:{

    },
    setup(){
        let firstname=ref("")
        let lastname=ref("")
        let email=ref("")
        let password=ref("")
        let usuarios=reactive([])

        onMounted(()=> {
            listar()
        })

        function eliminar(idSeleccionado){
            fetch('http://localhost:8081/api/eliminar',{
                method:'POST',
                body: JSON.stringify({
                    id: idSeleccionado
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

        function listar(){
            fetch('http://localhost:8081/api/listar')
                .then(resp=>resp.json())
                .then(datos=>{
                    usuarios.splice(0)
                    datos.forEach(usuario => {
                        usuarios.push(usuario)
                    })
                })            
        }

        function enviar(){
            fetch('http://localhost:8081/api/guardar',{
                method: 'POST',
                body: JSON.stringify({
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    password: password.value
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

        return {
            firstname,lastname,email,password,
            enviar,
            usuarios,
            eliminar
        }
    }
}
</script>

<style lang="scss" scoped>
    a.eliminar{
        color:red;
        svg{
            width:30px;
            height:30px;
        }
    }
    input,button{
        margin:5px;
    }
    .formulario{
        max-width:500px;
        display:inline-grid;
        text-align: right;
    }
</style>