<template>
  <div class="col-sm" id="vertical"></div>
  <!-- <h1>{{ msg }}</h1> -->
  <div id="container">
    <div class="environment" @click="getSelection">
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
        <canvas class="lienzo" id="lienzo"  width="900" height="600" @mousemove="oMousePos"></canvas>
      </div>
      <div class="boxCoordinates">
           <button @onClick="zoomIn">zoom In</button>
        <button @onClick="zoomOut">zoom Out</button>
        <!-- <button id="btnEnlarge" @onclick="enlarge">ampliar</button>
        <button id="btnReduce" @onclick="reduce">reducir</button> -->
        <div id="coordinates">
          <h3>{{ x }} - {{ y }}</h3>
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
    let z = ref();
    let current_section = 1;
    let canvasScale = 1; 
    let SCALE_FACTOR = 1.01;
    var c = document.getElementById("lienzo");
    var HideControls = {
      'tl':true,
      'tr':false,
      'bl':false,
      'br':false,
      'ml':false,
      'mt':false,
      'mr':false,
      'mb':false,
      'mtr':false
    };
    // onMounted(() => {
    //   var z = document.querySelectorAll("lienzo");
      
    // })

    function zoomIn(event) {
     event.addEventListener("click")
    }
    
      function zoomOut(event) {
     event.addEventListener("click")
    }
    
// $('#zoomIn').on('click', function(event) {
//     zoomIn();
//  });

// fabric.loadSVGFromURL(site_url, function(objects) { 
//           var group = new fabric.PathGroup(objects, { 
//           left: 165, 
//           top: 100, 
//           width: 295, 
//           height: 211 
//         }); 
//         canvas.add(group); 
//         canvas.renderAll(); 
//           }); 

 function zoomIn() {

      canvasScale = canvasScale * SCALE_FACTOR;
      
      canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
      canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

      // var objects = canvas.getObjects();
      // for (var i in objects) {
      //     var scaleX = objects[i].scaleX;
      //     var scaleY = objects[i].scaleY;
      //     var left = objects[i].left;
      //     var top = objects[i].top;

      //     var tempScaleX = scaleX * SCALE_FACTOR;
      //     var tempScaleY = scaleY * SCALE_FACTOR;
      //     var tempLeft = left * SCALE_FACTOR;
      //     var tempTop = top * SCALE_FACTOR;

      //     objects[i].scaleX = tempScaleX;
      //     objects[i].scaleY = tempScaleY;
      //     objects[i].left = tempLeft;
      //     objects[i].top = tempTop;

      //     objects[i].setCoords();
      // }
  }

function zoomOut(){
  
      canvasScale = canvasScale / SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * (1 / SCALE_FACTOR));
      canvas.setWidth(canvas.getWidth() * (1 / SCALE_FACTOR));

      // var objects = canvas.getObjects();
      // for (var i in objects) {
      //     var scaleX = objects[i].scaleX;
      //     var scaleY = objects[i].scaleY;
      //     var left = objects[i].left;
      //     var top = objects[i].top;

      //     var tempScaleX = scaleX * (1 / SCALE_FACTOR);
      //     var tempScaleY = scaleY * (1 / SCALE_FACTOR);
      //     var tempLeft = left * (1 / SCALE_FACTOR);
      //     var tempTop = top * (1 / SCALE_FACTOR);

      //     objects[i].scaleX = tempScaleX;
      //     objects[i].scaleY = tempScaleY;
      //     objects[i].left = tempLeft;
      //     objects[i].top = tempTop;

      //     objects[i].setCoords();
      // }
            
      canvas.renderAll();
    }
 
    onMounted(() => {
      var c = document.getElementById("lienzo");
      canvas = c.getContext("2d");
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
      z,
      HideControls,
      c,
      zoomIn,
      zoomOut,
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
  // width: 950px;
  // height: 600px;
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
  font-size: 0.7em;
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
