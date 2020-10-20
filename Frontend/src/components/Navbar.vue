<template>
  <div class="Navbar">
    <div class="logoArea">
      <img id="logo" src="@/assets/Logo.png" alt="" />
    </div>
    <div v-if="!currentCourse" class="links">
      <div @click="goTo('courses')" id="courses" class="link activeLink">
        Courses
        <div class="indicator"></div>
      </div>
      <div @click="goTo('notices')" class="link" id="notices">
        Notices
        <div class="indicator"></div>
      </div>
      <div id="soon" class="link">
        <span>soon</span>
        <p id="forDesktop">Student portal</p>
        <p id="forMobile">Portal</p>
      </div>
    </div>
    <div v-if="currentCourse" class="currentCourseDiv">
      <h2>{{ currentCourse }}</h2>
      <router-link to="/dashboard" replace class="backBt">
        <img src="@/assets/arrow.svg" alt="" />
        <h3>Back</h3>
      </router-link>
    </div>
    <div class="avatar">
      <img src="@/assets/avatar1.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(target) {
      document.querySelector(".activeLink").classList.remove("activeLink");
      document.querySelector(`#${target}`).classList.add("activeLink");
      this.$emit("switchTo", target);
    },
  },
  props: {
    currentCourse: String,
  },
};
</script>

<style lang="scss">
.Navbar {
  position: fixed;
  top: 0px;
  width: 100vw;
  background: #373737;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  z-index: 2;
  color: white;
}
.logoArea {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  margin: auto;
  border-right: 2px solid #ebebeb3b;
  min-width: 80px;
}
#logo {
  width: 80%;
  min-width: 70px;
}
.links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  .link {
    font-weight: 800;
    font-size: 1.4em;
    justify-self: center;
    align-self: center;
    height: 100%;
    padding-top: 30px;
    cursor: pointer;
    position: relative;
    span {
      position: absolute;
      right: 0;
      transform: translateX(110%);
      font-size: 0.5em;
      background: magenta;
      padding: 3px;
      border-radius: 10px;
    }
  }
  .link:hover {
    color: rgb(255, 161, 191);
  }
  .activeLink {
    color: rgb(255, 161, 191);
    .indicator {
      height: 10px;
    }
  }
  .indicator {
    position: absolute;
    bottom: 17px;
    background: linear-gradient(90deg, palevioletred, white);
    height: 0px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
.avatar {
  margin: auto;
  transform: translateX(60%);
  cursor: pointer;
  img {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.116);
    width: 40%;
    margin: auto;
    padding: 8px;
  }
}
.avatar:hover {
  img {
    background: rgba(255, 255, 255, 0.185);
  }
}
.currentCourseDiv {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .backBt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h3 {
      transition: none;
    }
    img {
      width: 30%;
    }
  }
  .backBt:hover {
    color: palevioletred;
    img {
      transform: translateX(-50%);
    }
  }
}
#soon:hover {
  color: white;
  cursor: default;
}
#forMobile {
  display: none;
}
@media (max-width: 600px) {
  h2 {
    font-size: 1em;
  }
  #forMobile {
    display: initial;
  }
  #forDesktop {
    display: none;
  }
  .Navbar {
    .logoArea {
      width: 40%;
    }
    .activeLink {
      .indicator {
        height: 5px;
      }
    }
  }
  .avatar {
    img {
      transform: translateX(-80%);
      width: 40%;
      padding: 2px;
    }
  }
  .links {
    .link {
      padding-top: 12px;
      padding-bottom: 2px;
      font-size: 1em;
      justify-self: center;
      align-self: center;
      span {
        font-size: 0.5em;
        padding: 1px;
      }
      .indicator {
        position: absolute;
        bottom: 8px;
        border-radius: 10px;
      }
    }
  }
}
</style>
