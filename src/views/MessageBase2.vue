<template>
  <div class="grid-gallery">
    <div class="floating" v-for="(Message, ind) in Messages" :key="ind">
      <div class="card-object grid-gallery__item rotate">
        <header></header>
        <aside></aside>
        <main>
          <blockquote id="sms" class="grid-gallery__image message">
            <span>❤</span><span v-html="Message.message"></span>
          </blockquote>
        </main>
        <footer class="author">
         <em> <b>❤ Para:  {{ Message.addresseName }}</b> </em>
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
          Messages.splice(0);
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
.floating{
  background-image: url('../assets/img/subtle_carbon.png')
}
html {
  height: 100%;
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
  display: grid;
  width: 450px;
  grid-template: "header header"
                  "aside  main"
                 "foot  foot";
  font-family: courier;
  font-size: 24px;
  line-height: 40px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.8));
}

.card-object header {
  grid-column: header;
  height: 40px;
  background-image: url(https://image.ibb.co/b49eUb/dechirure.png);
  background-repeat: repeat;
}

.card-object aside {
  grid-area: aside;
  width: 40px;
  background-image: url(https://image.ibb.co/fpgtpb/trou.png);
  background-repeat: repeat;
}

.card-object main {
  grid-area: main;
  background-color: white;
}

.card-object main .message{
    background-image: url(https://image.ibb.co/iA4Dpb/line.png);
  background-repeat: repeat;
  background-position: 0 -10px;
  margin: 20px 20px 0 20px;
}

.card-object footer {
  grid-column: foot;
  text-align: right;
  background-color: white;
  padding: 5px 20px 20px 0;
  border-radius: 0 0 5px 5px;
}

.author::before{
  content: "- ";
}

.rotate{
  animation: rotate 4s infinite ease-in-out;
}

.floating{
  animation: float 6s infinite ease-in-out;
}

@keyframes rotate{
  0% {
  transform: perspective(1000px) rotateY(4deg);
  }
  50%{
  transform: perspective(1000px) rotateX(-5deg);
  }
  100% {
  transform: perspective(1000px) rotateY(4deg);
  }
}

@keyframes float{
  0% {
  transform: perspective(1000px) translateY(0px) rotateX(5deg);
  }
  50%{
  transform: perspective(1000px) translateY(10px) rotateX(-5deg);
  }
  100% {
  transform: perspective(1000px) translateY(0px) rotateX(5deg);
  }
}

.forget{
  opacity: 0.2;
  animation: disappear 5s infinite ease-in-out;
}

@keyframes disappear{
  0%{
    opacity: 0.6;
  }
  50%{
    opacity: 0.1;
  }
  100%{
    opacity: 0.6;
  }
}

.forgotten{
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
  top:20px;
}
</style>