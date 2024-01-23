const express = require("express");
const app = express();

// 常量定义
const USER_DOSE_NOT_EXISTS = "USER_DOSE_NOT_EXISTS";
const USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS";

app.get("/login", (req, res, next) => {
  const isFlag = false;
  if (isFlag) {
    res.json("登录成功");
  } else {
    // next(new Error());
    next(new Error(USER_DOSE_NOT_EXISTS));
  }
});

app.get("/registry", (req, res, next) => {
  const isFlag = true;
  if (isFlag) {
    res.json("注册成功");
  } else {
    next(new Error(USER_ALREADY_EXISTS));
  }
});

// 错误中间件处理
app.use((err, req, res, next) => {
  // console.log(err);
  // console.log(err.message);

  let status = 400;
  let message = "";

  switch (err.message) {
    case USER_DOSE_NOT_EXISTS:
      message = "用户不存在";
      break;
    case USER_ALREADY_EXISTS:
      message = "用户已经存在";
      break;
    default:
      status = 404;
      message = "未找到对应资源";
      break;
  }

  res.status(status);
  res.json(message);
});

app.listen(8000, () => {
  console.log("8000 server runing");
});
