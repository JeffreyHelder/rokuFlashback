<template>
  <div class="users">
    <div class="col-md-8 col-sm-11 m-auto">
      <h1>Who's Watching?</h1>

      <div class="userContainer">
        <div
          v-for="user in users"
          :key="user.id"
          @click="userLogin(user)"
          class="userIcons"
          :id="user.id"
        >
          <div class="avatar-container">
            <img
              :src="user.avatar"
              :alt="user.name"
              style="max-width:100%;max-height:100%"
            />
          </div>
          <h3>{{ user.name }}</h3>
        </div>
        <div
          v-if="!$store.state.isUserMax"
          @click="linkToEditUser()"
          class="userIcons"
        >
          <div class="avatar-container">
            <div
              class="imgWannaBe"
              style="width:100%;height:100%;display:flex;justify-content:center;"
            >
              <p
                style="font-size:80px;margin:0;text-shadow:0 0 8px rgba(0,0,0,.8)"
              >
                +
              </p>
            </div>
          </div>
          <h3>Add User</h3>
        </div>
        <div class="editRemove col-12">
          <b-button @click="linkToEditUser()" size="sm" class="my-2 my-sm-0">
            Edit / Remove User
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService.js";
export default {
  name: "Users",
  data() {
    return {
      users: null
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
    userLogin(user) {
      this.selectedUser = user;
      this.$store.dispatch("setUser", this.selectedUser);
    },
    linkToEditUser() {
      this.$router.push("/editUsers");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.users {
  position: relative;
  margin-top: 92px;
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 92);
  padding: 50px 0;
  z-index: 999;
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

.userContainer {
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .avatar-container {
    margin: auto;
    width: 125px;
    height: 125px;
    box-shadow: 0px 0px 10px 3px rgba($color: #ffffff, $alpha: 0.3);
    border-radius: 50%;
    overflow: hidden;
    img,
    .imgWannaBe {
      padding: 5px;
      background-color: rgba($color: #ffffff, $alpha: 0.3);
    }
  }
  .userIcons {
    margin: auto 20px;
    margin-bottom: 40px;
    cursor: pointer;
    &:hover {
      .avatar-container {
        transform: scale(1.03);
        box-shadow: 0px 0px 15px 3px rgba($color: #ffffff, $alpha: 0.5);
        img,
        .imgWannaBe {
          background-color: rgba($color: #ffffff, $alpha: 0.4);
        }
      }
    }
  }
  h3 {
    font-size: 24px;
    margin-top: 5px;
    font-weight: normal;
  }
}
</style>
