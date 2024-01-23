const Koa = require("koa");
const Router = require("koa-router");
const multer = require("koa-multer");

const uploadRouter = new Router({
  prefix: "/upload",
});

// 配置文件上传信息
const storage = multer.diskStorage({
  // 设置目录
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  // 设置文件名称
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}.png`);
  },
});

const upload = multer({
  // dest: "./uploads",
  storage,
});
const app = new Koa();

uploadRouter.post("/", upload.single("file"), (ctx, next) => {
  console.log(ctx.req.file);
});

// 注册路由
app.use(uploadRouter.routes());

app.listen(8000, () => {
  console.log("8000 server is runing");
});
