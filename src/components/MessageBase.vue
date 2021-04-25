<template>
  <div class="table-row" v-for="(Message, ind) in filtredMessages" :key="ind">
    <div class="col col-3" data-label="message">
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
</style>