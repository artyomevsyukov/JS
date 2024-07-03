"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 03 JS
    // Tabs 38 =============================================================================
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
        const target = event.target;
        // if (target && target.classList.contains("tabheader__item")) {
        if (target && target.matches("div.tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            });
        }
    });

    // Timer 41 =============================================================================

    let dedline = "2024-6-29";

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

    function openModal() {
        // modal.classList.toggle("show");
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.remove("show");
        document.body.style.overflow = "";
        window.removeEventListener("scroll", showModalbySroll);
    }

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
            openModal();
            window.removeEventListener("scroll", showModalbySroll);
        }
    }

    const modalTimerId = setTimeout(openModal, 50000);

    // Menu cards

    class MenuCard {
        constructor(img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 90;
            this.changeToRub();
        }
        changeToRub() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement("div");
            // console.log(this.classes);
            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
                // this.classes = ["menu__item"];
            } else {
                this.classes.forEach((className) =>
                    element.classList.add(className)
                );
            }

            // console.log("Со значением по умолчанию", this.classes);

            element.innerHTML = `
                        <img src=${this.img} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                        </div>
                `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        5,
        ".menu .container"
        // "menu__item",
        // "big"
    ).render();
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        8,
        ".menu .container",
        "menu__item"
    ).render();
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        7,
        ".menu .container",
        "menu__item"
    ).render();

    // Forms =========================================================================================================

    const forms = document.querySelectorAll("form");

    const message = {
        loading: "img/form/spinner.svg",
        loading: "img/form/spinner.svg",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так...",
    };

    forms.forEach((item) => {
        postData(item);
    });
    // Обычный формат
    // function postData(form) {
    //     form.addEventListener("submit", (e) => {
    //         e.preventDefault();

    //         const statusMessage = document.createElement("div");
    //         statusMessage.classList.add("status");
    //         statusMessage.textContent = message.loading;
    //         form.append(statusMessage);

    //         const request = new XMLHttpRequest();
    //         request.open("POST", "server.php");

    //         // request.setRequestHeader("Content-type", "multiform/form-data");
    //         const formData = new FormData(form);

    //         request.send(formData);

    //         request.addEventListener("load", () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 form.reset();
    //                 setTimeout(() => statusMessage.remove(), 3000);
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });
    //     });
    // }
    // JSON формат
    function postData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            const request = new XMLHttpRequest();
            request.open("POST", "server.php");

            request.setRequestHeader("Content-type", "application/json");
            const formData = new FormData(form);

            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);
            console.log(json);

            request.send(json);

            request.addEventListener("load", () => {
                if (request.status === 200) {
                    console.log(request.response);
                    // statusMessage.textContent = message.success;
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    // statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);
                }
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        openModal();
        prevModalDialog.classList.add("hide");

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
            `;
        // document.querySelector(".modal").append(thanksModal);
        modal.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }
});
