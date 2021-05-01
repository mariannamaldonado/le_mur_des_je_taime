<template>
  <div class="floating" v-for="(Message, ind) in filtredMessages" :key="ind">
    <div class="card-object rotate">
      <header></header>
      <aside></aside>
      <main>
        <blockquote class="message">
          <span>❤</span>
          {{ Message.message }}
        </blockquote>
      </main>
      <!-- <footer class="author">{{ Message.user.firstname }}</footer> -->
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
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  display: grid;
  width: 280px;
  grid-template:
    "header header"
    "aside  main"
    "foot  foot";
  font-size: 13px;
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
  margin: 20px 20px 0 20px;
}
.card-object footer {
  grid-column: foot;
  background-color: white;
  padding: 5px 20px 20px 0;
  border-radius: 0 0 5px 5px;
}
.author::before {
  content: "- ";
}
.rotate {
  animation: rotate 4s infinite ease-in-out;
}
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
.close_btn {
  width: 20px;
  height: 20px;
  position: absolute;
  background: #26262f;
  color: red;
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
}
</style>