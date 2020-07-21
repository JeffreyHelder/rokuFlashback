<template>
  <div class="about">
    <Header />
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "About",
  components: {
    HelloWorld,
    Header
  }
};
</script>