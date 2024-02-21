// "use strict";

// function calcDicount(age) {
//     if (age > 65) {
//         console.log(this.price / 2);
//     } else {
//         console.log(this.price);
//     }
// }

// const item = { title: "phone", price: 1000 };

// calcDicount.call(item, 70);
// calcDicount.call(item, 50);
//===========
// const obj = {
//     lastName: "Ivanov",
//     firstName: ["Petr", "ivan"],
//     logFullNames1: function () {
//         this.firstName.forEach(function (name) {
//             console.log(`${this.lastName} ${name}`);
//             // }, this); context
//         }, this);
//     },
//     logFullNames2: function () {
//         this.firstName.forEach((name) => {
//             console.log(`${this.lastName} ${name}`);
//         });
//     },
// };
// obj.logFullNames1();
// obj.logFullNames2();

//===========

const item = {
    title: "phone",
    logTitle1: function () {
        setTimeout(function () {
            console.log(`Product1: ${this.title}`);
        }, 1000);
    },
    logTitle2: function () {
        setTimeout(() => {
            console.log(`Product2: ${this.title}`);
        }, 2000);
    },
    // todo спросить у GPT почему в скобках получается функциональное выражение
    logTitle3: function () {
        setTimeout(
            function () {
                console.log(`Product3: ${this.title}`);
            }.bind(this)
        );
    },
};

item.logTitle1();
item.logTitle2();
item.logTitle3();
