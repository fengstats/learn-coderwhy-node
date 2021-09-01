const express = require("express");

const app = express();

// 注册一个专门解析 json 字符串的中间件
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     let data = "";
//     req.on("data", (_data) => {
//       data = JSON.parse(_data.toString());
//     });

//     req.on("end", () => {
//       req.body = data;
//       next();
//     });
//   } else {
//     // 针对与其它格式进行代码转换书写
//     next();
//   }
// });

app.use(express.json());

// extended
// true: 使用 qs 对 urlencoded 解析
// false: 使用 querystring 对 urlencoded 解析
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("login success");
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.end("product added success");
});

app.listen(8000, () => {
  console.log("8000 服务器启动了~");
});
