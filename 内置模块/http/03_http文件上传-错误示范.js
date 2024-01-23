const http = require("http");

const fs = require("fs");

const server = new http.Server((req, res) => {
  if (req.url === "/upload") {
    // 文件上传
    if (req.method === "POST") {
      // 创建一个写入流，设置写入模式为 a+ 追加
      const fileWriter = fs.createWriteStream("./1.png", { flags: "a+" });

      // req.pipe(fileWriter);

      req.on("data", (chunk) => {
        fileWriter.write(chunk);
      });

      req.on("end", () => {
        console.log("文件写入完成");
        res.end("文件上传成功~");
      });

      // 最终发现文件无法打开，其根本问题是文件写入过程中，获取的 chunk 数据不止有文件的数据还有其它的数据，导致最后图片格式有问题，无法正常用 png 解析
    }
  }
});

server.listen(8000, "0.0.0.0", () => {
  console.log("8000 端口服务启动...");
});
