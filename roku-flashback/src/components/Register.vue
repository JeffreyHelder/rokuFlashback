<template>
  <div class="wrapper">
    <b-collapse visible id="reg">
      <div class="title">
        <h3>Register</h3>
      </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-collapse visible id="personal">
            <b-form-group
              id="input-group-1"
              label="Lets start with some basic info :"
              label-for="input-1"
              description=""
              class="text-left"
            >
              <b-form-input
                id="input-1"
                class="mb-3"
                v-model="form.fname"
                type="name"
                required
                placeholder="First Name"
              ></b-form-input>

              <b-form-input
                id="input-1"
                v-model="form.lname"
                type="name"
                required
                placeholder="Last Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              description=""
              class="text-left"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Email Address"
              ></b-form-input>
            </b-form-group>

            <b-container class="d-flex p-0 justify-content-start">
              <b-button v-b-toggle="['personal', 'info']" variant="primary">Next</b-button>
            <!--Make button call function {check if form sections are filled out before v-b-toggle} --->
            </b-container>

          </b-collapse>

          <b-collapse id="info">
              <b-form-group
                id="input-group-1"
                label="Now create a password :"
                label-for="pass"
                description="It has to be 8+ charaters"
                class="text-left"
              >
                <b-form-input
                  id="pass"
                  class="mb-4"
                  v-model="form.fname"
                  type="password"
                  required
                  placeholder="Password"
                ></b-form-input>

                <b-form-input
                  id="passcheck"
                  v-model="form.lname"
                  type="password"
                  required
                  placeholder="Confirm Password"
                ></b-form-input>
              </b-form-group>

            <b-container class="d-flex p-0 justify-content-start">
              <b-button type="submit" variant="primary">Next</b-button>
              <!-- when submit and checking => v-b-toggle spinner --->
              <b-button class="ml-3" v-b-toggle="['personal', 'info']" variant="secondary">Back</b-button>
              <b-button class="ml-3" v-b-toggle="['reg', 'spinner']" variant="danger">TempButton</b-button>
            </b-container>

          </b-collapse>

      </b-form>
      <div class="signin">
        <p>Already have an account?<router-link to="/login">Sign-in</router-link></p>
      </div>
    </b-collapse>

    <b-collapse id="spinner">
      <div class="spinner">
        <i class="fas fa-spinner"></i>
      </div>
    </b-collapse>

  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        fname:'',
        lname:'',
        email:'',
        emailcheck: '',
        pass: ''
      },
      show: true
    }
  },
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.pass = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  color: white;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 350px;
  height: 400px;
  margin-top: calc(50vH - 200px);
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0px 0px 8px 1px rgba(255,255,255, .1);
  z-index: 999;
  .title{
    height: 60px;
    align-items: flex-end;
    justify-content: flex-start;
    display: flex;
    h3{
      color: white; 
      font-weight: bold; 
      text-shadow: 0px 0px 2px black;
      margin-left: 20px;
    }
  }
  form{
    height: 280px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    label{
      margin-left: 20px;
    }
    input{color: black;}
  }
  .signin{
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: flex-end;
    p{color: white;}
    a{color: rgb(26, 142, 250); margin-left: 10px;}
  }
}
#spinner{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.spinner{
  display: flex;
  width: 100px;
  height: 100px;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg{
    color:cyan; 
    width: 100%;
    height: 100%;
    animation: rotating 1.5s linear infinite;
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
