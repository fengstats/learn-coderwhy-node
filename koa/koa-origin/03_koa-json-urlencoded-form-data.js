const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const multer = require("koa-multer");

const app = new Koa();
const upload = multer();

app.use(bodyParser());
app.use(upload.any());

app.use((ctx, next) => {
  console.log(ctx.request.body);
  // form-data 数据存放在 ctx.req.body 内
  console.log(ctx.req.body);
  ctx.response.body = "完成";
});

app.listen(8000, () => {
  console.log("8000 server is runing");
});
