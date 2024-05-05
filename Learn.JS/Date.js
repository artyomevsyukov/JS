const date = new Date();

const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
const day = date.getDate().toString().padStart(2, "0");
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const seconds = date.getSeconds().toString().padStart(2, "0");

// const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(formattedDate); // Вывод в формате "гггг-мм-дд чч:мм:сс"

console.log(date.toLocaleString("ru-RU"));
// console.log(date.toLocaleString(navigator.language));
