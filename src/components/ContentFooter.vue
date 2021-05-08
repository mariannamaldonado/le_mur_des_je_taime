<template>
  <footer class="site-footer">
    <div class="text-center">
      2021 - Le mur des jes t'aime
      <i class="fa fa-heart heart"></i>
      <a href="#" class="go-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ContentFooter",
  props: {},
};
</script>

<style scoped>

.site-footer {
  background: #b7c8e0;
  color: #fff;
  padding: 10px 0;
}
.go-top {
  margin-right: 1%;
  float: right;
  background: rgba(255, 255, 255, 0.5);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
.go-top i {
  color: #2a3542;
}
.site-min-height {
  min-height: 900px;
}
</style>
