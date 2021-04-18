<template>
  <section class="content-section" id="about">
    <div class="container">
      <div class="row">
      <div class="content-section-heading text-center">
        <h1 class="mb-5">Equipo de trabajo</h1>
      </div>
      </div>

      <div class="row no-gutters">
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Marianna Maldonado</div>
                <p class="mb-0">
                  Soy una persona enérgica, responsable, tenaz en todos los
                  proyectos que me propongo. Trabajando con profesionalidad y
                  responsabilidad junto a otras personas o de manera
                  independiente.
                </p>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" alt="" />
          </a>
        </div>
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Andreea Cirlan</div>
                <p class="mb-0">
                  Soy una persona enérgica, responsable, tenaz en todos los
                  proyectos que me propongo. Trabajando con profesionalidad y
                  responsabilidad junto a otras personas o de manera
                  independiente.
                </p>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" alt="" />
          </a>
        </div>
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Jeampierre Nuñez</div>
                <p class="mb-0">
                  Soy una persona enérgica, responsable, tenaz en todos los
                  proyectos que me propongo. Trabajando con profesionalidad y
                  responsabilidad junto a otras personas o de manera
                  independiente.
                </p>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" alt="" />
          </a>
        </div>
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Anny Sánchez</div>
                <p class="mb-0">
                 <b> Soy una persona enérgica, tenaz en todos los
                  proyectos que me propongo. Trabajando con profesionalidad y
                  responsabilidad junto a otras personas o de manera
                  independiente.</b>
                </p>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" />
          </a>
        </div>
      </div>
    </div>
  </section>
   <section class="content-section  text-white">
    <div class="container text-center">
      <!-- <h2 class="mb-4"> 311 formas de decir "Te amo" en casi 250 idiomas diferentes. </h2> -->
      <a href="#!" class="btn btn-xl btn-light mr-4"></a> 

    </div>
  </section>
   <Footer />
</template>

<script>
import { ref } from "vue";
import Footer from '@/components/Footer'
export default {
  name: "About",
  components: {
    Footer
  },

  setup() {
    let show = true

    return {
      show,
      image4: "/anny.jpg",
    };
  },
};
</script>

<style lang="scss">
.about-item {
  display: block;
  position: relative;
  overflow: hidden;
  max-width: 530px;
  margin: auto auto 1rem;
  .caption {
    display: flex;
    height: 100%;
    width: 100%;
    //background-color: fade-out(gray-900, 0.8);
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    .caption-content {
      color: rgb(0, 0, 0);
      margin: auto 2rem 2rem;
      h1 {
        font-size: 0.8rem;
        text-transform: uppercase;
            margin-top: revert;
      }
      p {
        height: 60px;
        font-weight: 300;
        font-size: .9rem;
      }
    }
  }
  @media (min-width: 992px) {
    max-width: none;
    margin: 0;
    .caption {
      transition: clip-path 0.25s ease-out, background-color 0.7s;
      clip-path: inset(0px);
      .caption-content {
        transition: opacity 0.25s;
        margin-left: 5rem;
        margin-right: 5rem;
        margin-bottom: 5rem;
      }
    }
    img {
      transition: clip-path 0.25s ease-out;
      clip-path: inset(-1px);
    }
    &:hover {
      img {
        clip-path: inset(2rem);
      }
      .caption {
        //background-color: fade-out($primary, 0.1);
        clip-path: inset(2rem);
      }
    }
  }
}

//slide-fade dos primeras
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>