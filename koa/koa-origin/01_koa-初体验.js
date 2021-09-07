const Koa = require("koa");

const app = new Koa();

// koa 中没有 app.methods 方式
// 也就是 http、express 模块中的 http.get() post() put()...
// 而且第一个参数直接就是一个回调函数, 相对于之前回调函数的 (req, res, next) 变成了 (ctx, next)
app.use((context, next) => {
  // context: 上下文对象
  /**
   * {
   *   request: 请求对象
   *   response: 响应对象
   * }
   */
  context.response.body = "你好呀";
});

app.listen(8000, () => {
  console.log("8000 server runing");
});
