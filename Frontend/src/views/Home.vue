<template>
  <div class="home">
    <img alt="DekutX logo" id="logo" src="../assets/Logo.png" />
    <button id="formShowBt" @click="showForm = true">Sign In</button>
    <div v-if="showForm" class="formWrapper">
      <form class="form">
        <div class="header animated">
          <p>Nisaidie na details zako za E-learning ndo tusonge.</p>
        </div>
        <div class="formGroup">
          <label for="Username">Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="surname.firstname.YY"
          />
        </div>
        <div class="formGroup">
          <label for="Password">Password</label>
          <input
            v-model="password"
            type="text"
            placeholder="registration number yako"
          />
          {{ password }}
        </div>
        <button id="signInBt" @click="testCredentials">
          Tusonge basi <img id="arrow" src="@/assets/arrow.svg" alt="" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      showForm: false,
      username: "",
      password: "",
    };
  },
  methods: {
    testCredentials() {
      if (!this.username || !this.password) {
        this.showError("Tutasonga aje bila details zako zote surely?");
      } else {
        const usernameRegex = /\w*\.\w*\.\d\d/;
        if (!usernameRegex.test(this.username)) {
          this.showError(
            "Umekosea username. It should be in this format <sirname.middlename.year>"
          );
        } else {
          const passwordRegex = /\w\d\d\d-\d\d-\d\d\d\d\/\d\d\d\d/;
          if (!passwordRegex.test(this.password)) {
            this.showError(
              "Umekosea password. Password ni your Registration Number"
            );
          } else {
            this.login();
          }
        }
      }
    },
    login() {
      this.$router.replace({ name: "dashboard" });
    },
    showError(msg) {
      const formHeader = document.querySelector(".form .header");
      formHeader.classList.add("zii", "shake");
      formHeader.querySelector("p").textContent = msg;
      setTimeout(() => {
        formHeader.classList.remove("zii");
        formHeader.querySelector("p").textContent =
          "Nisaidie na details zako za E-learning ndo tusonge for real sasa.";
      }, 3000);
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/BG.png");
}
#logo {
  width: 50%;
  margin: auto;
}

button {
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.4em;
  outline: none;
  cursor: pointer;
}
#formShowBt {
  margin-bottom: 50px;
  padding: 10px;
  font-size: 1.4em;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.404);
  color: white;
  width: 30%;
  position: relative;
  transition: 0.4s ease-in-out;
}
#formShowBt:hover {
  background: palevioletred;
  border-radius: 40px;
}
.formWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.493);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  background: #212121;
  width: 30%;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.418);
}
.formGroup {
  margin: 10px;
  width: 100%;
  padding: 10px;
  text-align: left;
}
label {
  text-align: left;
  display: block;
  color: white;
  font-size: 1.2em;
}
input {
  width: 88%;
  background: none;
  border: none;
  border-bottom: 2px solid #464646;
  padding: 5px;
  color: white;
  outline: none;
  font-size: 1.1em;
  transition: 0.2s;
}
input:focus {
  margin-top: 10px;
  border-bottom: 2px solid palevioletred;
}
form .header {
  background: palevioletred;
  height: 200px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header p {
  color: white;
  font-size: 1.4em;
  font-weight: 300;
  padding-left: 10px;
}
.zii {
  background: rgb(255, 0, 119) !important;
}
#signInBt {
  width: 50%;
  background: black;
  border-radius: 40px;
  margin: auto;
  margin: 10px;
  transition: 0.2s ease;
}
#arrow {
  transform: rotate(180deg);
  transform-origin: center;
  width: 0%;
  margin-bottom: -4px;
  transition: 0.2s ease;
}
#signInBt:hover {
  background: palevioletred;
  font-weight: 700;
  width: 60%;
  #arrow {
    width: 20%;
  }
}
@media (max-width: 700px) {
  form {
    width: 90%;
  }
}
</style>
