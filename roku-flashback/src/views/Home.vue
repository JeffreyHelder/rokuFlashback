<template>
  <div class="home">
    <Landing v-if="!$store.state.isAccountLoggedIn" />
    <Header v-if="$store.state.isAccountLoggedIn" />
    <HelloWorld v-if="$store.state.isAccountLoggedIn" />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Landing,
    Header,
    HelloWorld
  }
};
</script>

<style lang="scss"></style>
