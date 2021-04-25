<template>
  <div>
    <!-- <MessageBase /> -->
    <!-- <LeMur msg="Le Mur Des Je T`aime" /> -->
    <Mur />
    
  </div>
</template>

<script>
// import MessageBase from "@/components/MessageBase.vue";
// import LeMur from "@/components/LeMur.vue";
import Mur from "@/components/Mur.vue";
export default {
  name: "Wall",
  components: {
    // LeMur,
   Mur,
  //  MessageBase
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>