"use strict";
const company = {
    name: "OOO Agro",
    employees: [
        {
            name: "Sveta",
            getName() {
                return this.name;
            },
        },
    ],
    ceo: {
        name: "Artyom",
        getName() {
            return this.name;
        },
    },
    getName() {
        return this.name;
    },
    getCeoName() {
        return this.ceo.name;
    },
    getEmployeesName() {
        this.employees.map(function (el) {
            console.log(this.el.name);
        });
    },
};

// // company.employees[0].getCompanyName();
// company.employees[0].getCeoName();
// // company.employees[0].getEmployeesName();

// //
console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map((el) => el.getName()));
// console.log(company.getCeoName());
// console.log(company.getEmployeesName());
