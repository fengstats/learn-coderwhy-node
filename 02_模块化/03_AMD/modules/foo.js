define(['bar'], function (bar) {
  console.log('foo 输出');
  console.log(bar.name);
  console.log(bar.age);
  bar.sayHello();

  const name = 'xiao';

  return {
    name
  }
})