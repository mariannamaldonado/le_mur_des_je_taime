<template>
 <div class="container">
  <div class="img-grid">
   <div class="floating" v-for="(Message, ind) in filtredMessages" :key="ind">
      <div class="card-object rotate">
        <header></header>
        <aside></aside>
        <main>
          <blockquote class="message">
            <span>❤</span>{{ Message.message }}
          </blockquote>
        </main>
        <footer class="author">
          <span>❤ Para: </span> {{ Message.addresseName }}
        </footer>
      </div>
    </div>
    
  </div>
</div>
</template>


<script>
import MessageBase from "@/components/MessageBase.vue"
import { ref, reactive, onMounted, computed } from "vue";
export default {
  name: "MessageBase",
  components: {
    MessageBase
  },
  setup() {
    let Messages = reactive([]);
    let search = ref("");
    onMounted(() => {
      getMessageList();
    });

    let filtredMessages = computed(() => {
      return Messages.filter((item) => {
        return item.message.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    function getMessageList() {
      fetch("http://localhost:8081/api/message/list")
        .then((resp) => resp.json())
        .then((datos) => {
          datos.forEach((element) => {
            Messages.push(element);
          });
        });
    }

    return {
      search,
      getMessageList,
      Messages,
      filtredMessages,
    };
  },
};
</script>


<style scoped lang="css">
html {
  height: 100%;
  width: 100%;
}
body {
  -webkit-user-select: none;
  user-select: none; 
  background-color: #222226;
  height: 100%;
  font-family: roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card-object {
  grid-auto-flow: row dense;
  display: grid;
  width: 340px;
  grid-template:
    "header header"
    "aside  main"
    "foot  foot";
  font-size: 0.9rem;
  line-height: 40px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.8));
}
.card-object header {
  grid-column: header;
  height: 40px;
  background-image: url("../assets/img/dechirure.png");
  background-repeat: repeat;
}
.card-object aside {
  grid-area: aside;
  width: 40px;
  background-image: url("../assets/img/trou.png");
  background-repeat: repeat;
}
.card-object main {
  grid-area: main;
  background-color: white;
}
.card-object main .message {
  background-image: url("../assets/img/line.png");
  background-repeat: repeat;
  background-position: 0 -10px;
  margin: 0;
}
.card-object footer {
  grid-column: foot;
  background-color: white;
  padding: 5px 15px 15px 0;
  border-radius: 0 0 5px 5px;
}
/* .author::before {
  content: "❤ ";
} */
/* .rotate {
  animation: rotate 4s infinite ease-in-out;
} */
.floating {
  animation: float 6s infinite ease-in-out;
} 
@keyframes rotate {
  0% {
    transform: perspective(1000px) rotateY(4deg);
  }
  50% {
    transform: perspective(1000px) rotateX(-5deg);
  }
  100% {
    transform: perspective(1000px) rotateY(4deg);
  }
}
@keyframes float {
  0% {
    transform: perspective(1000px) translateY(0px) rotateX(5deg);
  }
  50% {
    transform: perspective(1000px) translateY(10px) rotateX(-5deg);
  }
  100% {
    transform: perspective(1000px) translateY(0px) rotateX(5deg);
  }
}
.forget {
  opacity: 0.2;
  animation: disappear 5s infinite ease-in-out;
}
@keyframes disappear {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.6;
  }
}
.forgotten {
  opacity: 0.1;
  background-color: black;
}


:root {
    scroll-behavior: smooth;
     background-color: rgb(10, 10, 10)

}

*, ::after, ::before {
    box-sizing: inherit;
     
}
</style>


<style lang="scss" scoped>
body {
  background: rgb(104, 39, 39);
  padding: 10px 50px;

  h1 {
    text-align: center;
    color: #fff;
  }
}

.container {
  margin: auto;
  border: #fff solid 5px;
  background: #fff;
}

/* mak images fill their container*/
img {
  max-width: 100%;
}
img:hover {
  opacity: 0.5;
  cursor: pointer;
}

/* CSS Grid*/
.img-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
}

/* Media Query for changing grid on bigger screens*/

/* Bigger than Phones(tablet) */
@media only screen and (min-width: 750px) {
  .img-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Bigger than Phones(laptop / desktop) */
@media only screen and (min-width: 970px) {
  .img-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>

