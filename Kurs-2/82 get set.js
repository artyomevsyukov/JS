"use strict";

// const task = {
//     title: "Task1",
//     dueTo: new Date("2024/05/05"),
//     // isOverdue() {
//     //     return this.dueTo < new Date();
//     // },
//     get isOverdue() {
//         return this.dueTo < new Date();
//     },
//     set isOverdue(isOverdueTask) {
//         if (!isOverdueTask) {
//             this.dueTo = new Date();
//         }
//     },
// };

// console.log(task.isOverdue);
// console.log(task.isOverdue);
// task.isOverdue = false;
// console.log(task.isOverdue);

class Task {
    constructor(title, dueDate) {
        this.title = title;
        this._dueDate = dueDate;
    }
    get isOverdue() {
        return this._dueDate < new Date();
    }
    get dueDate() {
        return this._dueDate;
    }
    set dueDate(date) {
        if (date >= this._dueDate) {
            this._dueDate = date;
        }
    }
}

const newTask1 = new Task("Задача1", new Date("2024/05/05"));
console.log(newTask1.isOverdue); // false
newTask1.dueDate = new Date("2024/05/05"); // Это не изменит дату, так как новая дата меньше текущей
console.log(newTask1.dueDate); // Выведет исходную дату "2024/06/06"

// const newTask1 = new Task("Задача1", new Date("2024/06/06"));
// console.log(newTask1.isOverdue);
// // console.log((newTask1.dueDate = new Date("2024/05/05")));
