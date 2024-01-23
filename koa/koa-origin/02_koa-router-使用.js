const Koa = require("koa");
const userRouter = require("./router/users");

const app = new Koa();

// 加载该路由
app.use(userRouter.routes());
// 处理所有没有设置请求方式的路由
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("8000 server runing");
});
