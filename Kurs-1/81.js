// const user = [
//     { name: "Вася", age: 30 },
//     { name: "Катя", age: 18 },
//     { name: "Аня", age: 40 },
//     { name: "Петя", age: 25 },
// ];

// console.log(user.sort((a, b) => b.age - a.age));

const users = [
    { name: "Вася", age: 30 },
    { name: "Катя", age: 18 },
    { name: "Аня", age: 40 },
    { name: "Петя", age: 25 },
];

const sortedUsers = users.slice().sort((a, b) => a.name.localeCompare(b.name));

console.log(sortedUsers);
