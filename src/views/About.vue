<template>
  <div class="container-fluid justify-content-center">
    <div class="col col-6 offset-3">
      <h2>About Us</h2>
      <div class="row text-white">
        <div class="col-lg-10">
          <div @click="show = !show" class="col-md-12 bg-white p-5 rounded my-5 shadow-sm">
            <img v-bind:src="image" class="photo" />
            <h3>NOSOTROS</h3>
            <transition name="slide-fade">
              
            <p  v-if="show" class=" nosotros lead font-italic mb-0 text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            </p>
             </transition>   
          </div>
          <div @click="show = !show" class="col-md-12 bg-white p-5 rounded my-5 shadow-sm">
            <img v-bind:src="image" class="photo" />
            <h3>NOSOTROS</h3>
            <transition name="slide-fade">
              
            <p  v-if="show" class=" nosotros lead font-italic mb-0 text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            </p>
             </transition>   
          </div>
          <div @click="show = !show" class="col-md-12 bg-white p-5 rounded my-5 shadow-sm">
            <img v-bind:src="image" class="photo" />
            <h3>NOSOTROS</h3>
            <transition name="bounce">
              
            <p  v-if="show" class=" nosotros lead font-italic mb-0 text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            </p>
             </transition>   
          </div>
          <div @click="show = !show" class="col-md-12 bg-white p-5 rounded my-5 shadow-sm">
            <img v-bind:src="image" class="photo" />
            <h3>NOSOTROS</h3>
            <transition name="bounce">
              
            <p  v-if="show" class=" nosotros lead font-italic mb-0 text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            </p>
             </transition>   
          </div>
        </div>    
      </div>
  
      <mdb-modal-footer class="mx-5 pt-3 mb-1"> </mdb-modal-footer>
    </div>
  </div>
</template>

<script>
import { ref} from "vue";

export default {
  name: "About",
  components: {},

  setup() {
let show = ref("");
      show: true

    return {
      show,
      image: "/avatar1.jpg"
    };
  },
};
</script>

<style lang="scss" scoped>

h3{
  color: blue;
}
.nosotros{
background: rgb(194, 194, 247);
color: rgb(226, 226, 226);
}

.photo{
  width: 70px;
  height: 70px;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .9s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
//slide-fade dos primeras
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>