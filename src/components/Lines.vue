<template>
  <div class="line"></div>
  
</template>


<script>
import { onMounted } from "vue";
export default {
  name: "Lines",
  props: {},
  setup() {
    onMounted(() => {
      var canvas = document.getElementById("line");
      if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#fff";
          ctx.translate(0, 0.5);
          ctx.beginPath();
          ctx.moveTo(-1500, 50);
          ctx.lineTo(230, 50);
          ctx.stroke();
        }
      }
    });

    return {
     
    };
  },
};
</script>

<style>
</style>