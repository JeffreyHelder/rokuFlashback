<template>
  <div class="wrapper">
    <div class="title">
      <h3>Sign In</h3>
    </div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          description=""
          class="text-left"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Password:" 
        label-for="input-2"
        class="text-left"
      >
        <b-form-input
          id="input-2"
          v-model="form.pass"
          type="password"
          required
          placeholder="password"
        ></b-form-input>
      </b-form-group>

      <b-container class="d-flex justify-content-around">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="dark">Reset</b-button>
      </b-container>

    </b-form>
    <div class="signup">
      <p>Don't have an account?<router-link to="/register">Sign-up</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
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
  .signup{
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: flex-end;
    p{color: white;}
    a{color: rgb(26, 142, 250); margin-left: 10px;}
  }
}
</style>
