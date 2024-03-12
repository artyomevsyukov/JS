// let hamster = {
//     stomach: [],

//     eat(food) {
//         // this.stomach = [food];
//         this.stomach.push(food);
//     },
// };

// let speedy = { stomach: [], __proto__: hamster };

// let lazy = { stomach: [], __proto__: hamster };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// lazy.eat("apple");
// lazy.eat("banan");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple
// console.log(lazy); // apple

let user = {
    name: "John",
    surname: "Smith",
    walk() {
        console.log("walk");
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// срабатывает сеттер!
// admin.walk = function () {
//     console.log("admin");
// };
admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper

console.log(admin);
// admin.walk();
