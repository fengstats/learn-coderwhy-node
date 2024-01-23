const express = require("express");
const axios = require("axios");

const app = express();

const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next();
  // 会等待 next() 内部函数调用栈全部执行完毕后执行下面的代码
  // res.end(req.message);
};
const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};
const middleware3 = async (req, res, next) => {
  const result = await axios.get("http://123.207.32.32:9001/lyric?id=167876");
  req.message += "\n" + result.data.lrc.lyric;
  // 因为 express 内部的 next 返回的只是一个普通的函数, 所以没办法等待其执行完毕, 如果需要在第一个中间件返回结果, 就会很麻烦
  res.end(req.message);
};

// 同时注册多个中间件
app.use(middleware1, middleware2, middleware3);

app.listen(8080, () => {
  console.log("服务器启动 端口号：8080");
});
