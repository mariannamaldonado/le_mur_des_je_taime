<template>
  <div class="table-row" v-for="(Message, ind) in filtredMessages" :key="ind">
    <div class="card firstname" data-label="message">
      {{ Message.user.firstname }}
    </div>
    <div class="card message" data-label="message">
      {{ Message.message }}
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
<style>
.card{
  min-width: 150px;
  max-width: 300px;
}
.message{
  background: transparent;
}
.firstname{
  background: #1f4b8d;
}
</style>