define((require, exports, module) => {

  const bar = require('./modules/bar');
  const foo = require('./modules/foo');

  console.log('index', bar);
  console.log('index', foo);

  module.exports = {
    name: 'chen'
  }
});

console.log('index');