<template>
  <div>
    <LeMur msg="Le Mur Des Je T`aime" />
    <Lines />
  </div>
</template>

<script>
import LeMur from "@/components/LeMur.vue";
import Lines from "@/components/Lines.vue";
export default {
  name: "Wall",
  components: {
    LeMur,
    Lines,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>