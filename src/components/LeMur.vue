<template>
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
      </div>
    </div>
  </div>
</template>

<script>
import MessageBase from "@/components/MessageBase.vue";
import { onMounted } from "vue";
export default {
  name: "LeMur",
  props: {
    msg: String,
  },
  components: {
    MessageBase,
  },
  setup() {
 
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
      image: "/muro.jpg",
    };
  },
};
</script>

<style  scoped lang="scss">
#sms {
  color: brown;
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
}
.src {
  height: 70px;
}
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
  transition: transform 2s, opacity 2s;
}
.gap {
  grid-column: 3/4;
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
  opacity: 0.1;
  z-index: 2;
  transform: translate3d(0, 0, -2000px);
}
#item4 {
  top: 0;
  width: 100%;
  opacity: 0;
  transform: translate3d(0, 0, -4000px);
}
@media only screen and (max-width: 690px) {
  .section {
    display: block;
  }

  .environment {
    align-items: flex-start;
    perspective-origin: 48% 0;
  }
}
</style>
