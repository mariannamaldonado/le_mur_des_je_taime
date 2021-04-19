<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/'}">Le mur des je t'aime</router-link>
          </li>
        </ul>
      </nav>
    <div class="copyright d-flex flex-wrap">
      &copy; Coded  with
      <i class="fa fa-heart heart"></i> by
      <a href="https://github.com/mariannamaldonado/le_mur_des_je_taime" target="_blank"> &nbsp; Final Project.</a>&nbsp;>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
   name: 'ContentFooter',

   props:{}
};
</script>


<style>

</style>
