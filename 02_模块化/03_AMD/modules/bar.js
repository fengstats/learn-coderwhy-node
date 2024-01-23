// 定义一个模块，并导出
define(function () {
  const name = 'chen';
  const age = 19;
  const sayHello = function () {
    console.log('hello');
  }

  console.log('bar 输出');

  return {
    name,
    age,
    sayHello
  }
});