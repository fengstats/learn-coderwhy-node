import { name, age } from "./modules/bar.mjs";

// 第一种解决方案：在 package.json 中添加 type: "module"

// 第二种：修改后缀为 *.mjs 代表为 ES Module 方式导入导出

console.log(name);
console.log(age);