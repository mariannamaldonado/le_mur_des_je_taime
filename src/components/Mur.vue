<template>
  <div class="col-sm" id="vertical"></div>
  <div class="container">
    <canvas
      class="lienzo"
      id="lienzo"
      width="1480"
      height="750"
      @mouseleave="draw"
      @mousemove="oMousePos"
    ></canvas>
    <div id="sms"><MessageBase /></div>
  </div>
  <div class="boxCoordinates">
    <div id="coordinates">
      <h3>{{ x }} - {{ y }}</h3>
    </div>
  </div>
  <!-- <button @Click="zoomIn">grande</button>
  <button @Click="zoomOut">pequeño</button> -->
</template>

<script>
import MessageBase from "@/components/MessageBase.vue";
import { ref, onMounted } from "vue";

export default {
  name: "Mur",
  props: {},
  components: {
    MessageBase,
  },
  setup() {
    var context = null;
    let x = ref(0);
    let y = ref(0);
    let current_section = 1;

    onMounted(() => {
      var canvas = document.getElementById("lienzo");
      context = canvas.getContext("2d");
    });

    function oMousePos(e) {
      x.value = e.offsetX;
      y.value = e.offsetY;
    }

    function draw() {
      var canvas = document.getElementById("lienzo");
      if (canvas.getContext) {
        var context = canvas.getContext("2d");

        context.beginPath();
        context.moveTo(75, 40);
        context.bezierCurveTo(75, 37, 70, 25, 50, 25);
        context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        context.bezierCurveTo(20, 80, 40, 102, 75, 120);
        context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        context.bezierCurveTo(85, 25, 75, 37, 75, 40);
        context.fill();
      }
    }

    return {
      draw,
      oMousePos,
      context,
      x,
      y,
      current_section,
    };
  },
};
</script>

<style scoped lang="scss">
#sms{
  color: brown;
  text-align: center;
  z-index: 999;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.lienzo {
  touch-action: none;
  user-select: none;
  cursor: pointer;
  background: #ecec0f;
  position: absolute;
  right: -235px;
  z-index: -1;
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
</style>