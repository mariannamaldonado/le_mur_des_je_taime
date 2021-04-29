<template>
  <section class="content-section bg-light">
    <div class="container text-center">
      <div class="row">
        <div class="text-center">
          <div class="error mx-auto" data-text="404">404</div>
          <p class="lead text-gray-800 mb-5">No encontrada</p>
          <p class="text-gray-500 mb-0">OOPS!...</p>
          <a href="/">&larr; Volver a la página de inicio</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  components: {},

  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.content-section {
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
}
.error {
  color: #5a5c69;
  font-size: 7rem;
  position: relative;
  line-height: 1;
  width: 12.5rem;
}
@-webkit-keyframes noise-anim {
  0% {
    clip: rect(10px, 9999px, 83px, 0);
  }
  5% {
    clip: rect(2px, 9999px, 65px, 0);
  }
  10% {
    clip: rect(8px, 9999px, 54px, 0);
  }
  15% {
    clip: rect(24px, 9999px, 22px, 0);
  }
  20% {
    clip: rect(19px, 9999px, 84px, 0);
  }
  25% {
    clip: rect(19px, 9999px, 10px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 77px, 0);
  }
  35% {
    clip: rect(74px, 9999px, 34px, 0);
  }
  40% {
    clip: rect(34px, 9999px, 64px, 0);
  }
  45% {
    clip: rect(83px, 9999px, 47px, 0);
  }
  50% {
    clip: rect(23px, 9999px, 70px, 0);
  }
  55% {
    clip: rect(55px, 9999px, 49px, 0);
  }
  60% {
    clip: rect(90px, 9999px, 21px, 0);
  }
  65% {
    clip: rect(58px, 9999px, 63px, 0);
  }
  70% {
    clip: rect(77px, 9999px, 11px, 0);
  }
  75% {
    clip: rect(6px, 9999px, 72px, 0);
  }
  80% {
    clip: rect(27px, 9999px, 57px, 0);
  }
  85% {
    clip: rect(89px, 9999px, 54px, 0);
  }
  90% {
    clip: rect(55px, 9999px, 4px, 0);
  }
  95% {
    clip: rect(36px, 9999px, 91px, 0);
  }
  100% {
    clip: rect(19px, 9999px, 71px, 0);
  }
}
@keyframes noise-anim {
  0% {
    clip: rect(10px, 9999px, 83px, 0);
  }
  5% {
    clip: rect(2px, 9999px, 65px, 0);
  }
  10% {
    clip: rect(8px, 9999px, 54px, 0);
  }
  15% {
    clip: rect(24px, 9999px, 22px, 0);
  }
  20% {
    clip: rect(19px, 9999px, 84px, 0);
  }
  25% {
    clip: rect(19px, 9999px, 10px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 77px, 0);
  }
  35% {
    clip: rect(74px, 9999px, 34px, 0);
  }
  40% {
    clip: rect(34px, 9999px, 64px, 0);
  }
  45% {
    clip: rect(83px, 9999px, 47px, 0);
  }
  50% {
    clip: rect(23px, 9999px, 70px, 0);
  }
  55% {
    clip: rect(55px, 9999px, 49px, 0);
  }
  60% {
    clip: rect(90px, 9999px, 21px, 0);
  }
  65% {
    clip: rect(58px, 9999px, 63px, 0);
  }
  70% {
    clip: rect(77px, 9999px, 11px, 0);
  }
  75% {
    clip: rect(6px, 9999px, 72px, 0);
  }
  80% {
    clip: rect(27px, 9999px, 57px, 0);
  }
  85% {
    clip: rect(89px, 9999px, 54px, 0);
  }
  90% {
    clip: rect(55px, 9999px, 4px, 0);
  }
  95% {
    clip: rect(36px, 9999px, 91px, 0);
  }
  100% {
    clip: rect(19px, 9999px, 71px, 0);
  }
}
.error:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 #e74a3b;
  top: 0;
  color: #5a5c69;
  background: #f8f9fc;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}
@-webkit-keyframes noise-anim-2 {
  0% {
    clip: rect(37px, 9999px, 52px, 0);
  }
  5% {
    clip: rect(77px, 9999px, 64px, 0);
  }
  10% {
    clip: rect(22px, 9999px, 93px, 0);
  }
  15% {
    clip: rect(38px, 9999px, 90px, 0);
  }
  20% {
    clip: rect(17px, 9999px, 20px, 0);
  }
  25% {
    clip: rect(20px, 9999px, 39px, 0);
  }
  30% {
    clip: rect(55px, 9999px, 43px, 0);
  }
  35% {
    clip: rect(72px, 9999px, 8px, 0);
  }
  40% {
    clip: rect(17px, 9999px, 94px, 0);
  }
  45% {
    clip: rect(87px, 9999px, 64px, 0);
  }
  50% {
    clip: rect(54px, 9999px, 26px, 0);
  }
  55% {
    clip: rect(89px, 9999px, 22px, 0);
  }
  60% {
    clip: rect(3px, 9999px, 3px, 0);
  }
  65% {
    clip: rect(60px, 9999px, 57px, 0);
  }
  70% {
    clip: rect(68px, 9999px, 88px, 0);
  }
  75% {
    clip: rect(39px, 9999px, 4px, 0);
  }
  80% {
    clip: rect(40px, 9999px, 89px, 0);
  }
  85% {
    clip: rect(1px, 9999px, 91px, 0);
  }
  90% {
    clip: rect(31px, 9999px, 43px, 0);
  }
  95% {
    clip: rect(51px, 9999px, 93px, 0);
  }
  100% {
    clip: rect(21px, 9999px, 67px, 0);
  }
}
@keyframes noise-anim-2 {
  0% {
    clip: rect(37px, 9999px, 52px, 0);
  }
  5% {
    clip: rect(77px, 9999px, 64px, 0);
  }
  10% {
    clip: rect(22px, 9999px, 93px, 0);
  }
  15% {
    clip: rect(38px, 9999px, 90px, 0);
  }
  20% {
    clip: rect(17px, 9999px, 20px, 0);
  }
  25% {
    clip: rect(20px, 9999px, 39px, 0);
  }
  30% {
    clip: rect(55px, 9999px, 43px, 0);
  }
  35% {
    clip: rect(72px, 9999px, 8px, 0);
  }
  40% {
    clip: rect(17px, 9999px, 94px, 0);
  }
  45% {
    clip: rect(87px, 9999px, 64px, 0);
  }
  50% {
    clip: rect(54px, 9999px, 26px, 0);
  }
  55% {
    clip: rect(89px, 9999px, 22px, 0);
  }
  60% {
    clip: rect(3px, 9999px, 3px, 0);
  }
  65% {
    clip: rect(60px, 9999px, 57px, 0);
  }
  70% {
    clip: rect(68px, 9999px, 88px, 0);
  }
  75% {
    clip: rect(39px, 9999px, 4px, 0);
  }
  80% {
    clip: rect(40px, 9999px, 89px, 0);
  }
  85% {
    clip: rect(1px, 9999px, 91px, 0);
  }
  90% {
    clip: rect(31px, 9999px, 43px, 0);
  }
  95% {
    clip: rect(51px, 9999px, 93px, 0);
  }
  100% {
    clip: rect(21px, 9999px, 67px, 0);
  }
}
.error:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 #4e73df;
  top: 0;
  color: #5a5c69;
  background: #f8f9fc;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>