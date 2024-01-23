// exports = {
//   name: 'chen'
// }

exports.name = 'chen';
exports.age = 18;

// 该模块如果被导入的话，会执行一次这个 js 文件
console.log('bar：', exports);

// 最主要的导出功能是 module.exports 完成的，只不过 Node 内部做了一个对象引用赋值，所以表面看上去是用 exports 导出，实际不然
// module.exports = exports;