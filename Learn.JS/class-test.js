class MyClass {
    constructor() {
        // Экземплярные свойства определяются здесь
        this.instanceProperty = "instance value";
        this.test = "test";
    }

    instanceMethod() {
        console.log("This is an instance method.");
    }
}

// Добавляем свойство в прототип
MyClass.prototype.sharedProperty = "shared value";

// Добавляем метод в прототип
MyClass.prototype.sharedMethod = function () {
    console.log("This is a shared method.");
};

const instance1 = new MyClass();
const instance2 = new MyClass();

console.log(instance1.sharedProperty); // Выведет 'shared value'
console.log(instance2.sharedProperty); // Выведет 'shared value'
console.log(instance1.test); // Выведет 'shared value'
console.log(instance2.test); // Выведет 'shared value'

// Изменяем свойство в прототипе через один из экземпляров
instance1.sharedProperty = "modified shared value";
instance1.test = "dfhgsdfhedherhgearfg";

console.log(instance1.sharedProperty); // Выведет 'modified shared value'
console.log(instance2.sharedProperty); // Всё ещё будет 'shared value', так как мы изменили свойство экземпляра, а не прототипа

console.log(instance1.test);
console.log(instance2.test);
