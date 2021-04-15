<template>
  <div id="vertical"></div>
  <!-- <h1>{{ msg }}</h1> -->
  <div id="container">
    <nav class="nav">
      <a href="#item1" id="1"> Section 1</a>
      <a href="#item2" id="2"> Section 2</a>
      <a href="#item3" id="3"> Section 3</a>
      <a href="#item4" id="4"> Section 4</a>
    </nav>
    <div class="environment" @click="getSelection">
      <div id="item1" class="section">
        <h1>Section 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          culpa pariatur. Tempora, minima officiis modi dolor vero animi
        </p>
        <p>
          Placeat dolores exercitationem sit. Eos, dolore repellendus libero
          possimus at neque rerum sunt qui magni quos repellat saepe
        </p>
        <p>
          Modi, necessitatibus ab. Officia blanditiis officiis adipisci totam,
          perferendis odio a quisquam, consequuntur nulla ipsa dolorem. Repellat
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quis
          beatae mollitia ratione neque eum molestiae illo inventore nulla, quo
        </p>
        <p class="gap">
          Quibusdam atque, accusamus dolore assumenda ut laborum consectetur
          molestiae esse aut. Tempora sunt cumque, vel vero animi nulla adipisci
        </p>
        <p>
          Vel, quos quam? Dolorum nam debitis maiores odit exercitationem
          voluptatum itaque quas eaque enim numquam neque unde esse soluta a,
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quos
          neque maxime repellendus adipisci nobis culpa debitis vitae
        </p>
        <p>
          Minima, tempora voluptas? Deserunt harum accusamus quod similique
          ipsam? Sunt harum et ducimus aspernatur ullam ipsum pariatur voluptas
        </p>
      </div>
      <div id="item2" class="section">
        <h1>Section 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          culpa pariatur. Tempora, minima officiis modi dolor vero animi
        </p>
        <p>
          Placeat dolores exercitationem sit. Eos, dolore repellendus libero
          possimus at neque rerum sunt qui magni quos repellat saepe
        </p>
        <p>
          Modi, necessitatibus ab. Officia blanditiis officiis adipisci totam,
          perferendis odio a quisquam, consequuntur nulla ipsa dolorem. Repellat
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sed
          distinctio a atque totam porro deserunt et ullam fugiat. Unde, velit.
        </p>
        <p class="gap">
          Sequi molestiae itaque ducimus rem harum deserunt, iure repellendus.
          Suscipit dolorem dicta amet, nulla porro, ea doloremque quas magni est
        </p>

        <p>
          Quasi et debitis eius est aliquid quos veniam voluptate nam dolore
          nisi aut culpa harum vitae possimus similique, deserunt reiciendis. Id
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          doloribus possimus ullam sed iste sunt quaerat. Cum perspiciatis
        </p>
        <p>
          Corporis, eligendi architecto ad quidem iure, nam sint suscipit
          quibusdam quam nihil molestiae, amet odit quisquam atque voluptate
        </p>
      </div>
      <div id="item3" class="section">
        <h1>Section 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          culpa pariatur. Tempora, minima officiis modi dolor vero animi
        </p>

        <p>
          Placeat dolores exercitationem sit. Eos, dolore repellendus libero
          possimus at neque rerum sunt qui magni quos repellat saepe
        </p>
        <p>
          Modi, necessitatibus ab. Officia blanditiis officiis adipisci totam,
          perferendis odio a quisquam, consequuntur nulla ipsa dolorem. Repellat
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          nesciunt delectus! Itaque quaerat magni dolores quam debitis dicta cum
        </p>
        <p class="gap">
          Porro veniam sed modi reiciendis reprehenderit sequi, molestiae
          voluptate necessitatibus. Natus harum temporibus, rerum nemo molestias
        </p>
        <p>
          Iste cumque laudantium ut delectus ullam dolor esse doloremque
          cupiditate, sit laboriosam voluptatem at alias, in suscipit, corrupti
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          doloremque asperiores illo repellendus beatae laborum atque, quas
        </p>
        <p>
          Ea dolorem totam iure ex voluptates tenetur maiores quo rem
          recusandae, vitae aut. Odit perspiciatis amet nulla aliquid officiis a
        </p>
      </div>
      <div id="item4" class="section">
        <div id="container">
          <canvas id="lienzo" @mousemove="oMousePos"></canvas>
          <div class="boxCoordinates">
            <div id="coordinates">
              <h3>{{ x }}, {{ y }}</h3>
            </div>
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
    let canvas = null;
    let x = ref(0);
    let y = ref(0);
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
      coordinates.innerHTML = +x + " - " + y;
    }

    function cleanCoords(coordinates) {
      coordinates.innerHTML = "";
      //canvas.style.cursor = "default";
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
    };
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

h1 {
  text-align: center;
}

body {
  overflow: hidden;
}
#lienzo {
  touch-action: none;
  user-select: none;
  cursor: auto;
  width: 1300px;
  height: 890px;
  background: #01011a;
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
}

.boxCoordinates {
  position: absolute;
  left: 1em;
  bottom: 1em;
}

canvas {
  border: 1px solid #d9d9d9;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#vertical {
  display: none;
}

@media all and (orientation: portrait) {
  #container {
    display: none;
  }

  #vertical {
    display: block;
    position: absolute;
    margin-top: 40px;
    margin: 95px;
    justify-content: center;
    z-index: 1;
    background-size: cover;
    width: 150px;
    height: 150px;
    background-image: url(/rotate.svg),
      linear-gradient(to right, #a19dcf, #03002d);
  }
}

//transicion
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-first: #ccdfcb;
  --clr-second: #0f1626;
  --clr-third: #fff;
  --clr-four: #031424;
  --clr-five: #fedc3d;
}
body {
  /* color: var(--clr-first);
    background-color: var(--clr-second); */
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
  max-width: 50%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px auto auto;
  transition: transform 1s, opacity 1s;
}
h1 {
  font-size: 2em;
  width: 80%;
  grid-column: 1/-1;
}
p {
  padding: 10px;
}
.gap {
  grid-column: 3/4;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.95);
}
/* .nav a {
    text-decoration: none;
    color: var(--clr-third);
    margin: 10px;
    cursor: pointer;
  }
  
  .nav a+a::before {
    position: absolute;
    margin-left: -11px;
    content:'';
    height: 20px;
    width: 1px;
    background-color: var(--clr-first);
  }
   */

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

@media only screen and (max-width: 590px) {
  .section {
    display: block;
  }
  // body {
  //   overflow: scroll;
  // }
  .environment {
    align-items: flex-start;
    perspective-origin: 48% 0;
  }
  .nav {
    bottom: 0;
  }
}
</style>
