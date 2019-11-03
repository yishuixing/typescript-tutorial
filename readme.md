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