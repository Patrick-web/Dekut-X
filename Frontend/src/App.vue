<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  transition: 0.2s ease-in-out;
}
::-webkit-scrollbar {
  background: none;
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.342);
  border-radius: 10px;
}
a {
  text-decoration: none;
  color: white;
}
body {
  @import url("./assets/animate.css");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
  background: #212121;
  font-family: "Roboto", sans-serif;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
