<template>
  <div class="users">
    <div
      class="col-lg-6 col-md-8 col-sm-11 m-auto"
    >
      <h1>Who's Watching?</h1>

      <div class="userContainer">
        <div v-for="user in users" :key="user.name" class="userIcons">
          <div class="avatar-container">
            <img
              :src="user.avatar"
              :alt="user.name"
              style="max-width:100%;max-height:100%"
            />
          </div>
          <h3>{{ user.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: [
        {
          name: "Harold Helder",
          avatar: "/avatars/cinema/svg/cinema-016.svg"
        },
        {
          name: "Jeffrey David Helder",
          avatar: "/avatars/cute/svg/cute-030.svg"
        },
        {
          name: "Jennifer",
          avatar: "/avatars/masked/svg/masked-060.svg"
        },
        {
          name: "Dave MiniCactus",
          avatar: "/avatars/cinema/svg/cinema-024.svg"
        },
        {
          name: "Bob",
          avatar: "/avatars/cute/svg/cute-002.svg"
        },
        {
          name: "Bobby",
          avatar: "/avatars/masked/svg/masked-040.svg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.users {
  position: relative;
  margin-top: 92px;
  width: 100vW;
  height: 100%;
  min-height: calc(100vH - 92);
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
  transition: .15s;
}

.userContainer {
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .avatar-container{
    margin: auto;
    width:125px;
    height:125px;
    box-shadow: 0px 0px 10px 3px rgba($color: #ffffff, $alpha: .3);
    border-radius: 50%;
    overflow: hidden;
    img {
      padding: 5px;
      background-color: rgba($color: #ffffff, $alpha: .3);
    }
  }
  .userIcons{
    margin: auto 20px;
    margin-bottom: 40px;
    cursor: pointer;
    &:hover{
      .avatar-container {
        transform: scale(1.03);
        box-shadow: 0px 0px 15px 3px rgba($color: #ffffff, $alpha: .5);
        img {
          background-color: rgba($color: #ffffff, $alpha: .4);
        }
      }
    }
  }
  h3{
    font-size: 24px;
    font-weight: normal;
  }
}
</style>
