const fs = require("fs");

const express = require("express");
const multer = require("multer");
const morgan = require("morgan");

const app = express();
const upload = multer();

// 没有这个目录需要手动创建，否则报错
const loggerWriter = fs.createWriteStream("./logs/access.log", {
  flags: "a+",
});

app.use(morgan("combined", { stream: loggerWriter }));

app.post("/login", upload.any(), (req, res, next) => {
  console.log(req.body);
  res.end("Login success");
});

app.listen(8000, () => {
  console.log("8000 服务器启动了~");
});
