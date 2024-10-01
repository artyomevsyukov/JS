/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
const container = document.querySelector(".promo__interactive-list");

const adv = document.querySelectorAll(".promo__adv img");
adv.forEach((element) => {
    element.remove();
});

const promoGenre = document.querySelector(".promo__genre");
promoGenre.textContent = "ДРАМА";

const promoBg = document.querySelector(".promo__bg");
promoBg.style.backgroundImage = "url('./img/bg.jpg')";

function createMovieList(films, parent) {
    container.innerHTML = "";
    films.sort().forEach((film, index) => {
        const li = generateLi(film, index);
        container.append(li);
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            console.log("i:", i);
            btn.parentElement.remove();
            films.splice(i, 1);

            createMovieList(films, container);
        });
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

createMovieList(movieDB.movies, container);

// ===============================================

const form = document.querySelector("form.add");
const addBtn = form.querySelector("button");
const checkBox = form.querySelector('input[type="checkbox"]');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let filmInput = document.querySelector(".adding__input").value;
    if (filmInput.length < 1) return;
    if (filmInput.length > 20) {
        filmInput = filmInput.slice(0, 20) + "...";
    }
    if (checkBox.checked) {
        console.log("Добавляем любимый фильм");
    }
    movieDB.movies.push(filmInput);
    createMovieList(movieDB.movies);
    e.target.reset();
});

// const filmList = document.querySelector(".promo__interactive-list");
// const deleteBtn = filmList.querySelector(".delete");
// filmList.addEventListener("click", (event) => {
//     const { target } = event;
//     // if (!target.classList.contains("delete")) return;
//     // console.log("delete");
//     // console.log(target);
//     // if (target && target.closest(".promo__interactive-item")) {
//     //     // target.closest(".promo__interactive-item").remove();
//     //     console.log(target.closest(".promo__interactive-item"));
//     // }

//     if (target && target.classList.contains("delete")) {
//         console.log("delete");
//         const listItem = target.parentElement; // Получаем родительский <li>
//         const filmName = listItem.textContent.slice(4).trim(); // Убираем индекс "1 - " и пробелы

//         console.log(filmName);

//         // Находим индекс фильма в массиве и удаляем его
//         const filmIndex = movieDB.movies.indexOf(filmName);
//         if (filmIndex !== -1) {
//             movieDB.movies.splice(filmIndex, 1); // Удаляем фильм из массива
//         }

//         // Обновляем интерфейс
//         createMovieList(movieDB.movies);
//     }
// });
