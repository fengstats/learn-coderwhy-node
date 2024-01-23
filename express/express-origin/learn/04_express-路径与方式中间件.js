const express = require("express");

const app = express();

app.get("/user", (req, res, next) => {
  console.log("GET: user");
  res.end(
    JSON.stringify({
      name: "chen",
      age: 18,
    })
  );
});

app.post("/user", (req, res, next) => {
  console.log("POST: user");
  res.end(
    JSON.stringify({
      name: "xiao",
      age: 20,
    })
  );
});

app.listen(8000, () => {
  console.log("8000 服务启动成功~");
});
