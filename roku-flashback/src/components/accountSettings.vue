<template>
  <div class="userSettings">
    <div class="col-md-6 col-12 m-auto">
      <h2>Account Settings</h2>
      <b-form
        class="col-lg-8 col-12 m-auto"
        :ref="this.$store.state.account.id"
      >
        <label for="fname" class="mt-4 mb-0">First Name:</label>

        <b-form-input
          :placeholder="this.$store.state.account.fname"
          id="fname-input"
          class="col-12"
          v-model="editForm.fname"
          name="fname"
        ></b-form-input>

        <label for="fname" class="mt-4 mb-0">Last Name:</label>

        <b-form-input
          :placeholder="this.$store.state.account.lname"
          id="lname-input"
          class="col-12"
          v-model="editForm.lname"
          name="lname"
        ></b-form-input>

        <label for="email" class="mt-4 mb-0">Email:</label>

        <b-form-input
          :placeholder="this.$store.state.account.email"
          id="email-input"
          class="col-12"
          v-model="editForm.email"
          name="email"
          type="email"
        ></b-form-input>

        <label for="password" class="mt-4 mb-0">New Password:</label>

        <b-form-input
          id="password-input"
          class="col-12"
          v-model="editForm.password"
          name="password"
          type="password"
        ></b-form-input>

        <label for="confPassword" class="mt-4 mb-0"
          >Confirm New Password:</label
        >

        <b-form-input
          id="comfPassword-input"
          class="col-12"
          v-model="editForm.confPassword"
          name="confPassword"
          type="password"
        ></b-form-input>

        <b-form-group class="mt-5 d-flex text-left justify-start">
          <b-button variant="primary" @click="editAccount()"
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
import AccountsService from "@/services/AccountsService.js";
export default {
  name: "UserSettings",
  data() {
    return {
      error: null,
      account: null,
      editForm: {
        fname: null,
        lname: null,
        email: null,
        password: null,
        confPassword: null
      }
    };
  },
  async mounted() {
    try {
      this.$data.account = (
        await AccountsService.index({
          id: this.$store.state.account.id
        })
      ).data;
    } catch (error) {
      const err = error.response.data.error;
      console.log(err);
    }
  },
  methods: {
    async editAccount() {
      if (!this.$data.editForm.fname) {
        this.$data.editForm.fname = this.$data.account.fname;
      }
      if (!this.$data.editForm.lname) {
        this.$data.editForm.lname = this.$data.account.lname;
      }
      if (!this.$data.editForm.email) {
        this.$data.editForm.email = this.$data.account.email;
      }
      if (!this.$data.editForm.password) {
        this.$data.editForm.password = this.$data.account.password;
      }
      try {
        const editSuccess = (
          await AccountsService.editUser({
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
          alert("Update Successful!");
          this.$data.editForm.viewPermission = null;
          this.$data.editForm.isKid = null;
          this.$data.editForm.isLocked = null;
          this.$data.editForm.name = null;
          this.$data.editForm.avatar = null;
          try {
            this.user = (
              await AccountsService.indexOne({
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
input {
  color: black;
}
</style>
