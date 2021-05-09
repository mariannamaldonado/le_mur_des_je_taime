<template>
  <footer class="section-footer py-4 bg-dark">
    <div class="container">
      <div>
        <h2 class="text-2 mb-1"></h2>
        <router-link to="/">Inicio</router-link>  <br />
        <router-link to="/about">Nosotros</router-link> <br />
        <router-link to="/Contact">Contacto</router-link><br />
       <!--  <a href="#">Políticas de privacidad</a> <br /> -->
      </div>
    </div>
    <div class="copyright d-flex flex-wrap justify-content-between">
      &copy; Hecho con &nbsp;
      <i class="fa fa-heart heart"></i>&nbsp; por final project.
      &nbsp;
      <a
        href="https://github.com/mariannamaldonado/le_mur_des_je_taime"
        target="_blank"
        ><i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style>

.heart {
  color: #1f4b8d;
}
.section-footer {
  background: var(--primary-color);
  color: #fff;
  padding: 4rem 0;
}
.section-footer .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.section-footer h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.section-footer h3 {
  margin-bottom: 0.7rem;
}
.section-footer a {
  line-height: 1.9;
  color: #ccc;
}
.section-footer a > i {
  color: #1f4b8d;
  margin-right: 0.5rem;
}
.email-form {
  width: 100%;
  display: inline-block;
  background-color: #1f4b8d;
  position: relative;
  border-radius: 20px;
  line-height: 0;
  margin-top: 1rem;
}
.form-control-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
}
.email-form .form-control {
  display: inline-block;
  border: 0;
  outline: 0;
  font-size: 1rem;
  color: #ddd;
  background-color: transparent;
  font-family: inherit;
  margin: 0;
  padding: 0 3rem 0 1.5rem;
  width: 100%;
  height: 45px;
  border-radius: 20px;
}
.email-form .submit {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background-color: #eee;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  color: #1f4b8d;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
}
.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;
}
.btn:hover {
  background: var(--secondary-color);
}
.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--overlay-color);
}
.bg-dark[data-v-fae5bece] {
  background-color: #212529 !important;
}
.section-footer[data-v-fae5bece] {
  background: var(--primary-color);
  color: #fff;
  padding: 4rem 0;
}
*[data-v-fae5bece] {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.bg-dark {
  background-color: #212529 !important;
}
.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
a {
  color: #0d6efd;
  text-decoration: auto;
}
.justify-content-between {
  justify-content: center !important;
}
</style>