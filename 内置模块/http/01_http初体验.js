const http = require("http");
const url = require("url");
const qs = require("querystring");

// 创建 http 服务
const server = http.Server((req, res) => {
  // discard
  const _url = url.parse(req.url);
  // const _url = new URL();
  const { name, age } = qs.parse(_url.query);

  console.log(_url.pathname);
  // console.log(name, age);

  res.end("Hello, this is my first Node service.");
});

// 监听 http 端口
server.listen(8000, "0.0.0.0", () => {
  console.log("services is runing");
});
