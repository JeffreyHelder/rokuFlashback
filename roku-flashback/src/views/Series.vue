<template>
  <div class="main">
    <Header />
    <Series />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Series from "@/components/Series.vue";

export default {
  name: "SeriesHome",
  components: {
    Series,
    Header
  }
};
</script>
