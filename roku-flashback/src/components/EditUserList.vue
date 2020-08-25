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
            <i @click="editUser(user.id)" class="pr-2">Edit</i>/<i
              @click="showAlert(user.id)"
              class="pl-2"
              >Delete</i
            >
          </p>
        </div>
      </div>
      <b-alert
        :ref="user.id"
        variant="danger"
        show
        fade
        class="popUpAlert"
        :class="{ hidden: user.id !== selected }"
      >
        <h4 class="alert-heading" style="font-weight:bolder;">Warning!</h4>
        <p>
          You are about to <b>permanently delete</b> the user {{ user.name }}!
        </p>
        <hr />
        <p class="mb-0">
          This can not be undone.<br />Do you wish to continue?
        </p>
        <hr />
        <b-button @click="deleteUser(user.id)" variant="danger" class="m-1">
          Yes, delete
        </b-button>
        <b-button @click="selected = undefined" variant="info" class="m-1">
          Cancel
        </b-button>
      </b-alert>
    </div>
    <div
      v-if="!$store.state.isUserMax"
      class="userContainer wannaBe"
      @click="addUser(user.id)"
    >
      <div class="imgWannaBe d-flex justify-content-center align-items-center">
        <p style="font-size:50px;padding:0;margin:0;">+</p>
      </div>
      <div class="infoStack">
        <h3>Add User</h3>
        <p>Max of 5 users per account</p>
      </div>
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
export default {
  name: "EditUserList",
  data() {
    return {
      users: null,
      selected: undefined
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
  * {
    transition: 0.2s;
  }
  &:hover {
    * {
      text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    }
    transform: scale(1.02);
  }
  img,
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
</style>
