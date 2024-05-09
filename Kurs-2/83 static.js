"use strict";

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER, "\n");

class Test {
    static a = 1;
    static b = 2;
    static hello1() {
        console.log("hello-static");
    }

    hello2() {
        console.log("hello-instance");
    }
    // статичные блоки
    static {
        let c = 5;
        this.b = c;
    }
}

Test.hello1();

const test = new Test();
// test.hello1(); //-Error
test.hello2();

// Тоже самое через функцию конструктор и прототип, как работает под копотом (static это объявление не на прототипе, а на самой функции)

const Test2 = function () {
    this.hello3 = function () {
        console.log("hello3");
        hello4();
    };
    let hello4 = function () {
        console.log("hello4");
    };
};
Test2.hello1 = function () {
    console.log("hello-function");
};
Test2.prototype.hello2 = function () {
    console.log("hello-prototype");
};

Test2.hello1();

const test2 = new Test2();
test2.hello2();
test2.hello3();

console.log(Number.MAX_SAFE_INTEGER); // Static

console.log(Test.b);
