<template>
  <div>
    <LeMur msg="Le Mur Des Je T`aime" />
    <!-- <Mur /> -->

  </div>
</template>

<script>
import LeMur from "@/components/LeMur.vue";
// import Mur from "@/components/Mur.vue";
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
body{
      background-image: url('../assets/img/subtle_carbon.png');

}
</style>