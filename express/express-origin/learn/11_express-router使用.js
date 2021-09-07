const express = require("express");
const users = require("./router/users");

const app = express();

app.use("/users", users);

app.listen(8000, () => {
  console.log("8000 runing server...");
});
