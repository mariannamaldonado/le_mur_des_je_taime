<template> 
   <section class="section-a">
      <div class="container">
        <div>
    <div class="section" data-anchor="contact">
      <div class="content wow fadeInDown" data-wow-delay="0.2s">
        <h1>CONTACTANOS</h1>
        <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
        <br>
        <div class="contact-form">

          <div id="form-messages"></div>
          <form id="ajax-contact" method="post" role="form" action="contact.php" data-toggle="validator">
            <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="0.6s">
              <input type="text" class="form-control" id="name" name="name" placeholder="NOMBRE" data-error="Field can't be blank!" required>
              <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group has-feedback wow fadeInRight" data-wow-delay="0.8s">
              <input type="email" class="form-control" id="email" name="email" placeholder="EMAIL" data-error="Field can't be blank!" required>
              <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="1s">
              <textarea data-minlength="10" class="form-control" id="message" name="message" placeholder="MENSAJE" data-error="Minimum of 10 characters" required></textarea>
              <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
              <div class="help-block with-errors"></div>
            </div>

            <div class="hidden">
              <input type="text" class="form-control" id="human" name="human" placeholder="">
            </div>
            <div class="wow fadeInUp" data-wow-delay="1s">
              <button type="submit" id="submit" name="submit" class="btn btn-lg">ENVIAR</button>
            </div>
          </form>
          <br>
        </div>
      </div>
    </div>
    <!-- end section -->
    </div>
     <img src="@/assets/img/banner5.jpg" alt="" />
    
    </div>
    </section>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  setup() {
    return {
        
    }
  },
}
</script>

<style lang="scss" scoped>


.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
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
</style>