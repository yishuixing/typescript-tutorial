# 1. 开发环境准备
    npm i -g typescript
    1. 生成 tsconfig.json
        tsc --init
    2. 改 tsconfig.json 中 outdir :"./js"
    3. tsc --watch -p tsconfig.json
# 2. 数据类型
    布尔类型 boolean
    数字类型 number
    字符串类型 string
    元组类型 tuple
    枚举类型 enum
    任意类型 any
    null,undefined
    void
    never
## 2.1数组
    var arr:number[]=[1,2,3]
    console.log(arr）
    var arr:Array<number>=[1,2,3]
    console.log(arr）
## 3. 类 及 泛型
 有三种修饰符 不写 public
 * public 类里面，子类，类外面
 * protected 类里面，子类可以，类外面不可访问
 * private 只能在类里面可以访问，子类及外面不可访问    
 * readonly 及？ 可选
## 4 第4讲
### 4.1 Symbols
自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样
    除了用户定义的symbols，还有一些已经众所周知的内置symbols。 内置symbols用来表示语言内部的行为。
    
    以下为这些symbols的列表：
    
    Symbol.hasInstance
    方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。
    
    Symbol.isConcatSpreadable
    布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。
    
    Symbol.iterator
    方法，被for-of语句调用。返回对象的默认迭代器。
    
    Symbol.match
    方法，被String.prototype.match调用。正则表达式用来匹配字符串。
    
    Symbol.replace
    方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。
    
    Symbol.search
    方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。
    
    Symbol.species
    函数值，为一个构造函数。用来创建派生对象。
    
    Symbol.split
    方法，被String.prototype.split调用。正则表达式来用分割字符串。
    
    Symbol.toPrimitive
    方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。
    
    Symbol.toStringTag
    方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。
    
    Symbol.unscopables
    对象，它自己拥有的属性会被with作用域排除在外
### 4.2 迭代器和生成器
    可迭代性
    当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。 一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。 对象上的 Symbol.iterator函数负责返回供迭代的值。
    
    for..of 语句
    for..of会遍历可迭代的对象，调用对象上的Symbol.iterator方法。 下面是在数组上使用 for..of的简单
    for..of vs. for..in 语句
    for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值
    
### 4.3 模块
    从ECMAScript 2015开始，JavaScript引入了模块的概念。TypeScript也沿用这个概念
    模块在其自身的作用域里执行，而不是在全局作用域里；这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import形式之一。
    
    模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。
    
    模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。
    
    TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的
    CommonJS和AMD的环境里都有一个exports变量，这个变量包含了一个模块的所有导出内容。
    
    CommonJS和AMD的exports都可以被赋值为一个对象, 这种情况下其作用就类似于 es6 语法里的默认导出，即 export default语法了。虽然作用相似，但是 export default 语法并不能兼容CommonJS和AMD的exports。
    
    为了支持CommonJS和AMD的exports, TypeScript提供了export =语法。
    
    export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。
    
    若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块
    
###4.4 使用其它的JavaScript库
    要想描述非TypeScript编写的类库的类型，我们需要声明类库所暴露出的API。

    我们叫它声明因为它不是“外部程序”的具体实现。 它们通常是在 .d.ts文件里定义的。 如果你熟悉C/C++，你可以把它们当做 .h文件
###4.5 命名空间
    命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象.它们可以在多文件中同时使用，并通过 --outFile结合在一起。 命名空间是帮你组织Web应用不错的方式，你可以把所有依赖都放在HTML页面的 <script>标签里.但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中
    别名
    另一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起一个短的名字。 不要与用来加载模块的 import x = require('name')语法弄混了，这里的语法是为指定的符号创建一个别名。 你可以用这种方法为任意标识符创建别名，也包括导入的模块中的对象
###4.6 命名空间和模块
    像命名空间一样，模块可以包含代码和声明。 不同的是模块可以 声明它的依赖
###5.1 模块解析
###5.2 声明合并
###5.3 JSX
###5.4 装饰器
###5.5 ixins
###5.6 三斜线指令
###5.7 JavaScript文件类型检查
 