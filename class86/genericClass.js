"use strict";
class Box84 {
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setItem(item) {
        this.item = item;
    }
}
const boxString84 = new Box84('Hello');
console.log(boxString84.getItem());
const boxNumber84 = new Box84(42);
console.log(boxNumber84.getItem());
class Box84_ {
    constructor(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    getItem1() {
        return this.item1;
    }
    getItem2() {
        return this.item2;
    }
    setItem1(item) {
        this.item1 = item;
    }
    setItem2(item) {
        this.item2 = item;
    }
}
const boxStringNumber84 = new Box84_('Hello', 42);
console.log(boxStringNumber84.getItem1());
console.log(boxStringNumber84.getItem2());
const boxBooleanDate84 = new Box84_(true, new Date());
console.log(boxBooleanDate84.getItem1());
console.log(boxBooleanDate84.getItem2());
