const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    console.log("GET: user");
    next();
  },
  (req, res, next) => {
    console.log("common middleware 01");
    next();
  },
  (req, res, next) => {
    console.log("common middleware 02");
    next();
  },
  (req, res, next) => {
    console.log("common middleware 03");
    res.end(
      JSON.stringify({
        name: "chen",
        age: 18,
      })
    );
  }
);

app.listen(8000, () => {
  console.log("8000 服务启动成功~");
});
