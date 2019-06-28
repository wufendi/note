/**
 *Author: wufendi
 *Date:2019-06-04 19:51
 *Description:
 **/

// Vue源码中的JS骚操作
// https://juejin.im/post/5c73554cf265da2de33f2a32


// 彻底理解Vue选项Props
// https://juejin.im/post/5c88e669f265da2d8f47792a

// 目录
// https://juejin.im/post/5ab07a63f265da2389258b12
/**
├── scripts --------------------------------- 构建相关的文件
├── dist ---------------------------------- 构建后文件的输出目录
├── examples ------------------------------ 存放使用Vue开发的的例子
├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── package.json -------------------------- 项目依赖
├── test ---------------------------------- 包含所有测试文件
├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码
│   ├──platforms --------------------------- 包含平台相关的代码
│   │   ├──web -----------------------------  包含了不同构建的包的入口文件
│   │   |   ├──entry-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意
│   │   |   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器
│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数
│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码
│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码
│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染
│   ├── core ------------------------------ 存放通用的，平台无关的代码
│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码
│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码
│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components -------------------- 包含抽象出来的通用组件
│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码
│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包
│   ├── shared ---------------------------- 包含整个代码库通用的代码

 **/
