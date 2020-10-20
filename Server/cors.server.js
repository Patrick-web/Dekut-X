const configs = require("./configs");
const express = require("express");
const axios = require("axios");
const qs = require("qs");

console.clear();
const app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.get("/dashboard", async (req, res) => {
  axios(configs.getConfig)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("error");
    });
});
app.get("/login", async (req, res) => {
  axios(configs.loginConfig)
    .then(function (response) {
      console.log(response.headers["set-cookie"][0]);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
