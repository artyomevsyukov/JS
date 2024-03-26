// Функция ADD породила зымыкание, она порадила функцию CLOSURE, которая замкнута на контекст, она еще и видит все переменные и аргументы которые есть в функции ADD.
// Какждый раз при выхаве функции ADD порождается функция CLOSURE которая видит новый Х

// const age = 15;
// function add(x) {
//     function closure(y) {
//         const z = x + y;
//         console.log(`${x} + ${y} = ${z}`);
//         return z;
//     }
//     return closure;
// }

// const add = (x) => (y) => {
//     const z = x + y;
//     console.log(`${x} + ${y} = ${z}`);
//     return z;
// };

// const add = (x) => (y) => x + y;

// const result = add(age)(7);
// console.log(result);
//========================================================

const logger = (kind) => {
    const colors = {
        warning: "\x1b[1;33m",
        error: "\x1b[0;31m",
        info: "\x1b[1;37m",
    };
    const color = colors[kind] || colors.info;
    return (s) => {
        const date = new Date().toISOString();
        console.log(color + date + "\t" + s);
    };
};

const warning = logger("warning");
const error = logger("error");
const slow = logger("slow");

warning("sdfsdfsdfasdf");
error("sdfsdfsdfasdf");
slow("sdfsdfsdfasdf");
