<template>
  <section class="content-section" id="about">
    <div class="container">
      <div class="row">
        <div class="content-section-heading text-center">
          <h1 class="mb-5">Sobre Nosotros</h1>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Marianna Maldonado Pérez</div>
                <a
                  href="https://www.linkedin.com/in/programador-mariana-maldonado/"
                  ><i class="fab fa-linkedin fa-2x"></i
                ></a>
                <a href="https://github.com/mariannamaldonado">
                  &nbsp; <i class="fab fa-github fa-2x"></i
                ></a>
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
                <a href="https://www.linkedin.com/in/andreeacirlan/"
                  ><i class="fab fa-linkedin fa-2x"></i
                ></a>
                <a href="https://github.com/AndreeaCCA">
                  &nbsp; <i class="fab fa-github fa-2x"></i
                ></a>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" alt="" />
          </a>
        </div>
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Jeampierre Nuñez Sánchez</div>
                <a
                  href="https://www.linkedin.com/in/jeanpierrer-nu%C3%B1ez-sanchez-34853b129/"
                  ><i class="fab fa-linkedin fa-2x"></i
                ></a>
                <a href="https://github.com/JeanpierPol">
                  &nbsp; <i class="fab fa-github fa-2x"></i
                ></a>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" alt="" />
          </a>
        </div>
        <div class="col-lg-6">
          <a class="about-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2 name">Anny Sánchez Rodríguez</div>
                <a href="www.linkedin.com/in/anny-karolina-sánchez-rdríguez"
                  ><i class="fab fa-linkedin fa-2x"></i
                ></a>
                <a href="https://github.com/Annysanz">
                  &nbsp; <i class="fab fa-github fa-2x"></i
                ></a>
              </div>
            </div>
            <img class="img-fluid" v-bind:src="image4" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="content-section text-white">
    <div class="container text-center">
      <h2 class="mb-4">Developers del proyecto Lemur Des Je T`aime.</h2>
      <a href="#!" class="btn btn-xl btn-light mr-4"></a>
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: {
    Footer,
  },

  setup() {
    return {
      image4: "/anny.jpg",
    };
  },
};
</script>

<style lang="scss">
.h1 {
  font-family: "Catamaran", sans-serif;
  font-weight: 700;
}
.mb-5 {
  margin-bottom: 3rem !important;
  font-family: "Catamaran", sans-serif;
  font-weight: 700;
  padding-top: 1em;
}
.name {
  color: black;
  text-align: center;
}
.about-item {
  display: block;
  position: relative;
  overflow: hidden;
  max-width: 430px;
  margin: auto auto 1rem;
  .caption {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: fade-out(rgb(151, 142, 142), 0.8);
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
        font-size: 0.9rem;
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
        background-color: fade-out(#949496, 0.1);
        clip-path: inset(2rem);
      }
    }
  }
}
a:hover {
  color: #1f4b8d;
}
a {
  color: #1f4b8d;
  -webkit-text-decoration: auto;
  text-decoration: auto;
}
</style>