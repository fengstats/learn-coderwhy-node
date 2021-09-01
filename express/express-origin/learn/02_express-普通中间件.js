const express = require("express");

const app = express();

// 普通的中间件: 注册的第一个中间件做响应
app.use((req, res, next) => {
  console.log("我是 01 普通的中间件");
  // res.end("01 return");
  // next() 调用下一个中间件
  next();
});

app.use((req, res, next) => {
  console.log("我是 02 普通的中间件");
  // res.end("02 return");
  next();
});

app.use((req, res, next) => {
  console.log("我是 03 普通的中间件");
  res.end("03 return");
});

app.listen(8000, () => {
  console.log("8000 服务启动成功~");
});
