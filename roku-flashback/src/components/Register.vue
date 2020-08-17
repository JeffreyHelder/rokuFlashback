<template>
  <div class="wrapper">
    <b-collapse visible id="reg">
      <div class="title">
        <h3>Register</h3>
      </div>
      <b-form @submit="onSubmit" v-if="show">
        <b-collapse visible id="name-section">
          <b-form-group
            id="name-input"
            label="Lets start with some basic info :"
            class="text-left"
          >
            <b-form-input
              id="fname-input"
              class="mb-3"
              v-model="form.name.fname"
              name="fname"
              required
              placeholder="First Name"
            ></b-form-input>

            <b-form-input
              id="lname-input"
              v-model="form.name.lname"
              name="lname"
              required
              placeholder="Last Name"
            ></b-form-input>
          </b-form-group>

          <p class="form-message">{{ form.name.message }}</p>

          <b-container class="d-flex p-0 justify-content-start">
            <b-button
              disabled
              ref="nameNext"
              id="nameNext"
              v-b-toggle="['name-section', 'email-section']"
              variant="primary"
              >Next</b-button
            >
            <!--Make button call function {check if form sections are filled out before v-b-toggle} --->
          </b-container>
        </b-collapse>

        <b-collapse id="email-section">
          <b-form-group
            id="email-input"
            label="Now your email :"
            class="text-left"
          >
            <b-form-input
              id="email"
              class="mb-4"
              v-model="form.email.email"
              type="email"
              name="email"
              required
              placeholder="Email.."
            ></b-form-input>

            <b-form-input
              id="confemail"
              v-model="form.email.confemail"
              type="email"
              name="confemail"
              required
              placeholder="Confirm Email.."
            ></b-form-input>
          </b-form-group>

          <p class="form-message">{{ form.email.message }}</p>

          <b-container class="d-flex p-0 justify-content-start">
            <b-button
              disabled
              ref="emailNext"
              id="emailNext"
              v-b-toggle="['email-section', 'password-section']"
              variant="primary"
              >Next</b-button
            >
            <!--Make button call function {check if form sections are match out before v-b-toggle} --->
            <b-button
              class="ml-3"
              v-b-toggle="['email-section', 'name-section']"
              variant="secondary"
              >Back</b-button
            >
          </b-container>
        </b-collapse>

        <b-collapse id="password-section">
          <b-form-group
            id="password-input"
            label="Now create a password :"
            label-for="pass"
            class="text-left"
          >
            <b-form-input
              id="pass"
              class="mb-4"
              v-model="form.password.pass"
              type="password"
              name="pass"
              required
              placeholder="Password"
            ></b-form-input>

            <b-form-input
              id="passcheck"
              v-model="form.password.confpass"
              type="password"
              name="confpass"
              required
              placeholder="Confirm Password"
            ></b-form-input>
          </b-form-group>

          <p class="form-message">{{ form.password.message }}</p>

          <b-container class="d-flex p-0 justify-content-start">
            <b-button
              disabled
              ref="passwordNext"
              id="passwordNext"
              v-b-toggle="['password-section', 'confirm-section']"
              variant="primary"
              >Next</b-button
            >
            <b-button
              class="ml-3"
              v-b-toggle="['password-section', 'email-section']"
              variant="secondary"
              >Back</b-button
            >
          </b-container>
        </b-collapse>

        <b-collapse id="confirm-section">
          <b-form-group
            id="password-input"
            label="Confirm Everything Is Good!"
            class="text-left"
          >
            <div class="form-control mb-2">
              <p style="color:black;">First Name: {{ form.name.fname }}</p>
            </div>
            <div class="form-control mb-2">
              <p style="color:black;">Last Name: {{ form.name.lname }}</p>
            </div>
            <div class="form-control mb-2">
              <p style="color:black;">Email: {{ form.email.email }}</p>
            </div>
            <div class="form-control mb-2">
              <p style="color:black;">
                Password: {{ form.password.passCount }}
              </p>
            </div>
          </b-form-group>

          <b-container class="d-flex p-0 justify-content-start">
            <b-button
              id="confirmNext"
              type="submit"
              variant="primary"
              v-b-toggle="['reg', 'result-section']"
              >Confirm</b-button
            >
            <!-- when submit and checking => v-b-toggle spinner --->
            <b-button
              class="ml-3"
              v-b-toggle="['password-section', 'confirm-section']"
              variant="secondary"
              >Back</b-button
            >
            <router-link class="ml-3" to="/"
              ><b-button variant="danger">Cancel</b-button></router-link
            >
          </b-container>
        </b-collapse>
      </b-form>
      <div class="signin">
        <p>
          Already have an account?<router-link to="/login">Sign-in</router-link>
        </p>
      </div>
    </b-collapse>

    <b-collapse id="result-section">
      <b-collapse visible id="spinner" class="spinner">
        <p>
          Working..
        </p>
        <i style="color:cyan;" class="fas fa-spinner"></i>
        <p>
          <em v-b-toggle="['spinner', 'check']">one moment please</em>
          <!-- <em>one moment please</em> -->
        </p>
      </b-collapse>

      <b-collapse id="check" class="check">
        <p>
          All is good!
        </p>
        <i style="color:greenyellow;" class="far fa-check-circle"></i>
        <p>
          <em v-b-toggle="['check', 'error']">Log In Here</em>
          <!-- <em><router-link to="/login">Log In Here</router-link></em> -->
        </p>
      </b-collapse>

      <b-collapse id="error" class="error">
        <p>
          Oops! Something went wrong!
        </p>
        <i style="color:red;" class="far fa-times-circle"></i>
        <p>
          <em v-b-toggle="['error', 'usererror']">Try Again?</em>
          <!-- <em><a @click="reload" href="">Try Again?</a></em> -->
        </p>
      </b-collapse>

      <b-collapse id="usererror" class="error">
        <p>
          Looks like that email is already in use!
        </p>
        <i style="color:orange;" class="far fa-question-circle"></i>
        <p>
          <em v-b-toggle="['usererror', 'spinner']">Try Again / Log In</em>
          <!-- <em><a @click="reload" href="">Try Again</a> / <router-link to="/login">Log In</router-link></em> -->
        </p>
      </b-collapse>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: {
          fname: "",
          lname: "",
          message: "enter first and last to continue"
        },
        email: {
          email: "",
          confemail: "",
          message: "email must match to continue"
        },
        password: {
          pass: "",
          confpass: "",
          passCount: "",
          message: "password needs to be 8+ characters"
        }
      },
      show: true
    };
  },
  watch: {
    "form.name.fname": function() {
      this.nameCheck();
    },
    "form.name.lname": function() {
      this.nameCheck();
    },
    "form.email.email": function() {
      this.emailCheck();
    },
    "form.email.confemail": function() {
      this.emailCheck();
    },
    "form.password.pass": function() {
      this.passCheck();
    },
    "form.password.confpass": function() {
      this.passCheck();
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    reload(evt) {
      evt.preventDefault(evt);
      this.$router.go();
    },
    nameCheck() {
      if (
        this.$data.form.name.fname.length >= 2 &&
        this.$data.form.name.lname.length >= 2
      ) {
        if (this.$data.form.name.fname)
          this.$refs.nameNext.removeAttribute("disabled");
        this.$refs.nameNext.classList.remove("disabled");
        this.$data.form.name.message = "✓ click next to continue";
      } else {
        this.$refs.nameNext.setAttribute("disabled", "disabled");
        if (
          this.$data.form.name.fname.length == 0 &&
          this.$data.form.name.lname.length >= 2
        ) {
          this.$data.form.name.message = "enter first name";
        }
        if (
          this.$data.form.name.fname.length >= 0 &&
          this.$data.form.name.lname.length == 0
        ) {
          this.$data.form.name.message = "enter last name";
        }
        if (
          this.$data.form.name.fname == "" &&
          this.$data.form.name.lname == ""
        ) {
          this.$data.form.name.message = "enter first and last to continue";
        }
      }
    },
    emailCheck() {
      if (this.$data.form.email.email == this.$data.form.email.confemail) {
        this.$refs.emailNext.removeAttribute("disabled");
        this.$refs.emailNext.classList.remove("disabled");
        this.$data.form.email.message = "✓ click next to continue";
      } else {
        this.$refs.emailNext.setAttribute("disabled", "disabled");
        this.$data.form.email.message = "email must match to continue";
      }
    },
    passCheck() {
      if (this.$data.form.password.pass.length >= 8) {
        if (
          this.$data.form.password.pass === this.$data.form.password.confpass
        ) {
          this.$refs.passwordNext.removeAttribute("disabled");
          this.$refs.passwordNext.classList.remove("disabled");
          this.$data.form.password.message = "✓ click next to continue";
          var dot = "*";
          this.$data.form.password.passCount = dot.repeat(
            this.$data.form.password.pass.length
          );
        } else {
          this.$refs.passwordNext.setAttribute("disabled", "disabled");
          this.$data.form.password.message =
            "password needs to be 8+ characters";
          this.$data.form.password.message = "password does not match yet..";
        }
      } else {
        this.$refs.passwordNext.setAttribute("disabled", "disabled");
        this.$data.form.password.message = "password needs to be 8+ characters";
      }
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
  visibility: hidden;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 350px;
  height: 400px;
  margin-top: calc(50vh - 200px);
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.1);
  z-index: 999;
  .title {
    height: 60px;
    align-items: flex-end;
    justify-content: flex-start;
    display: flex;
    h3 {
      color: white;
      font-weight: bold;
      text-shadow: 0px 0px 2px black;
      margin-left: 20px;
    }
  }
  form {
    height: 280px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    label {
      margin-left: 20px;
    }
    input {
      color: black;
    }
    .form-message {
      color: rgb(255, 117, 37);
      font-size: 12px;
      line-height: 1;
      padding: 0;
    }
  }
  .signin {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: flex-end;
    p {
      color: white;
    }
    a {
      color: rgb(26, 142, 250);
      margin-left: 10px;
    }
  }
}
#result-section {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.check,
.error,
.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 80%;
  margin: auto;
  svg {
    width: 100px;
    height: 100px;
  }
  p {
    margin: 0;
    font-size: 26px;
    font-weight: bold;
  }
  p em {
    font-size: 14px;
    font-weight: normal;
  }
}

#spinner svg {
  animation: rotating 1.5s linear infinite;
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
