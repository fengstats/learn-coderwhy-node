const express = require("express");

const app = express();

// 静态目录监听
app.use(express.static("./build"));

app.listen(8000, () => {
  console.log("8000 server runing...");
});
