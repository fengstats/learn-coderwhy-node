// 第一种导入
import { name, age, sayHi } from './modules/bar.js';

// 第二种导入
import { name as FooNmae } from './modules/foo.js';

// 第三种导入：全部导入然后取别名，将导入数据存储在一个"模块对象"中
import * as Baz from './modules/baz.js';


console.log(name, age, sayHi());
console.log(FooNmae);
console.log(Baz);
console.log(Baz.BazName);

// 默认导出接收：自己设置名称接收
import Loo from './modules/loo.js';
import { say, LooAge } from './modules/loo.js';

console.log(Loo);
say();

console.log('——————————————');
console.log(LooAge);

// if (false) {
//   import Loo from './modules/loo.js'; // Uncaught SyntaxError: Unexpected identifier
// }

if (true) {
  import('./modules/bar.js').then((res) => {
    console.log(res);
  })
}