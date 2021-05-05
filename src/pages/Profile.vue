<template>
 <Menu />
  <div class="row gx-5">
    <div class="col-xl-8 col-lg-7 col-md-6">
      <div class="container">
        <div class="cover-photo">
          <img class="profile" src="@/assets/img/faces/avatar.jpg" alt="..." />
        </div>
        <div class="profile-name">
          {{ user.firstname }} {{ user.lastname }}
        </div>
        <p class="about"> Email: {{ user.email }}</p>
         <label for="floatingInput">
                      <i class="bi bi-person-bounding-box"></i>&nbsp;Cambiar
                      imagen de perfil
                    </label>
        <div class="form-floating mb-3 custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                    />
                  </div>
        <button
                  class="btn btn-danger btn-xs"
                  @click="deleteMessage(Message._id)"
                >
                  <i class="fa fa-trash-o"></i>
                </button>
                 <hr class="border" />
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
button, input, optgroup, select, textarea {
    margin: 0;
  font-family: 'Font Awesome 5 Free';
    /* font-size: inherit; */
    /* line-height: inherit; */
}
body {
  font-family: "lato", sans-serif;
  background-color: #f1f2f5;
}
h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}
/* lista */
.container {
  user-select: none;
  margin: 10px auto;
  margin-left: 5.5em;
  background: #f4f3ef;
  color: #b3b8cd;
  border-radius: 5px;
  width: 650px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.75);
}
.cover-photo {
  background: url(https://bestanimations.com/media/i-love-you/925483873iloveyou-languages-gif.gif);
  background-color: rgb(226, 61, 61);
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.profile {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #f4f3ef;
  padding: 7px;
  background: #f4f3ef;
}
.profile-name {
  font-size: 25px;
  font-weight: bold;
  margin: 27px 0 0 120px;
}
.about {
  margin-top: 35px;
  line-height: 21px;
}

</style>

