// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     wife: null,
//     sayHi() {
//         // будет пропущено
//         alert("Hello");
//     },
//     [Symbol("id")]: 123, // также будет пропущено
//     something: undefined, // как и это - пропущено
// };

// console.log(user);
// console.log(JSON.parse(JSON.stringify(user))); // {} (пустой объект)

// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["john", "ann"],
//         home: {
//             number: 23,
//             participants: ["john", "ann"],
//         },
//     },
//     dom: {
//         123: 345,
//         fdsg: ["dfgs", "3452"],
//     },
// };

// console.log(JSON.stringify(meetup));

// let room = {
//     number: 23,
//     // occupiedBy: meetup,
// };

// let meetup = {
//     place: room,
//     title: "Conference",
//     participants: ["john", "ann"],
// };

// // meetup.place = room; // meetup ссылается на room
// // room.occupiedBy = meetup; // room ссылается на meetup

// console.log(JSON.stringify(meetup));

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"],
//     cccccccccc: ["123123", "rfsdfa"],
// };

// meetup.place = room; // meetup ссылается на room
// room.occupiedBy = meetup; // room ссылается на meetup

// console.log(JSON.stringify(meetup, ["title", "participants"]));

//
// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: [{ name: "John" }, { name: "Alice" }],
//     place: room, // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log(JSON.stringify(meetup, ["title", "participants", "name"]));
// // {"title":"Conference","participants":[{},{}]}
//
// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: [{ name: "John" }, { name: "Alice" }],
//     place: room, // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log(
//     JSON.stringify(meetup, function replacer(key, value) {
//         console.log(`${key}: ${value}`);
//         return key == "occupiedBy" ? undefined : value;
//     })
// );

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log(numbers[1]); // 1
// console.log(numbers); // 1

// let user =
//     '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// console.log(user.friends[1]); // 1
// console.log(user.friends); // 1
// console.log(user); // 1

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//     if (key == "date") return new Date(value);
//     return value;
// });

// console.log(meetup.date.getDate());

// let user = {
//     name: "Василий Иванович",
//     age: 35,
// };

// let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);

// user = JSON.stringify(user);
// console.log(user);

// userPars = JSON.parse(user);
// console.log(userPars);

let arr = [1, 2, 3, 4, 5, 5, 4, 2, 1, 1, 1, 7, 8];
let result = [];

arr.forEach((a) => {
    a in this || result.push((this[a] = []));
    this[a].push(a);
}, {});

console.log(result);
