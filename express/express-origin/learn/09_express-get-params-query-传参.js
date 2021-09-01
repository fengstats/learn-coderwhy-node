const express = require("express");

const app = express();

app.get("/list/:id/:name", (req, res, next) => {
  console.log(req.params);
  const { id, name } = req.params;
  console.log(id, name);
  res.end("ok");
});

app.get("/list", (req, res, next) => {
  console.log(req.query);
  res.end("is ok");
});

app.listen(8000, () => {
  console.log("8000 服务器启动了");
});
