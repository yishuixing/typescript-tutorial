var b: boolean = true
var num: number = 3
var str: string = 'this a string'
console.log(b)
console.log(num)
console.log(str)
//数组2种方式
var arr: number[] = [1, 2, 3]
console.log(arr)
var arr: Array<number> = [1, 2, 3]
console.log(arr)
//元组
let t:[number,string]=[3,'str']
console.log(t)
//enum
enum Flag{sucess=1,error=2}
let s:Flag=Flag.sucess
console.log(s)
//any 相当于js 中 Object
let a:any=3
a='any type'
console.log(a)
var un:undefined
console.log(un)

function run():void {
    console.log('run')
}
run()
//never 不会出现的值，是其它类型(包括null,undefined)的子类型
var aa:[string,string]=['a','b']
var bb:string[]=['a']