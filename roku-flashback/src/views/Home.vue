<template>
  <div class="home">
    <Header />
    <div class="main">
      <Landing />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    Header,
    Landing
  }
};
</script>

<style lang="scss">
.main{
  margin-top: 66px;
  @media screen and (max-width: 743px) {
    margin-bottom: 50px;
  }
}
</style>