// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
// }));

// /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Вася Пупкин

// let users = [
//     { id: "john", name: "John Smith", age: 20 },
//     { id: "ann", name: "Ann Smith", age: 24 },
//     { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

/*
  после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

// function groupById(users) {
//     return users.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {});
// }
// function groupById(users) {
//     let result = {};
//     users.forEach((user) => {
//         result[user.id] = user;
//     });
//     return result;
// }

// console.log(usersById);
// console.log("test");
