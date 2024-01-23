; (function (require) {


  // 模块名称，初始化配置
  if (false) {
    // 第一种配置：
    // 注：不能给模块加上后缀，因为它内部已经给你添加了
    require.config({
      paths: {
        'bar': './modules/bar',
        'foo': './modules/foo'
      }
    });
  } else {
    require.config({
      // 加上
      baseUrl: './modules',
      paths: {
        // 这里可以不用写了，默认就是模块文件的名称，除非你想换个名字
        // 'xxx': 'bar',
        // 'bar': 'bar',
        // 'foo': 'foo'
      }
    });
  }


  require(['foo'], function (foo) {
    console.log('index 输出');
    console.log(foo);
  })

  console.log('index 看看会不会阻塞');

})(require);