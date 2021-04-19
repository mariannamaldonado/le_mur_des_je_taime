<template>
  <div class="col-sm" id="vertical"></div>
  <!-- <h1>{{ msg }}</h1> -->
  <div id="container">
    <nav class="nav">
      <a href="#item1" id="1">Tunel</a>
      <a href="#item4" id="4">Muro</a>
      <a href="#item2" id="2"></a>
      <a href="#item3" id="3"></a>
    </nav>
    <div class="environment" @click="getSelection">
      <div id="item1" class="section">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate translate" :src="image">
        <img class="gap imgTranslate translate"  :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
      </div>
      <div id="item2" class="section">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="gap imgTranslate"  :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
      </div>
      <div id="item3" class="section">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="gap imgTranslate"  :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
        <img class="imgTranslate" :src="image">
      </div>
      <div id="item4" class="section">
          <canvas class="lienzo" id="lienzo" @mousemove="oMousePos"></canvas>
          <div class="boxCoordinates">
            <div id="coordinates">
              <h3>{{ x }} - {{ y }}</h3>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "LeMur",
  props: {
    msg: String,
  },
  setup() {
    var canvas = null;
    let x = ref();
    let y = ref();
    let current_section = 1;

    onMounted(() => {
      var canvas = document.getElementById("lienzo");
      if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
          var coordinates = document.getElementById("coordinates");

          canvas.addEventListener(
            "mousemove",
            function (evt) {
              var mousePos = oMousePos(canvas, evt);
              markCoords(coordinates, mousePos.x, mousePos.y);
            },
            false
          );

          canvas.addEventListener(
            "mouseout",
            function (evt) {
              cleanCoords(coordinates);
            },
            false
          );
        }
      }
    });
    function markCoords(coordinates, x, y) {
      coordinates.innerHTML = + x + " - " + y;
    }

    function cleanCoords(coordinates) {
      coordinates.innerHTML = "";
    }

    function oMousePos(canvas, evt) {
      var ClientRect = canvas.getBoundingClientRect();
      return {
        //objeto
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top),
      };
    }

    //script transicion
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
      canvas,
      x,
      y,
      markCoords,
      oMousePos,
      cleanCoords,
      getSelection,
      current_section,
      image: "/muro.jpg"
    };
  },
};
</script>

<style  scoped lang="scss">

.imgTranslate{
  padding: 7px ;
  width: 170px;
  height: 70px;
}

.src{
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
  width: 950px;
  height: 600px;
  background: #01011a;
  position: absolute;
  right: -235px;
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
  font-size: .7em;
}

.boxCoordinates {
  position: absolute;
  left: 1em;
  bottom: 1em;
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
  right: 10;}
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
  
  .nav a+a::before {
    margin-left: -11px;
    content:'';
    height: 15px;
    width: 1px;
  }

#item1 {
  z-index: 4;
}
#item2 {
  opacity: 0.2;
  z-index: 3;
  transform: translate3d(0, 0, -2000px);
}
#item3 {
  opacity: 0.2;
  z-index: 2;
  transform: translate3d(0, 0, -4000px);
}
#item4 {
  opacity: 0.2;
  z-index: 1;
  transform: translate3d(0, 0, -6000px);
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
