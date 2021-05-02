<template>
  <div class="lemur">
    <LeMur msg="Le Mur Des Je T`aime" />
  </div>
</template>

<script>
import LeMur from "@/components/LeMur.vue";
export default {
  name: "Wall",
  components: {
    LeMur,
  //  Mur,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>