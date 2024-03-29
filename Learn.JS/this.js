// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         },
//     };
// }

// let user = makeUser();

// console.log(user.ref().name); // John

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         // return this;
//     },
//     down() {
//         this.step--;
//         // return this;
//     },
//     showStep: function () {
//         console.log(this.step);
//         // return this;
//     },
// };
// ladder.up().up().up().down().showStep();

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        },
    };
}

let user = makeUser();

console.log(user.ref().name); // Каким будет результат?

/* 
Если непонятно почему в 1ой задаче ошибка:
this вызывается в функции и там же принимает значение undefined (смотрите на место вызова)потому что у функции контекста нету.
То есть, в блоке функции ключ ref принимает сразу undefined и копируют в user тоже undefined.
Следовательно, в вызове будет ошибка т.к. не найдена ссылка на обьект

п.с. Прошу простить за точность, но суть я донес
**/
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     },
// };

// ladder.up().up().down().showStep().down().showStep();
