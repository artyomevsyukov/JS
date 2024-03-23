"use strict";

function getName() {
    return this.name;
}

const company = {
    name: "OOO Agro",
    employees: [
        {
            name: "Sveta",
        },
        {
            name: "Artyom",
        },
        {
            name: "Art",
        },
    ],
    ceo: {
        name: "Artyom",
    },

    getName,
    getCompanyName() {
        return getName.call(company);
    },
};
// company.ceo.getName = getName;
// company.employees.forEach((el) => {
//     el.getName = getName;
// });

// // // company.employees[0].getCompanyName();
// // company.employees[0].getCeoName();
// // // company.employees[0].getEmployeesName();

// // //
console.log(company.getCompanyName());
// console.log(company.getName());
// console.log(company.ceo.getName());
// console.log(company.employees.map((el) => el.getName()));
// // console.log(company.getCeoName());
// // console.log(company.getEmployeesName());
//
//
console.dir(company);
console.log(company);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ("use strict");

// function getName() {
//     return this.name;
// }

// const company = {
//     name: "OOO Agro",
//     employees: [{ name: "Sveta" }, { name: "Artyom" }, { name: "Art" }],
//     ceo: { name: "Artyom" },
//     getName,
// };

// // Присваиваем метод getName каждому сотруднику и CEO
// company.employees.forEach((employee) => {
//     employee.getName = getName;
// });
// company.ceo.getName = getName;

// // Получаем имя компании
// console.log(company.getName()); // Выведет "OOO Agro"

// // Получаем имя CEO
// console.log(company.ceo.getName()); // Выведет "Artyom"

// // Получаем имена всех сотрудников
// console.log(company.employees.map((employee) => employee.getName())); // Выведет ["Sveta", "Artyom", "Art"]

function changeBalance(key) {
    let ballance = 0;
    let key = key + 1;
    let name = "sdf";
    return function (sum) {
        ballance += sum;
        console.log(`Бфланс изменен на ${sum}`);
    };
}

const change = changeBalance();
change(100);
change(200);
const change2 = changeBalance();
change2(333);
change2(111);
console.dir(change);
console.dir(change2);
