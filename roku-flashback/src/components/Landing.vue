<template>
  <div class="landing" :style="{'backgroundImage':'url(https://as1.ftcdn.net/jpg/01/61/42/20/500_F_161422055_HKhz3lpcBZhH2ERvSUy8BNcDxtIoXvpe.jpg)'}">

    <b-navbar style="max-width:1800px !important; margin:auto; z-index: 999;" toggleable="lg">
      <b-button class="ml-auto mt-2 mr-2"><router-link to="/login">Sign In</router-link></b-button>
    </b-navbar>
    
    <div class="col-12 m-auto" style="z-index:999; margin-top:40px !important; max-width: 1800px;">
      <div class="col-12 col-md-8 col-lg-9 col-xl-7">
        <div class="row col-12 mb-5">
          <img style="height:55px;" src="@/assets/img/logo/Roku_logo.svg" alt="Roku Logo">
          <img style="height:55px; margin-left:40px;" src="@/assets/img/logo/logo_full.svg" alt="Flashback Logo">
        </div>
        <div class="text-left mb-5">
          <h2>All Your Favorite Past Shows, Movies, And Music!</h2>
          <h3>Available 24/7 on Mobile, Tablet, and Desktop!</h3>
        </div>
        <div class="row col-12 justify-content-around">
          <div class="col-8 col-md-5 text-left row justify-content-between mb-5" style="height:inherit; max-width:250px !important; min-width: 235px !important; height:250px;">
            <h4>30 Day Free Trial</h4>
            <p>Start Streaming risk free today! Cancel anytime; Auto renewal</p>
            <router-link to="/register"><b-button class="w-100" style="height:45px;">SIGN UP TODAY</b-button></router-link>
          </div>
          <div class="col-8 col-md-5 text-left row justify-content-between mb-5" style="height:inherit; max-width:250px !important; min-width: 235px !important; height:250px;">
            <h4>$5.99<i>/month</i></h4>
            <p>Monthly subscription. no ads, no down time. Monthly or Annually.</p>
            <router-link to="/register"><b-button class="w-100" style="height:45px;">SUBSCRIBE TODAY</b-button></router-link>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  color: white;
}
h2{font-size: 24px; font-weight: bold;}
h3{font-size: 22px;}
h4{
  font-size: 26px;
  i{font-size: 24px; font-style: normal;}
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1.5px solid antiquewhite;
  }


.landing{
  width: 100vW;
  height: 100%;
  min-height: 100vH;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
    overflow: hidden;
  &::after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100vW;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.4) );
    z-index: 950;
  }
}
</style>
