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

//1. Удаление рекламы
const adv = document.querySelectorAll(".promo__adv img");
adv.forEach((element) => {
    element.remove();
});
// adv.innerHTML = "";

// 2.
const promoGenre = document.querySelector(".promo__genre");
promoGenre.textContent = "ДРАМА";

//3.
const promoBg = document.querySelector(".promo__bg");
// promoBg.style.backgroundImage = "url('../img/bg.jpg')";

//4.

function generateFilmList(movieDB) {
    const container = document.querySelector(".promo__interactive-list");
    container.innerHTML = "";
    movieDB.sort().forEach((film, index) => {
        const li = generateLi(film, index);
        container.append(li);
    });

    return container;
}

function generateLi(film, index) {
    const li = document.createElement("li");
    li.innerHTML = `
    <li class="promo__interactive-item">${index + 1} - ${film}
        <div class="delete"></div>
    </li>
    `;

    return li;
}

generateFilmList(movieDB.movies);
