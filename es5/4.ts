interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
//只要有label:string 就是LabelledValue实例,很灵活,下面是可选接口
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

/**
 * ？ 定义可选
 */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

/**
 * readonly
 * 现代编程需要 ，特别是函数式编程中需要 immutable ，我们可以在接口定义时在属性（字段）属性前面添加修饰 readonly
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

//interface 函数的约束
interface encrypt {
    (key: string, value: string): string
}

var md5: encrypt = function (key: string, value: string): string {
    return key + value
}
console.log(md5('a', 'b'))


/**
 * 接口继承
 * 可以继承多个接口
 */
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

//泛型
function getData<T>(value:T):T {
    return value
}
getData<string>("泛型")
//泛型类 idea 自动生成construct
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;


    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

// let 类型推断
let myGenericNumber = new GenericNumber<number>(1, function(x, y) { return x + y; });
//交叉类型（Intersection Types）  T & U
//联合类型（Union Types）   string | number

//索引类型和字符串索引签名
interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number