<template>
  <div class="grid-gallery">
    <div class="floating" v-for="(Message, ind) in filtredMessages" :key="ind">
      <div class="card-object grid-gallery__item rotate">
        <header></header>
        <aside></aside>
        <main>
          <blockquote class="grid-gallery__image message">
            <span>❤</span>{{ Message.message }}
          </blockquote>
        </main>
        <footer class="author">
          <span>❤ Para: </span> {{ Message.addresseName }}
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from "vue";
export default {
  name: "MessageBase",
  components: {},
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
          Messages.splice(1);
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
<style scoped>
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
/* .close_btn {
  width: 20px;
  height: 20px;
  position: absolute;
  display: inline-block;
  padding: 1em;
  font-size: 1.4rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  right: 20px;
  top: 20px;
} */
</style>
<style lang="sass">
$image-size: 430px
$gap-size: 1.2rem
$breakpoints: ("small": 320px, "medium": 768px, "large": 1024px) 
.grid-gallery
  display: grid
  background-image: url('../assets/img/subtle_carbon.png')
  grid-auto-rows: $image-size
  grid-gap: $gap-size
  grid-auto-flow: row dense
  @media all and (min-width: map-get($breakpoints, 'small'))
    $num-columns: 1
    grid-template-columns: 1fr
    @media all and (min-width: map-get($breakpoints, 'medium'))
      $num-columns: 3
      grid-template-columns: repeat($num-columns, 1fr)
    @media all and (min-width: map-get($breakpoints, 'large'))
      $num-columns: 7
      grid-template-columns: repeat($num-columns, 1fr)
    &__item
      &:nth-child(11n+1)
        grid-column: span 1
        &:nth-child(11n+4)
          grid-column: span 2
          grid-row: span 1
          @media all and (min-width: map-get($breakpoints, 'small'))
            grid-column: span 1
            grid-row: span 1
        &:nth-child(11n+6)
          grid-column: span 3
          grid-row: span 1
        &:nth-child(11n+7)
          grid-column: span 1
          grid-row: span 2
        &:nth-child(11n+8)
          grid-column: span 2
          grid-row: span 2
        &:nth-child(11n+9)
          grid-row: span 3
    &__image
      width: 100%
      height: 100%
      object-fit: cover
</style>