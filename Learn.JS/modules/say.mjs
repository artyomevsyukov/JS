// export function hi() {
//     console.log(`Привет`);
// }

// export function bye() {
//     console.log(`Пока`);
// }

// import User from "./main.mjs";
// import { sayHi } from "./main.mjs";

import { default as User, sayHi } from "./main.mjs";

const john = new User("John");
console.log(new User("John"));

sayHi(john.name);
