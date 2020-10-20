const qs = require("qs");

const data = qs.stringify({
  username: "kimotho.patrick19",
  password: "C026-01-1286/2019",
  anchor: "",
});

var loginConfig = {
  method: "post",
  url: "https://elearning.dkut.ac.ke/login/index.php",
  headers: {
    Connection: "keep-alive",
    "Cache-Control": "max-age=0",
    Origin: "https://elearning.dkut.ac.ke",
    "Upgrade-Insecure-Requests": "1",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.118 Safari/537.36",
    "Sec-Fetch-User": "?1",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    Referer: "https://elearning.dkut.ac.ke/login/index.php",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    Cookie: "MoodleSession=k2341s7lqnn80rpd5frhi9vrq6",
  },
  data: data,
};

const getConfig = {
  method: "get",
  url: "https://elearning.dkut.ac.ke/",
  headers: {
    Connection: "keep-alive",
    "Cache-Control": "max-age=0",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.118 Safari/537.36",
    "Sec-Fetch-User": "?1",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    Referer: "https://elearning.dkut.ac.ke/login/index.php",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    Cookie: "MoodleSession=k2341s7lqnn80rpd5frhi9vrq6",
  },
};

module.exports = {
  loginConfig,
  getConfig,
};
