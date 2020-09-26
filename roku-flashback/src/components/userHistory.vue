<template>
  <div class="userHistroy">
    <div class="col-md-6 col-12 m-auto">
      <h2>User History Temp</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHistory"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userHistroy {
  margin-top: 66px;
  width: 100%;
  min-height: calc(100vh - 66px);
  height: 100%;
  padding: 100px 0;
  background-color: rgb(63, 63, 63);
  @media screen and (max-width: 743px) {
    min-height: calc(100vh - 116px);
  }
}
* {
  color: white;
}
</style>
