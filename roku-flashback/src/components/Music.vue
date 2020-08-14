<template>
  <div class="landing">
    <div class="col-11 m-auto">
      <h1>Temp Music Component</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Music"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
}
.landing {
  width: 100%;
  height: calc(100vh - 66px);
  padding: 100px 0;
  background-color: rgb(63, 63, 63);
  @media screen and (max-width: 743px) {
    height: calc(100vh - 116px);
  }
  h1 {
    color: beige;
  }
}
</style>
