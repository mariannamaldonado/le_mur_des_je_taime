<template>
  <div>
    <LeMur msg="Le Mur Des Je T`aime" />
    <MessageBase />
  </div>
</template>

<script>
import LeMur from "@/components/LeMur.vue";
import MessageBase from "@/components/MessageBase.vue";
export default {
  name: "Wall",
  components: {
    LeMur,
    MessageBase,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>