const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next();
  // 会等待 next() 内部函数调用栈全部执行完毕后执行下面的代码
  res.end(req.message);
};
const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};
const middleware3 = (req, res, next) => {
  req.message += "ccc";
};

// 同时注册多个中间件
app.use(middleware1, middleware2, middleware3);

app.listen(8080, () => {
  console.log("服务器启动 端口号：8080");
});
