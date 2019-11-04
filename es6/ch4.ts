let sym1 = Symbol();

let sym2 = Symbol("key"); // 可选的字符串key

let sym3 = Symbol("key");

sym2 === sym3; // false, symbols是唯一的
//像字符串一样，symbols也可以被用做对象属性的键
let sym = Symbol();

let obj = {
    [sym]: "value"
};
console.log(obj.sym)
// console.log(obj[sym]); // "value"   报错 2538
//Symbols也可以与计算出的属性名声明相结合来声明对象的属性和类成员
const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
        return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"

//迭代
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

/**
 * for..of vs. for..in 语句
 * for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值
 * 另一个区别是for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。
 * 内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值
 */
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}
let pets = new Set(["Cat", "Dog", "Hamster"]);


for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

//import export
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();
//将整个模块导入到一个变量，并通过它来访问模块的导出部分
import * as validator from "./ZipCodeValidator";
let myValidator2 = new validator.ZipCodeValidator();

//default导出也可以是一个值
import num from "./OneTwoThree";

console.log(num); // "123"