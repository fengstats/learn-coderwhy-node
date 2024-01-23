const Koa = require("koa");
const axios = require("axios");

const app = new Koa();

// 因为 koa 中间件返回的是一个 promise 因此我们可以通过 async/await 来使其变成同步执行的代码
// 这样就可以在第一个中间件中获取第三个中间件中异步数据了...

const middleware1 = async (ctx, next) => {
  ctx.message = "aaa";
  await next();
  ctx.body = ctx.message;
};

const middleware2 = async (ctx, next) => {
  ctx.message += "bbb";
  await next();
};

const middleware3 = async (ctx, next) => {
  const result = await axios.get("http://123.207.32.32:9001/lyric?id=167876");
  ctx.message += "\n" + result.data.lrc.lyric;
};

app.use(middleware1).use(middleware2).use(middleware3);

app.listen(8080, () => {
  console.log("服务器启动成功 端口号：8080");
});
