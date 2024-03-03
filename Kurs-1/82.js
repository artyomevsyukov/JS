const users = [
    {
        name: "Вася",
        surname: "Пупкин",
        age: 30,
        skils: ["Разработчик", "DevOps"],
    },
    { name: "Катя", surname: "Белова", age: 18, skils: ["Дизайн"] },
];

const userData = users.map((user) => {
    return {
        fullName: user.name + " " + user.surname,
        skils: user.skils.length,
    };
});

console.log(userData);
