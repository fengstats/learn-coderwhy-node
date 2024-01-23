const exportEsModule = require('./modules/export-es-module.mjs');

// Must use import to load ES Module
// 必须使用 ES Module 的导入方式

// 测试失败：无法使用 CommonJS 导入 ES Module 导出的模块

console.log(exportEsModule);