<template>
  <div class="wrapper">
    <b-collapse visible id="reg">
      <div class="title">
        <h3>Register</h3>
      </div>
      <b-form>
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
              v-b-toggle="['password-section', 'pin-section']"
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

        <b-collapse id="pin-section">
          <b-form-group
            id="pin-input"
            label="Account Security Pin :"
            label-for="pin"
            class="text-left"
          >
            <div class="input-wrapper">
              <PincodeInput
                name="pin"
                v-model="form.pin.accPin"
                placeholder="0"
                secure="true"
                previewDuration="150"
              />
            </div>

            <label for="confpin" class="text-left ml-0 mt-3"
              >Confirm Pin :</label
            >
            <div class="input-wrapper">
              <PincodeInput
                name="confpin"
                v-model="form.pin.confaccPin"
                placeholder="0"
                secure="true"
                previewDuration="150"
              />
            </div>
          </b-form-group>

          <p class="form-message">{{ form.pin.message }}</p>

          <b-container class="d-flex p-0 justify-content-start">
            <b-button
              disabled
              ref="pinNext"
              id="pinNext"
              v-b-toggle="['pin-section', 'confirm-section']"
              variant="primary"
              >Next</b-button
            >
            <b-button
              class="ml-3"
              v-b-toggle="['password-section', 'pin-section']"
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
              <p style="color:black;">
                Name: {{ form.name.fname }} {{ form.name.lname }}
              </p>
            </div>
            <div class="form-control mb-2">
              <p style="color:black;">Email: {{ form.email.email }}</p>
            </div>
            <div class="form-control mb-2">
              <p style="color:black;">
                Password: {{ form.password.passCount }}
              </p>
            </div>
            <div class="form-control mb-2">
              <p style="color:black;">
                Pin: ****
              </p>
            </div>
          </b-form-group>

          <b-container class="d-flex p-0 justify-content-start">
            <b-button
              id="confirmNext"
              variant="primary"
              v-b-toggle="['reg', 'result-section']"
              @click="register"
              >Confirm</b-button
            >
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
      <div ref="spinner" id="spinner" class="spinner">
        <p>
          Working..
        </p>
        <i style="color:cyan;" class="fas fa-spinner"></i>
        <p>
          <em>one moment please</em>
        </p>
      </div>

      <div ref="check" id="check" class="check hidden">
        <p>
          All is good!
        </p>
        <i style="color:greenyellow;" class="far fa-check-circle"></i>
        <p>
          <em><router-link to="/login">Log In Here</router-link></em>
        </p>
      </div>

      <div ref="error" id="error" class="error hidden">
        <p>
          Oops! Something went wrong!
        </p>
        <i style="color:orange;" class="far fa-times-circle"></i>
        <p>
          <em style="color:orange;">{{ error }}</em>
        </p>
        <p>
          <em
            ><a @click="reload" href="" style="color:greenyellow;"
              >Try Again?</a
            ></em
          >
        </p>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  components: { PincodeInput },
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
        },
        pin: {
          accPin: "",
          confaccPin: "",
          message: "this pin is used to make account changes"
        }
      },
      show: true,
      error: null
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
    },
    "form.pin.accPin": function() {
      this.pinCheck();
    },
    "form.pin.confaccPin": function() {
      this.pinCheck();
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          fname: this.$data.form.name.fname,
          lname: this.$data.form.name.lname,
          email: this.$data.form.email.email,
          password: this.$data.form.password.pass,
          accPin: this.$data.form.pin.accPin
        });
      } catch (error) {
        this.$data.error = error.response.data.error;
      }
      if (this.$data.error) {
        this.$refs.spinner.classList.add("hidden");
        this.$refs.error.classList.remove("hidden");
        console.log(this.$data.error);
      } else {
        this.$refs.spinner.classList.add("hidden");
        this.$refs.check.classList.remove("hidden");
        console.log("account created!");
      }
    },
    reload(evt) {
      evt.preventDefault(evt);
      this.$router.go();
    },
    nameCheck() {
      if (
        this.$data.form.name.fname.length >= 2 &&
        this.$data.form.name.lname.length >= 2 &&
        !/[0-9$%&#@!^*`~,.<>;:"/|{}()=_+[\]]/.test(
          this.$data.form.name.fname
        ) &&
        !/[0-9$%&#@!^*`~,.<>;:"/|{}()=_+[\]]/.test(this.$data.form.name.lname)
      ) {
        if (this.$data.form.name.fname) {
          this.$refs.nameNext.removeAttribute("disabled");
          this.$refs.nameNext.classList.remove("disabled");
          this.$data.form.name.message = "✓ click next to continue";
        }
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
        if (
          /[0-9$%&#@!^*`~,.<>;:"/|{}()=_+[\]]/.test(
            this.$data.form.name.fname
          ) ||
          /[0-9$%&#@!^*`~,.<>;:"/|{}()=_+[\]]/.test(this.$data.form.name.lname)
        ) {
          this.$data.form.name.message =
            "Name can not contain symbols or numbers";
        }
      }
    },
    emailCheck() {
      if (
        this.$data.form.email.email.indexOf("@") >= 1 &&
        this.$data.form.email.email.indexOf(".") >= 0
      ) {
        if (this.$data.form.email.email == this.$data.form.email.confemail) {
          this.$refs.emailNext.removeAttribute("disabled");
          this.$refs.emailNext.classList.remove("disabled");
          this.$data.form.email.message = "✓ click next to continue";
        } else {
          this.$refs.emailNext.setAttribute("disabled", "disabled");
          this.$data.form.email.message = "email must match to continue";
        }
      } else {
        this.$refs.emailNext.setAttribute("disabled", "disabled");
        this.$data.form.email.message = "must be a vaild email";
      }
    },
    passCheck() {
      if (
        this.$data.form.password.pass.length >= 8 &&
        this.$data.form.password.pass.length <= 32
      ) {
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
        this.$data.form.password.message =
          "password must be 8-32 characters long";
      }
    },
    pinCheck() {
      if (this.$data.form.pin.accPin === this.$data.form.pin.confaccPin) {
        this.$refs.pinNext.removeAttribute("disabled");
        this.$refs.pinNext.classList.remove("disabled");
        this.$data.form.pin.message = "✓ click next to continue";
      } else {
        this.$refs.pinNext.setAttribute("disabled", "disabled");
        this.$data.form.pin.message = "pin must match to continue";
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
.hidden {
  display: none !important;
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
