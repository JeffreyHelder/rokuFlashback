<template>
  <div>
    <router-link class="logo" to="/#">
      <img src="@/assets/img/logo/logo_full.svg" alt="Flasback Logo">
    </router-link>
    <div class="register" :style="{'backgroundImage':'url(https://as1.ftcdn.net/jpg/01/61/42/20/500_F_161422055_HKhz3lpcBZhH2ERvSUy8BNcDxtIoXvpe.jpg)'}">
      <Register />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";

export default {
  name: "RegisterPage",
  components: {
    Register
  }
};
</script>

<style lang="scss">
.logo{
  display: block;
  position: absolute;
  z-index: 999;
  padding: 20px;
  width: 200px;
}
.register{
  width: 100vW;
  height: 100%;
  min-height: 100vH;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  &::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100vW;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.4) );
    z-index: 950;
  }
}

</style>