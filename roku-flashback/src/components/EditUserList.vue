<template>
  <div class="users">
    <h1>Edit - Add - Remove</h1>
    <div
      v-for="user in users"
      :key="user.id"
      class="col-md-8 col-sm-11 m-auto position-relative"
    >
      <div class="userContainer">
        <img
          :src="user.avatar"
          :alt="user.name"
          style="max-width:100%;max-height:100%"
        />
        <div class="infoStack">
          <h3>{{ user.name }}</h3>
          <p>
            <i @click="showEditUser(user.id)" class="pr-2"> Edit </i>/
            <i @click="showAlert(user.id)" class="pl-2">
              Delete
            </i>
          </p>
        </div>
      </div>
      <b-form
        class="col-8 m-auto"
        :ref="user.id"
        :class="{ hidden: user.id !== editUserDrop }"
      >
        <b-form-input
          :placeholder="user.name"
          id="uname-input"
          class="mt-3 col-12"
          v-model="editForm.name"
          name="uname"
        ></b-form-input>

        <b-form-group
          label="Child User?"
          class="mt-3 d-flex text-left justify-start"
        >
          <b-form-radio
            class="mt-3 d-flex justify-start"
            v-model="editForm.isKid"
            name="isKid"
            value="1"
            >Yes</b-form-radio
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
          class="mt-3 pl-0 col-10 d-flex text-left justify-start no-focus"
        >
          <div class="input-wrapper">
            <div class="avatar-container m-auto m-md-0 p-0">
              <div
                v-for="avatar in avatars"
                :key="avatar.id"
                :class="{ selectedAvatar: avatar.src == editForm.avatar }"
                @click="editForm.avatar = avatar.src"
                class="avatar-outter col-4 p-1"
              >
                <img :src="avatar.src" :alt="avatar.src" />
              </div>
            </div>
          </div>
        </b-form-group>

        <b-form-group class="mt-3 d-flex text-left justify-start">
          <b-button variant="primary" @click="editUser(user)"
            >Confirm Changes</b-button
          >
          <b-button class="ml-3" @click="editUserDrop = null"
            >Cancel Changes</b-button
          >
        </b-form-group>

        <p class="error">{{ error }}</p>
      </b-form>
      <b-alert
        :ref="user.id"
        variant="danger"
        fade
        show
        class="popUpAlert"
        :class="{ hidden: user.id !== selected }"
      >
        <h4 class="alert-heading" style="font-weight:bolder;">Warning!</h4>
        <hr />
        <p>
          <i>Permanently deleting</i><br />
          <b>{{ user.name }}</b
          >.
          <br />
          This can not be undone.<br />Do you wish to continue?
        </p>
        <hr />
        <b-button @click="deleteUser(user.id)" variant="danger" class="m-1">
          Yes, delete
        </b-button>
        <b-button @click="selected = undefined" variant="info" class="m-1">
          No, cancel
        </b-button>
      </b-alert>
    </div>
    <div v-if="!$store.state.isUserMax" class="addContainer wannaBe">
      <div
        class="imgWannaBe d-flex justify-content-center align-items-center"
        @click="dropAddUser()"
      >
        <p style="font-size:50px;padding:0;margin:0;">+</p>
      </div>
      <div class="infoStack" @click="dropAddUser()">
        <h3>Add User</h3>
        <p>Max of 5 users per account</p>
      </div>
      <b-collapse v-model="addUserDrop" class="col-12 p-0">
        <b-form
          class="d-felx flex-column justify-start align-left text-align-left"
        >
          <b-form-input
            placeholder="Name"
            id="uname-input"
            class="mt-3 col-12"
            v-model="form.name"
            name="uname"
            required
          ></b-form-input>

          <b-form-group
            label="Child User?"
            class="mt-3 d-flex text-left justify-start"
            required
          >
            <b-form-radio
              class="mt-3 d-flex justify-start"
              v-model="form.isKid"
              name="isKid"
              value="1"
              >Yes</b-form-radio
            >
          </b-form-group>

          <b-form-group
            label="Viewing Permission"
            class="mt-3 d-flex text-left justify-start"
            required
          >
            <b-form-radio
              class="d-flex justify-start"
              v-model="form.viewPermission"
              name="adult"
              value="1"
              >All Ratings</b-form-radio
            >
            <b-form-radio
              class="mt-3 d-flex justify-start"
              v-model="form.viewPermission"
              name="young-adult"
              value="2"
              >G PG PG-13 R</b-form-radio
            >
            <b-form-radio
              class="mt-3 d-flex justify-start"
              v-model="form.viewPermission"
              name="teen"
              value="3"
              >G PG PG-13</b-form-radio
            >
            <b-form-radio
              class="mt-3 d-flex justify-start"
              v-model="form.viewPermission"
              name="young"
              value="4"
              >G PG</b-form-radio
            >
            <b-form-radio
              class="mt-3 d-flex justify-start"
              v-model="form.viewPermission"
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
              v-model="form.isLocked"
              name="isLocked"
              value="1"
              >Yes</b-form-radio
            >
          </b-form-group>

          <b-form-group
            label="Select Avatar"
            class="mt-3 pl-0 col-10 d-flex text-left justify-start no-focus"
          >
            <div class="input-wrapper">
              <div class="avatar-container m-auto m-md-0 p-0">
                <div
                  v-for="avatar in avatars"
                  :key="avatar.id"
                  :class="{ selectedAvatar: avatar.src == form.avatar }"
                  @click="form.avatar = avatar.src"
                  class="avatar-outter col-4 p-1"
                >
                  <img :src="avatar.src" :alt="avatar.src" />
                </div>
              </div>
            </div>
          </b-form-group>

          <b-form-group class="mt-3 d-flex text-left justify-start">
            <b-button variant="primary" @click="addUser">Add User</b-button>
            <b-button class="ml-3" @click="addUserDrop = !addUserDrop"
              >Cancel</b-button
            >
          </b-form-group>

          <p class="error">{{ error }}</p>
        </b-form>
      </b-collapse>
    </div>
    <div v-if="$store.state.isUserMax" class="userContainer wannaBe">
      <div class="imgWannaBe d-flex justify-content-center align-items-center">
        <p style="font-size:50px;padding:0;margin:0;">!</p>
      </div>
      <div class="infoStack">
        <h3>Can Not Add User</h3>
        <p>Max of 5 users per account</p>
      </div>
    </div>
    <div class="popUp" v-if="$data.selected"></div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService.js";
import AvatarService from "@/services/AvatarService.js";
export default {
  name: "EditUserList",
  data() {
    return {
      addUserDrop: false,
      editUserDrop: false,
      error: null,
      users: null,
      selected: undefined,
      avatars: null,
      form: {
        name: null,
        avatar: null,
        viewPermission: null,
        isLocked: null,
        isKid: null
      },
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
      this.users = (
        await UsersService.index({
          accId: this.$store.state.account.id
        })
      ).data;
      const userCount = this.users.length;
      this.$store.dispatch("setIsUserMax", userCount);
    } catch (error) {
      const err = error.response.data.error;
      console.log(err);
    }
  },
  methods: {
    async dropAddUser() {
      this.$data.addUserDrop = !this.$data.addUserDrop;
      try {
        this.avatars = (await AvatarService.index()).data;
      } catch (error) {
        const err = error.response.data.error;
        console.log(err);
      }
    },
    async addUser() {
      if (
        this.$data.form.name !== "" &&
        this.$data.form.avatar !== "" &&
        this.$data.form.viewPermission !== ""
      ) {
        try {
          const addSuccess = (
            await UsersService.addUser({
              accId: this.$store.state.account.id,
              isKid: this.$data.form.isKid,
              isLocked: this.$data.form.isLocked,
              name: this.$data.form.name,
              avatar: this.$data.form.avatar,
              viewPermission: this.$$data.form.viewPermission
            })
          ).data;
          if (addSuccess) {
            this.$data.addUserDrop = false;
            this.$data.error = addSuccess.data;
            this.$data.form.viewPermission = null;
            this.$data.form.isKid = null;
            this.$data.form.isLocked = null;
            this.$data.form.name = null;
            this.$data.form.avatar = null;
            try {
              this.users = (
                await UsersService.index({
                  accId: this.$store.state.account.id
                })
              ).data;
              const userCount = this.users.length;
              this.$store.dispatch("setIsUserMax", userCount);
            } catch (error) {
              const err = error.response.data.error;
              console.log(err);
            }
          }
        } catch (error) {
          this.$data.error = error.response.data.error;
        }
      } else {
        this.$data.error = "Please Enter all required feilds";
      }
    },
    async editUser(user) {
      if (!this.$data.editForm.isKid) {
        this.$data.editForm.isKid = user.isKid;
      }
      if (!this.$data.editForm.isLocked) {
        this.$data.editForm.isLocked = user.isLocked;
      }
      if (!this.$data.editForm.name) {
        this.$data.editForm.name = user.name;
      }
      if (!this.$data.editForm.avatar) {
        this.$data.editForm.avatar = user.avatar;
      }
      if (!this.$data.editForm.avatar) {
        this.$data.editForm.viewPermission = user.viewPermission;
      }
      try {
        const editSuccess = (
          await UsersService.editUser({
            userId: user.id,
            accId: this.$store.state.account.id,
            isKid: this.$data.editForm.isKid,
            isLocked: this.$data.editForm.isLocked,
            name: this.$data.editForm.name,
            avatar: this.$data.editForm.avatar,
            viewPermission: this.$data.editForm.viewPermission
          })
        ).data;
        if (editSuccess) {
          this.$data.editUserDrop = false;
          this.$data.error = editSuccess.data;
          this.$data.editForm.viewPermission = null;
          this.$data.editForm.isKid = null;
          this.$data.editForm.isLocked = null;
          this.$data.editForm.name = null;
          this.$data.editForm.avatar = null;
          try {
            this.users = (
              await UsersService.index({
                accId: this.$store.state.account.id
              })
            ).data;
            const userCount = this.users.length;
            this.$store.dispatch("setIsUserMax", userCount);
          } catch (error) {
            const err = error.response.data.error;
            console.log(err);
          }
        }
      } catch (error) {
        this.$data.error = error.response.data.error;
      }
    },
    async deleteUser(userId) {
      try {
        const DeleteSuccess = (
          await UsersService.delete({
            userId: userId
          })
        ).data;
        if (DeleteSuccess) {
          this.$data.selected = undefined;
          try {
            this.users = (
              await UsersService.index({
                accId: this.$store.state.account.id
              })
            ).data;
            const userCount = this.users.length;
            this.$store.dispatch("setIsUserMax", userCount);
          } catch (error) {
            const err = error.response.data.error;
            console.log(err);
          }
        }
      } catch (error) {
        alert("that didn't work");
      }
    },
    showAlert(userId) {
      this.$data.selected = userId;
    },
    async showEditUser(userId) {
      this.$data.editForm.name = null;
      this.$data.editForm.avatar = null;
      this.$data.editForm.viewPermission = null;
      this.$data.editForm.isLocked = null;
      this.$data.editForm.isKid = null;
      if (userId == this.$data.editUserDrop) {
        this.$data.editUserDrop = null;
      } else {
        this.$data.editUserDrop = userId;
      }
      try {
        this.avatars = (await AvatarService.index()).data;
      } catch (error) {
        const err = error.response.data.error;
        console.log(err);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hidden {
  display: none !important;
}
.popUpAlert {
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 270px;
  top: calc(50% - 135px);
  left: calc(50% - 150px);
  p,
  b,
  h4 {
    color: black;
  }
  i {
    font-weight: bold;
    color: red;
  }
}
.popUp {
  position: fixed;
  width: 100%;
  height: calc(100% + 66px);
  top: 0px;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.7);
}
.users {
  margin-top: 20px;
  position: relative;
  max-width: 100vw;
  height: 100%;
  min-height: calc(100vh - 92);
  padding: 50px 0;
  z-index: 995;
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
  transition: 0.15s;
}
h1 {
  margin-bottom: 50px;
}
.wannaBe {
  cursor: pointer;
}
.userContainer {
  margin: 10px auto;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 450px;
  border-bottom: thin solid rgb(54, 54, 54);
  transition: 0.2s;
  * {
    transition: 0.2s;
  }
  &:hover {
    * {
      text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
    }
    box-shadow: 0px 0px 8px 2px rgba(255, 255, 255, 0.3);
    img,
    .imgWannaBe {
      box-shadow: none;
    }
  }
  img,
  .imgWannaBe {
    margin: 0;
    margin-right: 20px;
    padding: 3px 3px 0 3px;
    width: 75px;
    height: 75px;
    box-shadow: 0px 0px 8px 2px rgba(255, 255, 255, 0.3);
  }
  h3 {
    font-size: 24px;
    margin-top: 5px;
    text-align: left;
    font-weight: normal;
  }
  p {
    margin-top: 5px;
    text-align: left;
    font-weight: normal;
    i {
      &:hover {
        color: cyan;
        cursor: pointer;
      }
    }
  }
}
.addContainer {
  margin: 10px auto;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 450px;
  border-bottom: thin solid rgb(54, 54, 54);
  .imgWannaBe {
    margin: 0;
    margin-right: 20px;
    padding: 3px 3px 0 3px;
    width: 75px;
    height: 75px;
    box-shadow: 0px 0px 8px 2px rgba($color: #ffffff, $alpha: 0.3);
  }
  h3 {
    font-size: 24px;
    margin-top: 5px;
    text-align: left;
    font-weight: normal;
  }
  p {
    margin-top: 5px;
    text-align: left;
    font-weight: normal;
    i {
      &:hover {
        color: cyan;
        cursor: pointer;
      }
    }
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
</style>
