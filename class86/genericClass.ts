/*
Generic CLASS
--> Pode trabalhar com diferentes tipos de dados
--> Espaços reservados para os tipos de suas propriedades, métodos
e paramêtros
--> Reutilizar o mesmo código
 */

class Box84<T> {
    constructor(private item: T) {}

    getItem() {
        return this.item
    }
    setItem(item: T) {
        this.item = item
    }
}

const boxString84 = new Box84<string>('Hello');
console.log(boxString84.getItem());

const boxNumber84 = new Box84<number>(42);
console.log(boxNumber84.getItem());

//Mesmo exemplo só que usando 2 generics <T, U>
class Box84_<T, U> {
    constructor(private item1: T, private item2: U) {}

    getItem1(): T {
        return this.item1;
    }

    getItem2(): U {
        return this.item2;
    }

    setItem1(item: T) {
        this.item1 = item;
    }

    setItem2(item: U) {
        this.item2 = item;
    }
}

const boxStringNumber84 = new Box84_<string, number>('Hello', 42);
console.log(boxStringNumber84.getItem1()); // Output: 'Hello'
console.log(boxStringNumber84.getItem2()); // Output: 42

const boxBooleanDate84 = new Box84_<boolean, Date>(true, new Date());
console.log(boxBooleanDate84.getItem1()); // Output: true
console.log(boxBooleanDate84.getItem2()); // Output: current date
