const Koa = require("koa");
const staticAssets = require("koa-static");
const history = require("koa2-connect-history-api-fallback");

const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = "ok";
});

app.use(staticAssets("./build"));

app.listen(8080, () => {
  console.log("8080 server is runing");
});
