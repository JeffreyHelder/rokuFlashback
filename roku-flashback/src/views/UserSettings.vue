<template>
  <div>
    <Header />
    <div class="editPage">
      <UserSettings />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import UserSettings from "@/components/userSettings.vue";

export default {
  name: "UserSettingsPage",
  components: {
    Header,
    UserSettings
  }
};
</script>

<style lang="scss">
.editPage {
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
