//3.1 函数定义
function f1(name: string, age: number = 111): string {
    return name + '你好' + ', age= ' + age
}

class Person {
    name: string

    constructor(n: string) {
        this.name = n
    }

    run(): void {
        alert(this.name)
    }

    getName(): string {
        return this.name
    }

    setName(n: string): void {
        this.name = n
    }
}

var p = new Person('小王')
p.run()
p.setName('小花')
alert(p.getName())

// 继承,typescript
/**
 * 有三种修饰符 不写 public
 * public 类里面，子类，类外面
 * protected 类里面，子类可以，类外面不可访问
 * private 只能在类里面可以访问，子类及外面不可访问
 */
class Man extends Person {
    constructor(name: string) {
        super(name) //调用父类构造函数
    }
// protected   work() {
    work() {
        alert(`${this.name}在work`)
    }
    //静态方法 类名调用
    static print() {
        alert('priint')
    }
}

var man = new Man('李4')

man.run()
man.work()
Man.print()

//多态
class Animal {
    name: string

    constructor(name: string) {
        this.name=name
    }

    eat() {
        console.log('eat')
    }
}

class Dog extends Animal {
    constructor(name:string) {
        super(name)
    }
    eat() {
        console.log(this.name+' eat meat')
    }
}
class Cat extends Animal{
    constructor(name: string) {
       super(name)
    }

    eat() {
        console.log(this.name+' eat fish')
    }
}
var animal:Animal=new Cat('cat')
animal.eat()
var animal2:Animal=new Dog('dog')
animal2.eat()
//abstract 抽象类和抽象方法
abstract class A {
    abstract eat():any
}
