let name = 'loo name';

export function say() {
  console.log('hello');
}

// 导入然后导出
export { age as LooAge } from './bar.js';

// 这时后面确确实实就可以是一个对象了
// 同样也可以是数组、函数、任意类型数据......
export default {
  name
}
