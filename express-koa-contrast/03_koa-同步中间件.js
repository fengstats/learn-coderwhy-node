const Koa = require("koa");

const app = new Koa();

// 与 express 差不多

const middleware1 = (ctx, next) => {
  ctx.message = "aaa";
  next();
  ctx.body = ctx.message;
};

const middleware2 = (ctx, next) => {
  ctx.message += "bbb";
  next();
};

const middleware3 = (ctx, next) => {
  ctx.message += "ccc";
};

app.use(middleware1).use(middleware2).use(middleware3);

app.listen(8080, () => {
  console.log("服务器启动成功 端口号：8080");
});
