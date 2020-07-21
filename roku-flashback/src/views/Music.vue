<template>
  <div class="main">
    <Header />
    <Music />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Music from "@/components/Music.vue";

export default {
  name: "MusicHome",
  components: {
    Music,
    Header
  }
};
</script>
