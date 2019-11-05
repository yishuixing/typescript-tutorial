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
    
### 4.4 使用其它的JavaScript库
    要想描述非TypeScript编写的类库的类型，我们需要声明类库所暴露出的API。

    我们叫它声明因为它不是“外部程序”的具体实现。 它们通常是在 .d.ts文件里定义的。 如果你熟悉C/C++，你可以把它们当做 .h文件
###4.5 命名空间
    命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象.它们可以在多文件中同时使用，并通过 --outFile结合在一起。 命名空间是帮你组织Web应用不错的方式，你可以把所有依赖都放在HTML页面的 <script>标签里.但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中
    别名
    另一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起一个短的名字。 不要与用来加载模块的 import x = require('name')语法弄混了，这里的语法是为指定的符号创建一个别名。 你可以用这种方法为任意标识符创建别名，也包括导入的模块中的对象
###4.6 命名空间和模块
    像命名空间一样，模块可以包含代码和声明。 不同的是模块可以 声明它的依赖
###5.1 模块解析
    相对导入是以/，./或../开头的,所有其它形式的导入被当作非相对的
    相对导入在解析时是相对于导入它的文件，并且不能解析为一个外部模块声明. 你应该为你自己写的模块使用相对导入，这样能确保它们在运行时的相对位置
    非相对模块的导入可以相对于baseUrl或通过下文会讲到的路径映射来进行解析。 它们还可以被解析成 外部模块声明。 使用非相对路径来导入你的外部依赖
    模块解析策略
    共有两种可用的模块解析策略：Node和Classic。 你可以使用 --moduleResolution标记来指定使用哪种模块解析策略。若未指定，那么在使用了 --module AMD | System | ES2015时的默认值为Classic，其它情况时则为Node
    Classic
    相对导入的模块是相对于导入它的文件进行解析的。 因此 /root/src/folder/A.ts文件里的import { b } from "./moduleB"会使用下面的查找流程：
    
    1. /root/src/folder/moduleB.ts
    2. /root/src/folder/moduleB.d.ts
    
    这种策略在以前是TypeScript默认的解析策略。 现在，它存在的理由主要是为了向后兼容
    对于非相对模块的导入，编译器则会从包含导入文件的目录开始依次向上级目录遍历，尝试定位匹配的声明文件
    Node
    相对路径很简单。 例如，假设有一个文件路径为 /root/src/moduleA.js，包含了一个导入var x = require("./moduleB"); Node.js以下面的顺序解析这个导入：
    
    检查/root/src/moduleB.js文件是否存在。  
    检查/root/src/moduleB目录是否包含一个package.json文件，且package.json文件指定了一个"main"模块。 在我们的例子里，如果Node.js发现文件 /root/src/moduleB/package.json包含了{ "main": "lib/mainModule.js" }，那么Node.js会引用/root/src/moduleB/lib/mainModule.js。 
    检查/root/src/moduleB目录是否包含一个index.js文件。 这个文件会被隐式地当作那个文件夹下的"main"模块
    
    非相对模块名的解析是个完全不同的过程。 Node会在一个特殊的文件夹 node_modules里查找你的模块。 node_modules可能与当前文件在同一级目录下，或者在上层目录里。 Node会向上级目录遍历，查找每个 node_modules直到它找到要加载的模块
####5.1.3 TypeScript如何解析模块
    
    TypeScript是模仿Node.js运行时的解析策略来在编译阶段定位模块定义文件。 因此，TypeScript在Node解析逻辑基础上增加了TypeScript源文件的扩展名（ .ts，.tsx和.d.ts）。 同时，TypeScript在 package.json里使用字段"types"来表示类似"main"的意义 - 编译器会使用它来找到要使用的"main"定义文件。
    非相对的导入会遵循Node.js的解析逻辑，首先查找文件，然后是合适的文件夹 node_modules
####5.1.4 附加的模块解析标记
    baseUrl的值由以下两者之一决定：
    
    命令行中baseUrl的值（如果给定的路径是相对的，那么将相对于当前路径进行计算）
    ‘tsconfig.json’里的baseUrl属性（如果给定的路径是相对的，那么将相对于‘tsconfig.json’路径进行计算
    注意相对模块的导入不会被设置的baseUrl所影响，因为它们总是相对于导入它们的文件
####5.1.5 路径映射
    TypeScript编译器通过使用tsconfig.json文件里的"paths"来支持这样的声明映射。 下面是一个如何指定 jquery的"paths"的例子。
    
    {
      "compilerOptions": {
        "baseUrl": ".", // This must be specified if "paths" is.
        "paths": {
          "jquery": ["node_modules/jquery/dist/jquery"] // 此处映射是相对于"baseUrl"
        }
      }
    }
    利用rootDirs指定虚拟目录
    启用编译器的模块解析跟踪，它会告诉我们在模块解析过程中发生了什么
    使用--traceResolution调用编译器    
###5.2 声明合并
    typeScript中的声明会创建以下三种实体之一：命名空间，类型或值
    合并接口
    interface Box {
        height: number;
        width: number;
    }
    
    interface Box {
        scale: number;
    }
    
    let box: Box = {height: 5, width: 6, scale: 10};
    合并命名空间
    命名空间与类和函数和枚举类型合并
    
    TypeScript并非允许所有的合并。 目前，类不能与其它类或变量合并。 想要了解如何模仿类的合并，请参考 TypeScript的混入
    
###5.3 JSX
    TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。
    想要使用JSX必须做两件事：
    
    给文件一个.tsx扩展名
    启用jsx选项 通过在命令行里使用--jsx标记或tsconfig.json里的选项来指定模式
    类型断言
    var foo = <foo>bar
    var foo = bar as foo
###5.4 装饰器
    pass
###5.5 ixins
    pass
###5.6 三斜线指令
    三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用
    三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义
    
###5.7 JavaScript文件类型检查
    TypeScript 2.3以后的版本支持使用--checkJs对.js文件进行类型检查和错误提示
    用JSDoc类型表示类型信息
    .js文件里，类型可以和在.ts文件里一样被推断出来。 同样地，当类型不能被推断时，它们可以通过JSDoc来指定，就好比在.ts文件里那样。 如同TypeScript，--noImplicitAny会在编译器无法推断类型的位置报错
    支持的JSDoc
    下面的列表列出了当前所支持的JSDoc注解，你可以用它们在JavaScript文件里添加类型信息。
    
    注意，没有在下面列出的标记（例如@async）都是还不支持的。
    
    @type
    @param (or @arg or @argument)
    @returns (or @return)
    @typedef
    @callback
    @template
    @class (or @constructor)
    @this
    @extends (or @augments)
    @enum
 