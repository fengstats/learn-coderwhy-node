const express = require("express");
const userRouter = express.Router();

// 查询用户信息列表
userRouter.get("/", (req, res, next) => {
  res.json(["chen", "xiao", "wang"]);
});

// 查询指定用户
userRouter.get("/:id", (req, res, next) => {
  res.json(`${req.params.id} 用户信息查询成功`);
});

// 创建用户
userRouter.post("/", (req, res, next) => {
  res.json("create user success!");
});

// 删除用户
userRouter.delete("/:id", (req, res, next) => {
  res.json(`${req.params.id} 删除成功`);
});

// 导出
module.exports = userRouter;
