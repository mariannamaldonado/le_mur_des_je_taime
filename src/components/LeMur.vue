<template>
  <div class="col-sm" id="vertical"></div>
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
        <canvas
          class="lienzo"
          id="lienzo"
          width="2300"
          height="750"
          @click="getSelection"
          @mouseup="getCenter"
          @mousemove="oMousePos"
        ></canvas>
        <div id="sms"><MessageBase /></div>
      </div>
      <div class="boxCoordinates">
        <div id="coordinates">
          <h3>{{ x }} - {{ y }}</h3>
        </div>
      </div>
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
    var canvas = null;
    let x = ref(0);
    let y = ref(0);
    let current_section = 1;

    onMounted(() => {
      var c = document.getElementById("lienzo");
      canvas = c.getContext("2d");
      canvas.width = Window.innerWidth;
      canvas.height = Window.innerWidth;
    });

    function oMousePos(e) {
      x.value = e.offsetX;
      y.value = e.offsetY;
    }

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
      canvas,
      x,
      y,
      oMousePos,
      current_section,
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
.lienzo {
  touch-action: none;
  user-select: none;
  cursor: pointer;
  position: absolute;
  right: -935px;
  z-index: -1;
  background-image: url('../assets/img/subtle_carbon.png');

}
#coordinates {
  background-color: rgba(0, 0, 0, 0.75);
  color: rgb(250, 250, 250);
  text-align: center;
  vertical-align: middle;
  line-height: 42px;
  width: auto;
  height: 42px;
  border-radius: 21px;
  padding: 0px 1.5em;
  font-size: 16px;
  cursor: default;
  font-size: 0.7em;
}
.boxCoordinates {
  position: absolute;
  left: 1em;
  bottom: 1em;
  z-index: 999;
}
#vertical {
  display: none;
}
@media all and (orientation: portrait) {
  #container {
    display: none;
  }
  #vertical {
    border-radius: 7px;
    display: block;
    position: absolute;
    margin: 28%;
    justify-content: center;
    background-size: cover;
    width: 190px;
    height: 190px;
    background-image: url(/rotatephone.gif),
      linear-gradient(to right, #a19dcf, #03002d);
  }
}
//transicion Tunel
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  overflow: hidden;
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
  grid-template-rows: 60px auto auto;
  transition: transform 1s, opacity 1s;
  padding: 255px;
  right: 10;
}
h1 {
  font-size: 2em;
  width: 80%;
  grid-column: 1/-1;
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
  transform: translate3d(0, 0, -900px);
}
#item3 {
  opacity: 0.2;
  z-index: 2;
  transform: translate3d(0, 0, -2900px);
}
#item4 {
  left: 0;
  top: 0;
  opacity: 0.2;
  z-index: 1;
  transform: translate3d(0, 0, -4900px);
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
