// 导入：Node 加载模块的过程为同步加载，也就是说会先把导入模块的 js 文件先执行完后，再执行当前文件后续代码
// 注：若多次加载同一模块则会缓存，只加载一次
const bar = require('./bar');
// const bar2 = require('./bar');

console.log('main：', bar);