<template>
<div class="col-sm" id="vertical"></div>
  <div class="container">
    <canvas
      class="lienzo"
      id="lienzo"
      width="1500"
      height="720"
      @mousemove="oMousePos"
    ></canvas>
  </div>
  <div class="boxCoordinates">
    <button @onClick="zoomIn">zoom In</button>
    <button @onClick="zoomOut">zoom Out</button>
   
    <div id="coordinates">
      <h3>{{ x }} - {{ y }}</h3>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
 name: "Mur",
  props: {
  },

  setup() {
    var canvas = null;
    let x = ref();
    let y = ref();
    let current_section = 1;
    
     onMounted(() => {
      var c = document.getElementById("lienzo");
      canvas = c.getContext("2d");
    });

    function oMousePos(e) {
      x.value = e.offsetX;
      y.value = e.offsetY;
    }
    
    
    return{
    oMousePos,
    canvas,
    x,
    y,
    current_section
  }
  }
  

};
</script>

<style scoped lang="scss">

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
  /* width: 950px;
  height: 600px; */
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
</style>