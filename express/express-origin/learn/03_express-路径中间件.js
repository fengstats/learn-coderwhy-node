const express = require("express");

const app = express();

// 按照顺序匹配第一个匹配上的中间件
app.use((req, res, next) => {
  console.log("normal middleware");
  next();
});

app.use("/home", (req, res, next) => {
  console.log("Home 中间件");
  next();
});

app.use("/home", (req, res, next) => {
  console.log("Home 中间件2");
  // next();
  res.end("Home");
});

app.listen(8000, () => {
  console.log("8000 服务启动成功~");
});
