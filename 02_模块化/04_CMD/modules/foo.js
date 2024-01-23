define(function (require, exports, module) {
  // 导入 bar 模块
  const bar = require('./bar');

  // 第二种导出方式：此时导出的内存地址已经改变，指向了新创建的这个对象
  module.exports = {
    name: 'foo name'
  }
});

console.log('foo');