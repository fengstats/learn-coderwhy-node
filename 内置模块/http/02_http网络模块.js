const http = require("http");

// GET
// http.get("http://localhost:8000", (res) => {
//   res.on("data", (chunk) => {
//     console.log(chunk);
//     console.log(chunk.toString());
//   });
// });

// POST
const req = http.request(
  {
    host: "localhost",
    method: "post",
    port: 8000,
  },
  (res) => {
    res.on("data", (chunk) => {
      console.log(chunk);
      console.log(chunk.toString());
    });
    res.on("end", () => {
      console.log("数据获取完毕");
    });
  }
);
// 需要手动调用 end 进行结束
req.end();
