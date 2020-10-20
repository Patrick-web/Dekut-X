var axios = require("axios");
var data = "username=kimotho.patrick19&password=C026-01-1286%2F2019";

var config = {
  method: "post",
  url: "https://elearning.dkut.ac.ke/login/index.php",
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    connection: "keep-alive",
    "content-length": "55",
    "content-type": "application/x-www-form-urlencoded",
    host: "elearning.dkut.ac.ke",
    origin: "https://elearning.dkut.ac.ke",
    referer: "https://elearning.dkut.ac.ke/",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.118 Safari/537.36",
    Cookie: "MoodleSession=m965ki34746357bpmb6a378uh2",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(response.headers);
  })
  .catch(function (error) {
    console.log(error);
  });
