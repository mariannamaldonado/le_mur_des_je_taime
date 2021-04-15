<template>
  <!-- Contact Us Section -->
  <section class="Material-contact-section section-padding section-dark">
    <div class="container">
      <!-- Section Titile -->
      <div class="row">
        <div class="col-md-8 wow animated fadeInLeft" data-wow-delay=".2s">
          <h1 class="section-title">¡Me encanta saber de ti!</h1>
        </div>
        <div class="col-md-4 wow animated fadeInLeft" data-wow-delay=".2s">
          <img v-bind:src="image" class="mailbox" />
        </div>
      </div>
      <div class="row">
        <!-- Section Titile -->
        <div
          class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
          data-wow-delay=".2s"
        >
          <p>
            En un mundo marcado por la violencia, y dominado por el
            individualismo, los muros al igual que las fonteras, sirven
            generalmente para dividir, separar a los pueblos y protegerse de los
            otros. El muro de los te quiero es sin embargo, un nexo de unión, un
            lugar de reconciliación, un espejo cuya imagen es el amor y la paz.
          </p>
          <div class="find-widget">
            <p>
              Direción: Square Jehan Rictus, Place des Abbesses, 75018 Paris,
              France
            </p>
          </div>
          <div class="find-widget">
            <p>Teléfono: +34 123-456-789</p>
          </div>
          <div class="find-widget">
            <p>Sitio Web: www.lemur.com</p>
          </div>
          <div class="find-widget">
            <p>Horario: L a S: 09:30 AM - 10.30 PM</p>
          </div>
        </div>
        <!-- contact -->
        <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
          <div class="form-floating mb-3">
            <input
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
              type="text"
              class="form-control floatingInput"
              data-error="Por favor ingrese su mensaje"
              placeholder="Mensaje"
              rows="5"
            />
            <label for="floatingInput"
              ><i class="fas fa-sticky-note"></i>&nbsp;Mensaje</label
            >
          </div>
          <!-- Form Submit -->
          <div class="form-group d-flex">
            <button
              type="button"
              id="loginbutton"
              class="btn btn-danger btn-lg"
            >
              ENVIAR MENSAJE
              <!-- <b> ENVIAR MENSAJE</b> -->
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
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
  </section>
</template>

<script>
export default {
  name: "Contact",
  components: {},

  setup() {
    return {
      image: "/buzon.gif",
    };
  },
};
</script>

<style lang="scss" scoped>
.mailbox {
  width: 158px;
  height: 158px;
  left: 1793px;
  top: 109px;
}
// fondo blanco, para el contacto que si queda la imagen detras no pasa nada, porque el
// fondo transparente chiva el gif...
// tamaño del div a 350px, en las otras vistas es container-fluid a 400px...
// hay un pequeño margen de diferencia de un lado a otro no queda centrado completamente...
// solo esta vista tiene el estilo del boton en el div del (ENVIAR MENSAJE) esta la opcion
// normal y en negrita, que una me parece muy fina y la otra muy gruesa, mira las dos a ver que tal.
// textarea no he podido agrandarlo y aunque quite el scrol sube el texto hacia arriba 
.container {
  padding: 60px;
  background: #fff;
  min-width: 350px;
}

textarea{
  overflow:hidden;
  
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
</style>