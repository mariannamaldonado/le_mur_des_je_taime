<template>
  <!-- Showcase -->
    <section class="section-a">
      <div class="container" >
        <div>
         
          <h1>
            Le mur des
          </h1>
             <div class="medium-tiempos center">
            <span class="bright-red suisse-50">Je T’Aime</span><br></div>
          <img src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e156bcd9ba5cbffdd421c8a_underline-red.png" width="137" alt="" class="underline-right-2">
           
            
          <p>
            hemos recreado la obra parisina, obra imaginada por Frédéric Baron y Claire Kito, 
            es un lugar ineludible para los enamorados de todo el mundo que vienen a París, 
            capital del romanticismo. El muro, construido sobre una superficie de 40 m², 
            está compuesto por 612 azulejos de lava esmaltada, sobre los cuales florecen 311 
            « te quiero » en 250 idiomas. Las chispas de color rojo sobre el fresco simbolizan 
            los trozos de un corazón roto, símbolo de una humanidad que se desgarra y que el muro 
            trata de reunir.
          </p>
        </div>
        <img src="@/assets/img/header.png" alt="" />
      </div>
    </section>
 
    <!-- Large Text -->
    <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h3 class="text-2"></h3>
          <h2 class="text-5 mt-1">¿En cuántos idiomas puedes decir 'te amo'?</h2> 
         
         </div>
      </div>
    </section>
        
    <!-- Gallery -->
    <section class="section-c">
      <div class="gallery">
        <a href="#" class="big">
          <img src="@/assets/img/4.png" alt="" />
        </a>
        <a href="#" class="big">
          <img src="@/assets/img/1.gif" alt="" />
        </a>
        <!-- <a href="#" class="big"
          ><img src="@/assets/img/banner17.jpg" alt="" /></a> -->

        <a href="#" class="big"
          ><img src="@/assets/img/5.png" alt="" /></a>

        <!-- <a href="#" class="big">
          <img src="@/assets/img/banner18.jpg" alt=""
        /></a>
        <a href="#" class="big"
          ><img src="@/assets/img/5.png" alt=""
        /></a> -->
      </div>
    </section> 

 <!-- Call to Action -->
  <section class="content-section bg-primary text-white">
    <div class="container text-center">
      <h2 class="mb-4"> 311 formas de decir "Te amo" en casi 250 idiomas diferentes. </h2>
      <a href="#!" class="btn btn-xl btn-light mr-4">Envia un te quiero!</a>

    </div>
  </section>

    <!-- Footer -->
  <Footer />
</template>
<script>
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>

<style lang="css" scoped>


.suisse-50.bright-red {
    line-height: 50px;
}
.bright-red.suisse-50 {
    font-size: 50px;
}
.suisse-50 {
    font-family: 'Suisseintl webm', sans-serif;
    font-size: 51px;
    letter-spacing: -0.7px;
}

.bright-red {
    color: #ec3944;
}

.underline-right-2 {
    position: relative;
    left: 62px;
    top: -7px;
}
img {
    display: inline-block;
    max-width: 100%;
}

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
}
img {
    border: 0;
}
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
  font-size: 3rem;
  color: var(--primary-color);
}
.section-a p {
  margin: 1rem 0;
}
/* .callout */
.callout {
    padding: 15rem 0;
    background: linear-gradient(90deg,
    rgba(255,255,255,.1) 0,rgba(255,255,255,.1) 100%);
    /* url('../assets/img/banner12.jpg'); */
     background-color: #1f4b8d;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.callout h2 {
    font-size: 3.5rem;
    font-weight: 700;
    display: block;
    max-width: 30rem;
}

.ml-auto, .mx-auto {
    margin-left: auto!important;
}

.mr-auto, .mx-auto {
    margin-right: auto!important;
}

.mb-5, .my-5 {
    margin-bottom: 3rem!important;
}
.section-b {
  position: relative;
  /* background: url('../assets/img/banner12.jpg') no-repeat bottom center/cover; */
   background-color: #b40e0e;
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
   grid-row-start: 1;
  grid-row-end: 3; 
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
}

.bg-dark {
    background-color: #212529!important;
}

/* call to action */
.bg-primary {
    background-color: #1f4b8d!important;
}
.content-section {
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
}

.text-white {
    color: #fff!important;
}

.btn.btn-xl.btn-light {
    max-width: 310px;
    margin-top: 45px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #fff;
    font-family: 'Suisseintl webm', sans-serif;
    color: #1b212c;
    font-weight: 500;
    letter-spacing: 0.2px;
}

</style>
