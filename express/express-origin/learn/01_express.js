const express = require("express");

// express 本质上是一个函数 createApplication
// 创建应用
const app = express();

// GET 监听路径
app.get("/", (req, res, next) => {
  res.end("GET: Hello");
});

// POST
app.post("/", (req, res, next) => {
  res.end("POST: Hello");
});

// 监听端口
app.listen(8000, () => {
  console.log("8000 服务器启动成功");
});
