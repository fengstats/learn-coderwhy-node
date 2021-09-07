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

// 处理所有没有设置请求方式的路由
router.use(router.allowedMethods());

module.exports = router;
