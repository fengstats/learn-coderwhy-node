const express = require("express");

const app = express();

app.get("/list", (req, res, next) => {
  const query = req.query;
  console.log(query);

  // 第一种方式: 设置响应类型为 json
  // res.type("application/json");
  // res.end(JSON.stringify(query));

  // 第二种: 直接使用 res.json() 方法返回
  res.json(query);
  // res.json(["a1", "a2", "a3", 4]);

  // 设置状态响应码
  // res.status(204);
  // res.json({ name: "lazy" });
});

app.listen(8000, () => {
  console.log("8000 服务器启动了");
});
