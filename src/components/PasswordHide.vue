<template>
    <i :class="ojito" @mousedown="mostrarPassword" @mouseup="ocultarPassword"></i>
    &nbsp;<span v-text="pass"></span> 
</template>

<script>
import { ref,reactive } from 'vue'
export default {
    name: 'PasswordHide',
    props:{
        password:String
    },
    setup(props){
        let ojito=reactive({
            'bi-eye-fill':true,
            'bi-eye-slash-fill':false
        })
        let pass=ref('*'.repeat(props.password.length))
        
        function mostrarPassword(){
            pass.value=props.password
            ojito['bi-eye-fill']=false
            ojito['bi-eye-slash-fill']=true
        }

        function ocultarPassword(){
            pass.value='*'.repeat(props.password.length)
            ojito['bi-eye-fill']=true
            ojito['bi-eye-slash-fill']=false
        }

        return {
            pass,
            ojito,
            mostrarPassword,ocultarPassword
        }
    }
}
</script>

<style>

    i {
        cursor: pointer;
    }
    .bi-eye-fill{
        color:rgb(0, 0, 0);
    }
    .bi-eye-slash-fill{
        color:red;
    }
</style>