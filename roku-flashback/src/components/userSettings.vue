<template>
  <div class="userSettings">
    <div
      class="col-md-6 col-12 m-auto"
    >
    <h2>User Settings</h2>
      <b-form
        class="col-12 m-auto"
        :ref="this.$store.state.user.id"
      >
        <b-form-input
          :placeholder="this.$store.state.user.name"
          id="uname-input"
          class="mt-3 col-12"
          v-model="editForm.name"
          name="uname"
        ></b-form-input>

        <b-form-group
          label="Child User?"
          class="mt-3 d-flex text-left justify-start"
        >
          <b-form-checkbox
            class="mt-3 d-flex justify-start"
            v-model="editForm.isKid"
            name="isKid"
            value="1"
            >Yes</b-form-checkbox
          >
        </b-form-group>

        <b-form-group
          label="Viewing Permission"
          class="mt-3 d-flex text-left justify-start"
        >
          <b-form-radio
            class="d-flex justify-start"
            v-model="editForm.viewPermission"
            name="adult"
            value="1"
            >All Ratings</b-form-radio
          >
          <b-form-radio
            class="mt-3 d-flex justify-start"
            v-model="editForm.viewPermission"
            name="young-adult"
            value="2"
            >G PG PG-13 R</b-form-radio
          >
          <b-form-radio
            class="mt-3 d-flex justify-start"
            v-model="editForm.viewPermission"
            name="teen"
            value="3"
            >G PG PG-13</b-form-radio
          >
          <b-form-radio
            class="mt-3 d-flex justify-start"
            v-model="editForm.viewPermission"
            name="young"
            value="4"
            >G PG</b-form-radio
          >
          <b-form-radio
            class="mt-3 d-flex justify-start"
            v-model="editForm.viewPermission"
            name="child"
            value="5"
            >G</b-form-radio
          >
        </b-form-group>

        <b-form-group
          label="Lock User?"
          class="mt-3 d-flex text-left justify-start"
        >
          <b-form-radio
            class="d-flex justify-start"
            v-model="editForm.isLocked"
            name="isLocked"
            value="1"
            >Yes</b-form-radio
          >
        </b-form-group>

        <b-form-group
          label="Select Avatar"
          class="mt-3 pl-0 col-md-12 col-10 d-flex text-left justify-start no-focus"
        >
          <div class="input-wrapper">
            <div class="avatar-container m-auto m-md-0 p-0">
              <div
                v-for="avatar in avatars"
                :key="avatar.id"
                :class="{ selectedAvatar: avatar.src == editForm.avatar }"
                @click="editForm.avatar = avatar.src"
                class="avatar-outter col-lg-3 p-lg-2 col-4 p-1"
              >
                <img :src="avatar.src" :alt="avatar.src" />
              </div>
            </div>
          </div>
        </b-form-group>

        <b-form-group class="mt-3 d-flex text-left justify-start">
          <b-button variant="primary" @click="editUser()"
            >Confirm Changes</b-button
          >
          <b-button class="ml-3" @click="editUserDrop = null"
            >Cancel Changes</b-button
          >
        </b-form-group>

        <p class="error">{{ error }}</p>
      </b-form>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService.js";
import AvatarService from "@/services/AvatarService.js";
export default {
  name: "UserSettings",
  data() {
    return {
      avatars: null,
      error: null,
      user: null,
      editForm: {
        name: null,
        avatar: null,
        viewPermission: null,
        isLocked: null,
        isKid: null
      }
    };
  },
  async mounted() {
      try {
        this.$data.user = (await UsersService.indexOne({
          id: this.$store.state.user.id
        })
        ).data;
      } catch (error) {
        const err = error.response.data.error;
        console.log(err);
      }
      try {
        this.avatars = (await AvatarService.index()).data;
      } catch (error) {
        const err = error.response.data.error;
        console.log(err);
      }
  },
  methods: {
  async editUser() {
      if (!this.$data.editForm.isKid == "1") {
        this.$data.editForm.isKid = this.$data.user.isKid;
      }
      if (!this.$data.editForm.isLocked) {
        this.$data.editForm.isLocked = this.$data.user.isLocked;
      }
      if (!this.$data.editForm.name) {
        this.$data.editForm.name = this.$data.user.name;
      }
      if (!this.$data.editForm.avatar) {
        this.$data.editForm.avatar = this.$data.user.avatar;
      }
      if (!this.$data.editForm.avatar) {
        this.$data.editForm.viewPermission = this.$data.user.viewPermission;
      }
      try {
        const editSuccess = (
          await UsersService.editUser({
            userId: this.$data.user.id,
            accId: this.$store.state.account.id,
            isKid: this.$data.editForm.isKid,
            isLocked: this.$data.editForm.isLocked,
            name: this.$data.editForm.name,
            avatar: this.$data.editForm.avatar,
            viewPermission: this.$data.editForm.viewPermission
          })
        ).data;
        if (editSuccess) {
          alert("Update Successful!")
          this.$data.editForm.viewPermission = null;
          this.$data.editForm.isKid = null;
          this.$data.editForm.isLocked = null;
          this.$data.editForm.name = null;
          this.$data.editForm.avatar = null;
          try {
            this.user = (
              await UsersService.indexOne({
                id: this.$store.state.user.id
              })
            ).data;
            const user = this.user;
            this.$store.dispatch("setUser", user);
          } catch (error) {
            const err = error.response.data.error;
            console.log(err);
          }
        }
      } catch (error) {
        this.$data.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userSettings {
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
form {
  .avatar-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 450px;
    overflow-y: scroll;
    border: thin solid white;
    cursor: default !important;
    img {
      max-width: 100%;
      max-height: 100%;
      padding: 8px;
      cursor: pointer !important;
    }
    .selectedAvatar {
      background: rgba($color: yellow, $alpha: 0.1);
      border: solid 2px yellow;
      padding: 4px;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: aqua;
}
* {
  color: white;
}
</style>
