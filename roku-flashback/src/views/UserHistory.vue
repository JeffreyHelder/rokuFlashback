<template>
  <div>
    <Header />
    <div class="historyPage">
      <UserHistory />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import UserHistory from "@/components/userHistory.vue";

export default {
  name: "UserHistoryPage",
  components: {
    Header,
    UserHistory
  }
};
</script>

<style lang="scss">
.historyPage {
  margin-top: 66px;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
    to right,
    rgb(0, 0, 0),
    rgba(0, 0, 0, 0.808)
  );
}
</style>
