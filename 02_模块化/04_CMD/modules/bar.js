define(function (require, exports, module) {

  const name = 'bar name';
  const age = 18;

  // 第一种导出方式
  exports.name = name;
  exports.age = age;
});

console.log('bar');