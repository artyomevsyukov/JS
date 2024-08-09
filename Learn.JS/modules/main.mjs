// let a = Math.random() > 0.5 ? 1 : 0;

// if (a > 0) {
// }
export default class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}
