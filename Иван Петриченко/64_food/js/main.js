import { MenuCard } from "./menuCard.js";
import { closeModal, openModal } from "./modal.js";
import { postForm } from "./postForm.js";

// document.addEventListener("DOMContentLoaded", () => {
// Tabs 64 =============================================================================
const tabs = document.querySelectorAll(".tabheader__item");
const tabsContent = document.querySelectorAll(".tabcontent");
const tabsParent = document.querySelector(".tabheader__items");

function hideTabContent() {
    tabsContent.forEach((item) => {
        // item.style.display = "none";
        item.classList.add("hide");
        item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
}
function showTabsContent(i = 0) {
    // tabsContent[i].style.display = "block";
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
}

hideTabContent();
showTabsContent();

tabsParent.addEventListener("click", (event) => {
    const { target } = event;
    if (target && target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabsContent(i);
            }
        });
    }
});

// Timer
// Tabs 69 =============================================================================
let dedline = "2024-12-31";

function getTimeRemaining(endTime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.now();

    if (t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor(t / 1000 / 60 / 60 / 24);
        hours = Math.floor((t / 1000 / 60 / 60) % 24);
        minutes = Math.floor((t / 1000 / 60) % 60);
        seconds = Math.floor((t / 1000) % 60);
    }

    return {
        total: t,
        days,
        hours,
        minutes,
        seconds,
    };
}
function getZero(num) {
    if (num >= 0 && num < 10) {
        return (num = "0" + num);
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);
        // console.log(t.total);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            // days.innerHTML = getZero(0);
            // hours.innerHTML = getZero(0);
            // minutes.innerHTML = getZero(0);
            // seconds.innerHTML = getZero(0);
        }
    }
}

setClock(".timer", dedline);

//todo modal// Modal 43-44 ========================================================

// const modal = document.querySelector(".modal"),
//     modalcloseBtn = modal.querySelector(".modal__close");
const modal = document.querySelector(".modal"),
    modalcloseBtn = modal.querySelector("[data-close]"),
    modalTriger = document.querySelectorAll("[data-modal]");

// export function openModal() {
//     // modal.classList.toggle("show");
//     modal.classList.add("show");
//     document.body.style.overflow = "hidden";
//     clearInterval(modalTimerId);
// }

// export function closeModal() {
//     modal.classList.remove("show");
//     document.body.style.overflow = "";
//     window.removeEventListener("scroll", showModalbySroll);
// }

document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.matches("[data-modal]")) {
        openModal();
    }
    if (target.matches("[data-close]")) {
        closeModal();
    }
    // if (e.key === "Escape") {
    //     closeModal();
    // }

    // console.log(target);
});

modal.addEventListener("click", (e) => {
    if (e.target === modal && modal.classList.contains("show")) {
        closeModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
window.addEventListener("scroll", showModalbySroll);

function showModalbySroll() {
    if (
        // window.pageYOffset
        // window.scrollY
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
        // openModal();
        window.removeEventListener("scroll", showModalbySroll);
    }
}

const modalTimerId = setTimeout(openModal, 150000);

// 79 CLASS ==============================================================================

const menuContainer = document.querySelector(".menu__field .container");
const CURS = 91.32;

// const cards = [
//     {
//         img: { src: "img/tabs/vegy.jpg", alt: "vegy" },
//         subtitle: 'Меню "Фитнес"',
//         descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//         cost: 5,
//         total: "500",
//         currency: "руб/день",
//     },
//     {
//         img: { src: "img/tabs/elite.jpg", alt: "elite" },
//         subtitle: "Меню “Премиум”",
//         descr: "В меню “Премиум” мы используем не только красивый дизайн упаковки, нои качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
//         cost: 7,
//         total: "500",
//         currency: "руб/день",
//     },
//     {
//         img: { src: "img/tabs/post.jpg", alt: "post" },
//         subtitle: 'Меню "Постное"',
//         descr: "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ",
//         cost: 10,
//         total: "500",
//         currency: "руб/день",
//     },
// ];

// const cardJSON = JSON.stringify(cards);
// console.log(cardJSON);

async function getCards(serverURL) {
    try {
        const responce = await fetch(serverURL);
        if (!responce.ok) {
            throw new Error(`Ошибка HTTP: ${responce.status}`);
        }
        const cards = await responce.json();
        // console.log(cards);
        return cards;
    } catch (error) {
        console.error("Ошибка при отправке запроса", error);
    }
}

// let cards = await getCards("JSON/cards.json");
// console.log("cards1:", cards);
// let cards = getCards("JSON/cards.json").then((cards) => cards);

// class MenuCard {
//     constructor(selector, cards, curs) {
//         this.selector = selector;
//         this.cards = cards;
//         // this.cards = this.getCards("JSON/cards.json");
//         this.curs = curs;
//         this.changeToRub(this.cards, this.curs);
//     }

//     changeToRub(cards, curs) {
//         cards.forEach((card) => {
//             card.total = (+card.cost * curs).toFixed(0);
//             return card.total;
//         });
//     }

//     // async getCards(serverURL) {
//     //     try {
//     //         const responce = await fetch(serverURL);
//     //         if (!responce.ok) {
//     //             throw new Error(`Ошибка HTTP: ${responce.status}`);
//     //         }
//     //         const cards = await responce.json();
//     //         console.log(cards);
//     //         return cards;
//     //     } catch (error) {
//     //         console.error("Ошибка при отправке запроса", error);
//     //     }
//     // }

//     render() {
//         // console.log(this.selector);
//         this.cards.forEach((card) => {
//             const el = document.createElement("div");
//             el.classList.add("menu__item");
//             // console.log(card);
//             el.innerHTML = `
//                     <img src="${card.img.src}" alt="${card.img.alt}">
//                     <h3 class="menu__item-subtitle">${card.subtitle}</h3>
//                     <div class="menu__item-descr">${card.descr}</div>
//                     <div class="menu__item-divider"></div>
//                     <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${card.total}</span> ${card.currency}</div>
//                     </div>
//             `;

//             this.selector.append(el);
//         });
//         return this.selector;
//     }
// }

async function init() {
    // Дожидаемся загрузки карточек
    let cards = await getCards("JSON/cards.json");
    // console.log("cards:", cards);

    // Убедитесь, что menuContainer и CURS определены
    new MenuCard(menuContainer, cards, CURS).render();
}

// Запускаем инициализацию
init();

// new MenuCard(menuContainer, cards, CURS).render();

// 84 Отправка данных на сервер ===============================================

const modalForms = document.querySelectorAll("form");
modalForms.forEach((form) => {
    postForm(form);
});
// });
