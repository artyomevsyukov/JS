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
        },
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

    const poster = document.querySelector(".promo__bg");
    // console.log(poster);
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
    function render() {
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
    }

    // =========================== 33 =============================
    //1-2
    data.form.btn.addEventListener("click", (event) => {
        event.preventDefault();
        let value = data.form.input.value;
        if (value.length > 21) {
            value = value.slice(0, 20) + "...";
        }
        movieDB.movies.push(value);
        console.log(data.form.input.value);
        console.log(movieDB);
        console.log("send");
        render();
    });

    //3
    console.log(data.deleteBtn);

    data.movieList.list.addEventListener("click", (event) => {
        let item = event.target.closest("li");
        console.log(item);
        if (item) {
            item.remove();
            // получить его индекс в массиве и удалить из массива
            // render();
        }
    });

    //
    render();
});
