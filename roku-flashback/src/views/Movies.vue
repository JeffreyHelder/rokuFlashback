<template>
  <div class="main">
    <Header />
    <Movies />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Movies from "@/components/Movies.vue";

export default {
  name: "MoviesHome",
  components: {
    Movies,
    Header
  }
};
</script>
