<template>
  <!-- Showcase -->
    <section class="section-a">
      <div class="container">
        <div>
          <h1>Le mur des Je T’Aime – 
            <br>
            El muro de los “Te quiero”.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          <a href="#" class="btn">Read More</a>
        </div>
        <img src="@/assets/img/banner5.jpg" alt="" />
      </div>
    </section>

    <!-- Large Text -->
    <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h3 class="text-2">Le Mur</h3>
          <h2 class="text-5 mt-1">¿En cuántos idiomas puedes decir 'te amo'?</h2>
          <!-- <p class="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro ducimus voluptate
            laborum nostrum iure.
          </p> -->
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="section-c">
      <div class="gallery">
        <a href="#" class="big">
          <img src="@/assets/img/banner12.jpg" alt="" />
        </a>
        <a href="#" class="big">
          <img src="@/assets/img/banner21.jpg" alt="" />
        </a>
        <a href="#" class="big"
          ><img src="@/assets/img/5.png" alt="" /></a>

        <a href="#" class="big"
          ><img src="@/assets/img/4.png" alt="" /></a>

        <a href="#" class="big">
          <img src="@/assets/img/5.png" alt=""
        /></a>
        <a href="#" class="big"
          ><img src="@/assets/img/banner10.jpg" alt=""
        /></a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="section-footer py-4 bg-dark">
      <div class="container">
        <div>  <h2 class="text-2 mb-1"></h2>
        
          <a href="http://twitter.com">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3></h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="http://localhost:8082/about">Nosotros</a></li>
            <li><a href="http://localhost:8082/contacto">Contacto</a></li>
            <li><a href="#">Políticas de privacidad</a></li>
          </ul>
        </div>
        <div>
          
          <!-- <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul> -->
        </div>
        
        <div>
          <h3>Suscribirse</h3>
          <!-- <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> -->
          <form
            class="mt-1"
            name="email-form"
            method="POST"
            data-netlify="true"
          >
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  class="form-control"
                  placeholder="E-mail"/></span
              ><button type="submit" value="Submit" class="form-control submit">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="css" scoped>

:root {
  --primary-color: #333;
  --secondary-color: #444;
  --overlay-color: rgba(0, 0, 0, 0.7);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Catamaran', sans-serif;
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

a {
  color: #444;
  text-decoration: none;
}

ul {
  list-style: none;
}



.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}

.navbar {
  font-size: 1.2rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

.navbar .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}

.navbar .logo {
  font-size: 2rem;
}

.navbar ul {
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar a {
  padding: 0 1rem;
}

.navbar a:hover {
  color: #555;
}

.section-a {
  margin: 2rem 0;
}

.section-a .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;
}

.section-a h1 {
  font-size: 4rem;
  color: var(--primary-color);
}

.section-a p {
  margin: 1rem 0;
}

.section-b {
  position: relative;
  background: url('../assets/img/banner9.jpg') no-repeat bottom center/cover;
  height: 600px;
}

.section-b-inner {
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  max-width: 860px;
  padding: 5rem 0;
}

.section-b-inner h3 {
  font-size: 2rem;
}

.section-b-inner h2 {
  font-size: 5rem;
  margin-top: 1rem;
}

.section-b-inner p {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.section-c .gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.section-c .gallery a:first-child {
  /* grid-row-start: 1;
  grid-row-end: 3; */
  grid-row: 1/3;
  grid-column: 1/3;
}

.section-c .gallery a:nth-child(2) {
  grid-column-start: 3;
  grid-column-end: 5;
}

.section-c .gallery img,
.section-c .gallery a {
  width: 100%;
  height: 100%;
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

/* // .form-control-wrap {
// 	position: relative;
// 	display: inline-block;
// 	width: 100%;
// } */

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

@media (max-width: 700px) {
  .section-a .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-a .container div:first-child {
    order: 2;
  }

  .section-a .container div:nth-child(2) {
    order: -1;
  }

  .section-a img {
    width: 80%;
    margin: auto;
  }

  .section-c .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .section-c .gallery a:first-child {
    grid-row: 1/1;
    grid-column: 1/1;
  }

  .section-c .gallery a:nth-child(2) {
    grid-column: 2/4;
    grid-row: 2/2;
  }

  .section-c .gallery a:last-child {
    display: none;
  }

  .section-footer {
    padding: 2rem 0;
  }
  .section-footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-footer div:nth-child(2),
  .section-footer div:nth-child(3) {
    display: none;
  }
}


</style>