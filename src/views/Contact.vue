<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-6 wow animated fadeInLeft text-center"
        data-wow-delay=".2s"
      >
        <h1 class="section-title">¡Nos encantaria saber de ti!</h1>
      </div>
      <div
        class="col-md-6 wow animated fadeInLeft text-center"
        data-wow-delay=".2s"
      >
        <img v-bind:src="image" class="mailbox" style="margin:-50px 0"/>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft p-3"
        data-wow-delay=".2s"
      >
        <div class="d-flex justify-content-center">
          <p class="text-justify">
            En un mundo marcado por la violencia, y dominado por el
            individualismo, los muros al igual que las fonteras, sirven
            generalmente para dividir, separar a los pueblos y protegerse de los
            otros. El muro de los te quiero es sin embargo, un nexo de unión, un
            lugar de reconciliación, un espejo cuya imagen es el amor y la paz.
          </p>
        </div>
        <div class="find-widget">
          <p>
            Direción: Square Jehan Rictus, Place des Abbesses, 75018 Paris,
            France
          </p>
        </div>
        <div class="find-widget">
          <p><i class="fa fa-phone-square"></i> +34 123-456-789</p>
        </div>
        <div class="find-widget">
          <p><i class="fa fa-globe"></i> www.lemur.com</p>
        </div>
        <div class="find-widget">
          <p><i class="fa fa-calendar"></i> L a S: 09:30 AM - 10.30 PM</p>
        </div>
      </div>
      <!-- contacto -->
      <div class="col-md-6 wow animated fadeInRight p-3" data-wow-delay=".2s">
        <div class="form-floating mb-3">
          <input
            v-model="contactForm.name"
            type="text"
            class="form-control floatingInput"
            data-error="Por favor ingrese su nombre"
            placeholder="Nombre"
          />
          <label for="floatingInput"
            ><i class="fas fa-grin"></i>&nbsp;Nombre</label
          >
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            v-model="contactForm.email"
            class="form-control floatingInput"
            data-error="Por favor ingrese su email"
            placeholder="nombre@ejemplo.com"
          />
          <label for="floatingInput"
            ><i class="fas fa-envelope-open-text"></i>&nbsp;Email</label
          >
        </div>
        <div class="form-floating mb-3">
          <textarea
            maxlength="300"
            v-model="contactForm.message"
            class="form-control floatingInput"
            data-error="Por favor ingrese su mensaje"
            placeholder="Mensaje"
            rows="5"
          />
          <label for="floatingInput"
            ><i class="fas fa-sticky-note"></i>&nbsp;Mensaje</label
          >
        </div>
        <div class="form-group d-flex">
          <button
            @click="enviar"
            type="button"
            id="loginbutton"
            class="btn btn-danger btn-md"
          >
            ENVIAR MENSAJE
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41969.37207816585!2d2.2903112258911866!3d48.89470283996895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e44e2a227af%3A0x641930356f5c6782!2sWall%20of%20Love!5e0!3m2!1sen!2ses!4v1618173380115!5m2!1sen!2ses"
          width="100%"
          height="300px"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { reactive } from "vue";

export default {
  name: "Contact",
  components: {
    Footer,
  },

  setup() {
    let contactForm = reactive({
      email: "",
      name: "",
      message: "",
    });

    async function enviar() {
      let { data } = await axios.post(
        "http://localhost:8081/api/Contact",
        contactForm
      );

      if (data.error){
        Swal.fire({
          title: "Error!",
          text: data.error,
          icon: "error",
          confirmButtonText: "OK",
        })
      } 
      else {
        Swal.fire({
          title: "Enviado!",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          contactForm.email = "";
          contactForm.name = "";
          contactForm.message = "";
        });
      }
    }

    return {
      contactForm,
      enviar,
      image: "/buzon.gif",
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Catamaran", sans-serif;
  line-height: 1.6;
  color: #333;
  font-size: 1.1rem;
}
h1,
h2,
h3,
h4 {
  line-height: 1.3;
}
.mailbox {
  width: 158px;
  height: 158px;
  left: 1793px;
  top: 109px;
}
.container {
  padding: 60px;
  background: #fff;
  min-width: 350px;
}
textarea.form-control {
  overflow: hidden;
  height: unset;
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
  border-bottom: 2px solid #070a2b;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}
.form-floating {
  border-radius: none !important;
}
.form-control:focus {
  background: transparent;
  border-bottom: 2px solid #070a2b;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}
#loginbutton {
  color: #000011;
  background: transparent;
  white-space: nowrap;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px 40px;
  background-size: 200% auto;
  background-image: linear-gradient(
    to right,
    #cac7e2 0%,
    #03002d 70%,
    #575485 100%
  );
  transition: 0.5s;
}
#loginbutton:hover {
  white-space: nowrap;
  color: white;
  background-position: right center;
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

.text-justify {
  text-align: justify;
}
</style>