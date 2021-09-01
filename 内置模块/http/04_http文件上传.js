const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const server = new http.Server((req, res) => {
  if (req.url === "/upload") {
    // 文件上传
    if (req.method === "POST") {
      // 首先设置图片必须是二进制数据
      req.setEncoding("binary");

      // 用于存放用户传递的数据
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        // console.log("文件数据接收完成");
        // console.log(body.substring(0, 100));
        // res.end("文件上传成功~");

        // 需要处理一些不属于二进制流的信息: 简单粗暴处理
        // const boundary = req.headers;
        const boundary = req.headers["content-type"]
          .split(";")[1]
          .replace(" boundary=", "");

        console.log(boundary);
        // 1. 拿到 Content-Type 对应值的位置
        const payload = qs.parse(body, "\r\n", ": ");
        const type = payload["Content-Type"];
        const typeLen = type.length;
        const typeIndex = body.indexOf(type);

        // 2. 对这个位置的字符做截取到最后
        console.log(typeLen, typeIndex);
        let imageData = body.substring(typeIndex + typeLen);

        // 3. 将中间的两个空格去除
        imageData = imageData.replace(/^\s\s*/, "");

        // 4. 将最后的 boundary 去掉
        imageData = imageData.substring(
          0,
          imageData.indexOf(`--${boundary}--`)
        );

        // console.log(imageData);

        // 5. 写入二进制数据
        fs.writeFile("./2.png", imageData, { encoding: "binary" }, (err) => {
          if (!err) {
            console.log("文件写入完成");
            res.end("file upload successfully");
          }
        });
      });
    }
  }
});

server.listen(8000, "0.0.0.0", () => {
  console.log("8000 端口服务启动...");
});
