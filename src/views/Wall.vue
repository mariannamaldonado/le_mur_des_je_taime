<template>
  <div>
    <!-- <LeMur msg="Le Mur Des Je T`aime" /> -->
    <Mur />
    <MessageBase />
  </div>
</template>

<script>
// import LeMur from "@/components/LeMur.vue";
import Mur from "@/components/Mur.vue";
import MessageBase from "@/components/MessageBase.vue";
export default {
  name: "Wall",
  components: {
    // LeMur,
    Mur,
    MessageBase,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>