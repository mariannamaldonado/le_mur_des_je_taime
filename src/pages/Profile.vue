<template>
  <Menu />
  <div class="wrapper">
    <div class="profile-card">
      <div class="profile-header">
        <img src="@/assets/img/baner.jpg" alt="" />
      </div>
      <div class="profile-body">
        <div class="cover-photo">
          <img class="profile" :src="user.avatar" alt="..." />
        </div>
        </div>
        <div class="name">Nombre: {{ user.firstname }} <br>
         Apellido: {{ user.lastname }}</div>
        <div class="intro">
          <p>Email: {{ user.email }}</p>
            <hr class="down" />
        </div>

    </div>
  </div>
  <hr class="border" />
  <ContentFooter />
</template>

<script>
import Menu from "@/components/Menu.vue";
import ContentFooter from "@/components/ContentFooter.vue";
import { mapState } from "vuex";
export default {
  name: "Profile",
  components: {
    Menu,
    ContentFooter
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>

<style scoped>
.down{
  padding:em;
  color: #fff;
}
*, ::after, ::before {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
img{
    width: 100%;
    height: auto;
}
.wrapper{
    width: 100%;
    height: 70vh;
}
.profile-card{
    width: 250px;
    height: auto;
    text-align: center;
    margin: 20px auto;
    box-shadow:  0px 0px 18px #ccc;
}
.profile-card .profile-header{
    height: 220px;
}

.profile-card .profile-body{
    background-color: var(--white);
    padding: 20px 40px 40px 40px;
}

.profile-card .profile-body .author-img{
    margin-top: -20px;
    margin-bottom: 20px;
}
.profile-card .profile-body .author-img img{
    width: 170px;
    height: 170px;
    border-radius: 50%; 
    padding: 5px;
    background-color: var(--white);
}

.profile-card .profile-body .name{
   font-size: 20px;
   font-weight: 600;
   text-transform: uppercase;

}
.profile-card .profile-body .intro{
   font-size: 16px;
   font-weight: 700;
   line-height: 2.6;
   margin: 20px  0px 30px  0px;

}
 .social-icon ul {
    list-style-type: none;
}
 .social-icon ul li {
    display: inline-block;
}
 .social-icon ul li a {
  margin-right: 5px;
  width: 35px;
  height: 35px;
  border:1px solid #ddd;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-out;
 }
 .social-icon ul{
  margin:0;
   padding:0;
}
 .social-icon ul li a:hover {
  background-color: var(--dark);
  border:1px solid var(--dark);
 }
  .social-icon ul li a i{
   line-height: 35px;
   color:#666;
  }
  .social-icon ul li a i:hover,
    .social-icon ul li a:hover i{
 
   color:var(--white);
  }
</style>

