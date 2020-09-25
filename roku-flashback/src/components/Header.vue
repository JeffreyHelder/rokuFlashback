<template>
  <div class="container fixed-top" id="header">
    <b-navbar style="max-width:1800px !important; margin:auto;" toggleable="lg">
      <b-navbar-brand href="#">
        <show-at breakpoint="mediumAndAbove">
          <img src="@/assets/img/logo/logo_full.svg" alt="Flasback Logo" />
        </show-at>
        <hide-at breakpoint="mediumAndAbove">
          <img src="@/assets/img/logo/logo_icon.svg" alt="Flasback Logo" />
        </hide-at>
      </b-navbar-brand>

      <b-navbar-nav class="top-nav">
        <!-- hide home for mobile -->
        <show-at breakpoint="mediumAndAbove">
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
        </show-at>
        <b-nav-item>
          <router-link to="/music">Music</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/series">Series</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/movies">Movies</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <show-at breakpoint="mediumAndAbove">
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 mr-2" type="submit">
              <i class="fas fa-search"></i>
            </b-button>
          </b-nav-form>

          <b-nav-item id="up-pro" ref="up-pro">
            <div
              @click="showit('showPro')"
              v-bind:class="{ active: showPro }"
              class="navicon"
            >
              <img
                :src="this.$store.state.user.avatar"
                :alt="this.$store.state.user.name"
                style="max-width:80%;max-height:80%;padding:0;"
              />
            </div>
            <transition name="slide-fade">
              <span v-if="showPro" id="upMenu" class="down-menu">
                <ul>
                  <li>
                    <router-link to="/userSettings"
                      ><i class="fas fa-user-cog"></i>User
                      Settings</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/userHistory"
                      ><i class="fas fa-history"></i>User History</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/login"
                      ><i class="fas fa-users"></i>Switch Users</router-link
                    >
                  </li>
                </ul>
              </span>
            </transition>
            <div
              v-if="showPro"
              @click="closeDrop('hidePro')"
              class="closefix"
              id="closeFix"
              style="top: 66px !important"
            ></div>
          </b-nav-item>

          <b-nav-item id="up-set" ref="up-set">
            <div
              @click="showit('showSet')"
              v-bind:class="{ active: showSet }"
              class="navicon"
            >
              <i class="fas fa-sliders-h"></i>
            </div>
            <transition name="slide-fade">
              <span v-if="showSet" id="upMenu" class="down-menu">
                <ul>
                  <li>
                    <router-link to="/about"
                      ><i class="fas fa-cog"></i>Account Settings</router-link
                    >
                  </li>
                  <li @click="logOut()" id="signout">
                    <router-link to="">
                      <i class="fas fa-sign-out-alt"></i>Sign Out
                    </router-link>
                  </li>
                </ul>
              </span>
            </transition>
            <div
              v-if="showSet"
              @click="closeDrop('hideSet')"
              class="closefix"
              id="closeFix"
              style="top: 66px !important"
            ></div>
          </b-nav-item>
        </b-navbar-nav>
      </show-at>
    </b-navbar>

    <!-- BOTTOM MOBILE NAV --->
    <hide-at breakpoint="mediumAndAbove">
      <div class="nav-bottom">
        <b-navbar-nav d-flex flex-row m-auto>
          <b-nav-item>
            <router-link to="/">
              <i class="fas fa-home"></i>
            </router-link>
          </b-nav-item>

          <b-nav-item id="up-ser" ref="up-ser">
            <div @click="showit('showSer')" v-bind:class="{ active: showSer }">
              <i class="fas fa-search"></i>
            </div>
            <transition name="slide-fade">
              <span v-if="showSer" id="upMenu" class="up-search">
                <b-nav-form>
                  <b-form-input
                    size="sm"
                    class="mr-sm-1 col-8"
                    placeholder="Search"
                  ></b-form-input>
                  <b-button size="sm" class="col-2 ml-2" type="submit">
                    <i class="fas fa-search"></i>
                  </b-button>
                </b-nav-form>
              </span>
            </transition>
            <div
              v-if="showSer"
              @click="closeDrop('hideSer')"
              class="closefix"
              id="closeFix"
            ></div>
          </b-nav-item>

          <b-nav-item id="up-pro" ref="up-pro">
            <div @click="showit('showPro')" v-bind:class="{ active: showPro }">
              <i class="fas fa-user"></i>
            </div>
            <transition name="slide-fade">
              <span v-if="showPro" id="upMenu" class="up-menu">
                <ul>
                  <li>
                    <router-link to="/userSettings"
                      ><i class="fas fa-user-cog"></i>User
                      Preferences</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/userHistory"
                      ><i class="fas fa-history"></i>User History</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/login"
                      ><i class="fas fa-users"></i>Switch Users</router-link
                    >
                  </li>
                </ul>
              </span>
            </transition>
            <div
              v-if="showPro"
              @click="closeDrop('hidePro')"
              class="closefix"
              id="closeFix"
            ></div>
          </b-nav-item>

          <b-nav-item id="up-set" ref="up-set">
            <div @click="showit('showSet')" v-bind:class="{ active: showSet }">
              <i class="fas fa-sliders-h"></i>
            </div>
            <transition name="slide-fade">
              <span v-if="showSet" id="upMenu" class="up-menu">
                <ul>
                  <li>
                    <router-link to="/about"
                      ><i class="fas fa-cog"></i>Account Settings</router-link
                    >
                  </li>
                  <li @click="logOut()" id="signout">
                    <router-link to="">
                      <i class="fas fa-sign-out-alt"></i>Sign Out
                    </router-link>
                  </li>
                </ul>
              </span>
            </transition>
            <div
              v-if="showSet"
              @click="closeDrop('hideSet')"
              class="closefix"
              id="closeFix"
            ></div>
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </hide-at>
  </div>
</template>

<script>
import { showAt, hideAt } from "vue-breakpoints";

export default {
  name: "Header",
  components: { hideAt, showAt },
  data: function() {
    return {
      showPro: false,
      showSet: false,
      showSer: false
    };
  },
  methods: {
    showit: function(thisMenu) {
      let newMenu = thisMenu;
      if (newMenu === "showPro") {
        if (this.$data.showPro === true) {
          this.$data.showPro = false;
        } else {
          this.$data.showSet = false;
          this.$data.showSer = false;
          this.$data.showPro = true;
        }
      }
      if (newMenu === "showSer") {
        if (this.$data.showSer === true) {
          this.$data.showSer = false;
        } else {
          this.$data.showSet = false;
          this.$data.showPro = false;
          this.$data.showSer = true;
        }
      }
      if (newMenu === "showSet") {
        if (this.$data.showSet === true) {
          this.$data.showSet = false;
        } else {
          this.$data.showSer = false;
          this.$data.showPro = false;
          this.$data.showSet = true;
        }
      }
    },
    closeDrop: function(thisClose) {
      let closeThis = thisClose;
      if (closeThis === "hideSer") {
        this.$data.showSer = false;
      }
      if (closeThis === "hidePro") {
        this.$data.showPro = false;
      }
      if (closeThis === "hideSet") {
        this.$data.showSet = false;
      }
    },
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setAccount", null);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#header {
  align-items: center !important;
  width: 100% !important;
  padding: 0 !important;
  background-color: black;
  margin: 0 !important;
  max-width: none !important;
}
img {
  height: 40px;
}
ul {
  display: flex !important;
  flex-direction: row !important;
}
.top-nav li {
  padding: 0 10px !important;
}
#up-set {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.navicon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transition: 0.15s;
  &:hover {
    box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.5);
  }
}
.nav-bottom {
  display: block;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: black;
  position: fixed !important;
  bottom: 0 !important;
  z-index: 997;
  justify-content: center;
}
.nav-bottom ul {
  width: 100% !important;
  align-items: center;
  justify-content: space-evenly;
  *{
    color: white !important;
  }
}
a * {
  color: white;
  &:hover{
    text-decoration: none;
    color: rgb(85, 185, 255);
  }
}
a.router-link-exact-active,
.router-link-exact-active * {
  color: rgb(0, 153, 255);
  transform: scale(1.2);
  translate: 0.5s;
}
.active * {
  color: rgb(0, 153, 255);
  transform: scale(1.25);
  translate: 0.5s;
}
.up-search {
  display: block;
  position: absolute;
  bottom: 50px;
  height: 30vh;
  left: 0;
  width: 100vw !important;
  margin: auto !important;
  padding: 10px;
  color: aqua;
  background-color: black;
  z-index: 995;
}
.up-menu {
  display: block;
  position: absolute;
  bottom: 50px;
  left: 35%;
  width: 65vw !important;
  margin: auto !important;
  height: auto !important;
  background-color: black;
  border-top-left-radius: 8px;
  z-index: 998;
  ul {
    flex-direction: column !important;
    list-style: none;
    padding: 15px 0 !important;
    align-items: start;
    text-decoration: none;
    li {
      padding: 15px;
      font-size: 16px;
      a {
        padding-left: 10px;
        svg{
          margin-right: 10px;
        }
      }
    }
  }
}
.down-menu {
  display: block;
  position: absolute;
  top: 66px;
  left: calc(100% - 300px);
  width: 300px !important;
  margin: auto !important;
  height: auto !important;
  color: aqua;
  background-color: black;
  border-bottom-left-radius: 8px;
  z-index: 999;
  ul {
    flex-direction: column !important;
    list-style: none;
    padding: 15px 0 !important;
    align-items: start;
    li {
      padding: 15px;
      font-size: 14px;
      *{
        color: white !important;
        transition: .2s;
      }
      &:hover{
        *{
          color: rgb(85, 185, 255) !important;
          text-decoration: none;
        }
      }
      a {
        padding-left: 10px;
        svg{
          margin-right: 10px;
        }
      }
    }
  }
}
.closefix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: calc(100vh - 50px) !important;
  z-index: 800;
  background-color: rgba($color: #000000, $alpha: 0.4);
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  background-color: grey;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
