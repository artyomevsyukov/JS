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

let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room, // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log(JSON.stringify(meetup, ["title", "participants"]));
// {"title":"Conference","participants":[{},{}]}
