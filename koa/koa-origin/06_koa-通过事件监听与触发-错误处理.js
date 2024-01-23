const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.app.emit("error", new Error("你还没有登录"), ctx);
});

app.use((ctx, next) => {
  ctx.body = "第二个中间件返回的数据";
});

// 处理错误事件
app.on("error", (err, ctx) => {
  ctx.status = 401;
  ctx.body = err.message;
});

app.listen(8080, () => {
  console.log("本地服务启动中，端口号：8080");
});
