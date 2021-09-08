const KoaRouter = require("koa-router");

// 实例化路由对象, 传入前缀参数
const router = new KoaRouter({
  prefix: "/users",
});

router.get("/", (ctx, next) => {
  ctx.response.body = "用户信息请求成功";
});

router.post("/", (ctx, next) => {
  ctx.response.body = "用户信息创建成功";
});

// params、query 参数解析
router.get("/:id", (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  resizeBy.json("数据请求成功");
});

module.exports = router;
