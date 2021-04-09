<template>
  <!-- Contact Us Section -->
  <section class="Material-contact-section section-padding section-dark">
    <div class="container">
      <!-- Section Titile -->
      <div class="row">
        <div class="col-md-8 wow animated fadeInLeft" data-wow-delay=".2s">
          <h1 class="section-title">Me encanta saber de ti</h1>
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
            <p>Direción: Madrid-España</p>
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
          <!-- <div class="col-md-10  offset-3 p-5 bg-white rounded my-5 shadow-sm"> -->
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
              placeholder="name@ejemplo.com"
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
            />
            <label for="floatingInput"
              ><i class="fas fa-sticky-note"></i>&nbsp;Mensaje</label
            >
          </div>
          <!-- </div> -->
          <!-- Form Submit -->
          <div class="form-group d-flex">
            <button
              type="button"
              id="loginbutton"
              class="btn btn-danger btn-lg"
            >
              ENVIAR MENSAJE
            </button>
          </div>
        </div>
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

.container {
  padding: 60px;
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
  border-bottom: 2px solid #070a2b;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}

#loginbutton {
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
  background-image: linear-gradient(to right, #9c0303, #03002d);
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