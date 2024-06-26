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

// Возьмите свой код из предыдущей практики

document.addEventListener("DOMContentLoaded", () => {
    const data = {
        movieList: {
            list: document.querySelector(".promo__interactive-list"),
            deleteBtn: document.querySelectorAll(".delete"),
        },
        form: {
            addForm: document.querySelector("form.add"),
            input: document.querySelector("form .adding__input"),
            btn: document.querySelector("form button"),
            checBox: document.querySelector('form input[type="checkbox"]'),
        },
        poster: document.querySelector(".promo__bg"),
        genre: document.querySelector(".promo__genre"),
        adv: document.querySelectorAll(".promo__adv img"),
        deleteBtn: document.querySelectorAll(".delete"),
    };

    // =========================== 30 =============================
    // const movieDB = {
    //     movies: [
    //         "Логан",
    //         "Лига справедливости",
    //         "Ла-ла лэнд",
    //         "Одержимость",
    //         "Скотт Пилигрим против...",
    //     ],
    // };
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };

    const deleteAvd = (arr) => {
        arr.forEach((item) => item.remove());
    };

    function makeChanges() {
        //2
        data.genre.textContent = "драма";
        //3
        data.poster.style.backgroundImage = 'url("./img/bg.jpg")';
    }

    //4
    function createMovieList(films, parent) {
        // const movieList = document.querySelector(".promo__interactive-list");
        films.sort();

        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item" data-movie-id="${i}">${
                i + 1
            } - ${film}
                    <div class="delete"></div>
                    </li>
                `;
        });

        parent.addEventListener("click", (event) => {});
    }

    // =========================== 33 =============================
    //1-2

    data.form.addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let newFilm = data.form.input.value;

        if (!newFilm.length) return;
        if (newFilm.length > 21) {
            // newFilm = `${newFilm.slice(0, 21)}...`;
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
        if (data.form.checBox.checked) {
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(newFilm);
        createMovieList(movieDB.movies, data.movieList.list);
        event.target.reset();
    });

    //3
    // =================================================================
    data.movieList.list.addEventListener("click", (event) => {
        // if (event.target.classList.contains("delete")) {
        if (event.target.matches("div.delete")) {
            let item = event.target.closest("li");
            let movieId = item.dataset.movieId;

            if (item) {
                if (movieId > -1) {
                    console.log(movieId);
                    movieDB.movies.splice(movieId, 1);
                    console.log("movieDB.movies", movieDB.movies);
                }
                console.log("Удаляемый элемент: ", item);
                // item.remove();
                createMovieList(movieDB.movies, data.movieList.list);
            }
        }
    });

    //4
    deleteAvd(data.adv);
    makeChanges();
    createMovieList(movieDB.movies, data.movieList.list);
});
