<template>
 
  <div class="floating" >
<div class="card-object rotate" v-for="(Message, ind) in filtredMessages" :key="ind">
<h1 class="heading"> <span class="underline--magical">Para:</span> Sofia</h1>
<h2 class="subheading">{{ Message.message }}<span class="underline--magical">{{ Message.user.firstname }}</span> </h2>

</div>
</div>


</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "MessageBase",
  components: {},
  setup() {
    var canvas = null;
    let Menssages = reactive([]);
    let search = ref("");

    onMounted(() => {
      var c = document.getElementById("lienzo");
      canvas = c.getContext("2d");
      getMessageList();
    });

    let filtredMessages = computed(() => {
      return Menssages.filter((item) => {
        return item.message.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    function getMessageList() {
      fetch("http://localhost:8081/api/message/list")
        .then((resp) => resp.json())
        .then((datos) => {
          datos.forEach((element) => {
            Menssages.push(element);
          });
        });
    }

    return {
      canvas,
      Menssages,
      search,
      filtredMessages,
    };
  },
};
</script>

<style lang="scss" scoped>

body {
  width: 80%;
  margin: 10vw auto;
}
.heading {
  font-family: "Playfair Display", serif;
  font-size: 10vw;
}

.subheading {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  line-height: 1.5;
}

@media screen and (min-width: 40em) {
  body {
    width: 50%;
  }
  .heading {
    font-size: 3vw;
  }

  .subheading {
    font-size: 1.75vw;
  }
}

/*================================================
Start Important Part
==================================================*/

.underline--magical {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
}

/*================================================
End Important Part
==================================================*/
</style>