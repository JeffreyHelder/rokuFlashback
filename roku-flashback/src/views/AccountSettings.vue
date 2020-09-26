<template>
  <div>
    <Header />
    <div class="accountPage">
      <AccountSettings />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import AccountSettings from "@/components/accountSettings.vue";

export default {
  name: "AccountSettingsPage",
  components: {
    Header,
    AccountSettings
  }
};
</script>

<style lang="scss">
.accountPage {
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
