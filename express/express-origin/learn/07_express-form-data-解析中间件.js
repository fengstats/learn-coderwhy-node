const express = require("express");
const multer = require("multer");

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 如果没有这个目录需要手动创建
    cb(null, "./uploads/");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${+new Date()}.png`);
  },
});
const upload = multer({
  // 目录没有可以自动创建
  // dest: "./uploads/",
  storage,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// any: 解析上传的所有 form-data 数据
// app.use(upload.any());

app.post("/login", upload.any(), (req, res, next) => {
  console.log(req.body);
  res.end("on hold wait");
});

// 单个文件上传
app.post("/upload/single", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  res.end("file upload success");
});

// 多个文件上传
app.post("/upload/many", upload.array("file"), (req, res, next) => {
  console.log(req.files);
  res.end("file upload success");
});

// 多个文件不同属性
app.post(
  "/upload/manyKey",
  upload.fields([
    { name: "key1", maxCount: 1 },
    { name: "key2", maxCount: 1 },
    { name: "file", maxCount: 2 },
  ]),
  (req, res, next) => {
    console.log(req.files);
    res.end("file upload success");
  }
);

app.listen(8000, () => {
  console.log("8000 服务器启动成功~");
});
