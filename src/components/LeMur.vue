<template>
  <!-- <div class="col-sm" id="vertical"></div> -->
  <!-- <h1>{{ msg }}</h1> -->
  <div id="container">
    <div class="environment" >
      <div id="item1" class="section">
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate translate" :src="image" />
        <img class="gap imgTranslate translate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
      </div>
      <div id="item2" class="section">
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="gap imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
      </div>
      <div id="item3" class="section">
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="gap imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
        <img class="imgTranslate" :src="image" />
      </div>
      <div id="item4" class="section">
        <div id="sms"><MessageBase /></div>
        <!-- <canvas
          class="lienzo"
          id="lienzo"
          width="2300"
          height="750"
          @click="getSelection"
          @mouseup="getCenter"
          @mousemove="oMousePos"
        ></canvas> -->
      </div>
      <!-- <div class="boxCoordinates">
        <div id="coordinates">
          <h3>{{ x }} - {{ y }}</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import MessageBase from "@/components/MessageBase.vue";
import { ref, onMounted } from "vue";
export default {
  name: "LeMur",
  props: {
    msg: String,
  },
  components: {
    MessageBase,
  },
  setup() {
    // var canvas = null;
    // let x = ref(0);
    // let y = ref(0);
    // let current_section = 1;

    // onMounted(() => {
    //   var c = document.getElementById("lienzo");
    //   canvas = c.getContext("2d");
    //   canvas.width = Window.innerWidth;
    //   canvas.height = Window.innerWidth;
    // });

    // function oMousePos(e) {
    //   x.value = e.offsetX;
    //   y.value = e.offsetY;
    // }

    //script transition
    onMounted(() => {
      let nav = document.querySelectorAll("a");
      nav.forEach((item) => {
        item.addEventListener(
          "click",

          function getSelection() {
            if (this.id == 1) {
              $("#item1").css("transform", "translate3d( 0, 0, 0px)");
              $("#item1").css("opacity", "1");

              $("#item2").css("transform", "translate3d( 0, 0, -2000px)");
              $("#item2").css("opacity", "0.2");

              $("#item3").css("transform", "translate3d( 0, 0, -4000px)");
              $("#item3").css("opacity", "0.2");

              $("#item4").css("transform", "translate3d( 0, 0, -6000px)");
              $("#item4").css("opacity", "0.2");
            }
            if (this.id == 2) {
              $("#item1").css("transform", "translate3d( 0, 0, 2000px)");
              $("#item1").css("opacity", "1");

              $("#item2").css("transform", "translate3d( 0, 0, 0px)");
              $("#item2").css("opacity", "1");

              $("#item3").css("transform", "translate3d( 0, 0, -2000px)");
              $("#item3").css("opacity", "0.2");

              $("#item4").css("transform", "translate3d( 0, 0, -4000px)");
              $("#item4").css("opacity", "0.2");
            }
            if (this.id == 3) {
              $("#item1").css("transform", "translate3d( 0, 0, 4000px)");
              $("#item1").css("opacity", "0.2");

              $("#item2").css("transform", "translate3d( 0, 0, 2000px)");
              $("#item2").css("opacity", "0.2");

              $("#item3").css("transform", "translate3d( 0, 0, 0px)");
              $("#item3").css("opacity", "1");

              $("#item4").css("transform", "translate3d( 0, 0, -2000px)");
              $("#item4").css("opacity", "0.2");
            }
            if (this.id == 4) {
              $("#item1").css("transform", "translate3d( 0, 0, 6000px)");
              $("#item1").css("opacity", "1");

              $("#item2").css("transform", "translate3d( 0, 0, 4000px)");
              $("#item2").css("opacity", "0.2");

              $("#item3").css("transform", "translate3d( 0, 0, 2000px)");
              $("#item3").css("opacity", "0.2");

              $("#item4").css("transform", "translate3d( 0, 0, 0px)");
              $("#item4").css("opacity", "1");
            }
          }
        );
      });
    });

    return {
      // getRandomCenter,
      // canvas,
      // x,
      // y,
      // oMousePos,
      // current_section,
      image: "/muro.jpg",
    };
  },
};
</script>

<style  scoped lang="scss">
#sms {
  color: brown;
  text-align: center;
  z-index: 999;
}
#container button {
  display: block;
  position: relative;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
}
.imgTranslate {
  padding: 7px;
  width: 170px;
  height: 70px;
}
.src {
  height: 70px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
h1 {
  text-align: center;
}
//transicion Tunel
*,
*::before,
*::after {
  box-sizing: border-box;
}
.environment {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 48% 52%;
}
.section {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100% auto auto;
  transition: transform 1s, opacity 1s;
}
.gap {
  grid-column: 3/4;
}
.nav {
  position: absolute;
  bottom: 0;
  z-index: 10;
  padding: 10px;
}
.nav a {
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
  color: #940909;
  text-align: center;
}
.nav a + a::before {
  margin-left: -11px;
  content: "";
  height: 15px;
  width: 1px;
}
#item1 {
  z-index: 1;
}
#item2 {
  opacity: 0.2;
  z-index: 3;
  transform: translate3d(0, 0, -1000px);
}
#item3 {
  opacity: 0.2;
  z-index: 2;
  transform: translate3d(0, 0, -2000px);
}
#item4 {
  top: 0;
  width: 100%;
  opacity: -0.1;
  transform: translate3d(0, 0, -4000px);
  background-image: url('../assets/img/subtle_carbon.png');
}
@media only screen and (max-width: 690px) {
  .section {
    display: block;
  }
  body {
    overflow: scroll;
  }
  .environment {
    align-items: flex-start;
    perspective-origin: 48% 0;
  }
  .nav {
    bottom: 0;
  }
}
</style>
