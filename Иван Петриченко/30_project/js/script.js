/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ],
};

const poster = document.querySelector(".promo__bg");
console.log(poster);
//1
// document.querySelector(".promo__adv").remove();
const adv = document.querySelectorAll(".promo__adv img");
adv.forEach((item) => item.remove());

//2

const genre = document.querySelector(".promo__genre");
genre.textContent = "драма";

//3
poster.style.backgroundImage = 'url("./img/bg.jpg")';
// poster.style.background = 'url("./img/bg.jpg") center center / cover no-repeat';
// document.querySelector(".promo__bg").style.background =
// 'url("../img/bg.jpg") center center / cover no-repeat';

//4
// let promoInteractiveItem = document.querySelectorAll(
//     ".promo__interactive-item"
// );

// movieDB.movies.sort((a, b) => a.localeCompare(b));
// let sortedItems = Array.from(promoInteractiveItem);
// console.log(sortedItems);
// sortedItems.map((e, i) => {
//     e.textContent = i + 1 + " - " + movieDB.movies[i];
//     e.insertAdjacentHTML("afterbegin", '<div class="delete"></div>');
// });

// // let i = 0;
// Array.from(promoInteractiveItem)
//     .forEach((element) => {
//         element.innerHTML = movieDB.movies[i];
//         i++;
//     })
//     .sort((a, b) => a.localeCompare(b));
// Array.from(promoInteractiveItem).);

//4
const movieList = document.querySelector(".promo__interactive-list");
movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} - ${film}
        <div class="delete"></div>
    </li>
    `;
});
