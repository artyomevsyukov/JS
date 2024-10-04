// import axios from "axios";
("use strict");

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

    // Timer 41 =============================================================================

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

    const modalTimerId = setTimeout(openModal, 12350000);

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

    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(
                `Ошибка запроса по ${url} - ${res.status} ${res.message}`
            );
        }
        const cards = await res.json();
        return cards;
    };

    // (async function () {
    //     const menuCard = await getResource("http://localhost:3000/menu");
    //     console.log(menuCard);
    //     menuCard.forEach(({ img, alt, title, descr, price }) =>
    //         new MenuCard(
    //             img,
    //             alt,
    //             title,
    //             descr,
    //             price,
    //             ".menu .container",
    //             "menu__item"
    //         ).render()
    //     );
    // })();

    // getResource("http://localhost:3000/menu")
    //  .then((data) => {
    //     data.forEach(({ img, alt, title, descr, price }) =>
    //         new MenuCard(
    //             img,
    //             alt,
    //             title,
    //             descr,
    //             price,
    //             ".menu .container",
    //             "menu__item"
    //         ).render()
    //     );
    // });
    getResource("./db.json").then(({ menu }) => {
        menu.forEach(({ img, alt, title, descr, price }) =>
            new MenuCard(
                img,
                alt,
                title,
                descr,
                price,
                ".menu .container",
                "menu__item"
            ).render()
        );
    });

    // axios.get("../db.json").then((data) => {
    //     // axios.get("http://localhost:3000/menu").then((data) => {
    //     data.data.forEach(({ img, alt, title, descr, price }) =>
    //         new MenuCard(
    //             img,
    //             alt,
    //             title,
    //             descr,
    //             price,
    //             ".menu .container",
    //             "menu__item"
    //         ).render()
    //     );
    // });

    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     5,
    //     ".menu .container"
    //     // "menu__item",
    //     // "big"
    // ).render();
    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     "Меню “Премиум”",
    //     "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    //     8,
    //     ".menu .container",
    //     "menu__item"
    // ).render();
    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     7,
    //     ".menu .container",
    //     "menu__item"
    // ).render();

    // Forms =========================================================================================================

    const forms = document.querySelectorAll("form");

    const message = {
        load: "Загрузка",
        loading: "img/form/spinner.svg",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так...",
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    // const postData = () => {
    //     const res = fetch("http://localhost:3000/menu")
    //         .then((data) => data.json())
    //         .then((res) => console.log(res));
    //     return res;
    // };
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });
        return await res.json();
    };

    function bindPostData(form) {
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

            const formData = new FormData(form);
            const object = Object.fromEntries(formData.entries());
            object.date = new Date().toISOString().slice(0, 16);

            const json = JSON.stringify(object);
            // console.log(json);

            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
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

    // slider ==================================================================================================

    // const slides = document.querySelectorAll(".offer__slide"),
    //     next = document.querySelector(".offer__slider-next"),
    //     prev = document.querySelector(".offer__slider-prev");

    // let current = document.getElementById("current"),
    //     total = document.getElementById("total");

    // let slideIndex = 1;

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((slide) => (slide.style.display = "none"));
    //     slides[slideIndex - 1].style.display = "block";
    //     changeCurrent();
    //     changeTotal();
    // }

    // function changeSlideNext(n) {
    //     showSlides((slideIndex += n));
    // }
    // function changeSlidePrev(n) {
    //     showSlides((slideIndex += n));
    // }

    // function changeCurrent() {
    //     if (slideIndex < 10) {
    //         current.textContent = "0" + slideIndex;
    //     }
    // }
    // function changeTotal() {
    //     if (slides.length < 10) {
    //         total.textContent = "0" + slides.length;
    //     }
    // }

    // next.addEventListener("click", () => changeSlideNext(1));
    // prev.addEventListener("click", () => changeSlidePrev(-1));

    // showSlides(slideIndex);

    // slider ==================================================================================================
    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        slidersWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner");
    // const width = window.getComputedStyle(slidesField).width ;
    const width = slidersWrapper.clientWidth;

    let slideIndex = 1;
    let offset = 0;

    let current = document.getElementById("current"),
        total = document.getElementById("total");

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s transform";

    slidersWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
        slide.style.width = width + "px";
    });

    next.addEventListener("click", () => {
        if (offset == width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex += 1;
        }
        dots.forEach((el) => (el.style.opacity = 0.5));
        dots[slideIndex - 1].style.opacity = 1;

        changeCurrent();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex -= 1;
        }

        dots.forEach((el) => (el.style.opacity = 0.5));
        dots[slideIndex - 1].style.opacity = 1;

        changeCurrent();
    });

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    function changeCurrent() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }
    function changeTotal() {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = slides.length;
        }
    }
    changeCurrent();
    changeTotal();

    //  pagination

    const dots = [];
    const indicators = document.createElement("ol");
    indicators.classList.add("carousel-indicators");

    slides.forEach((el, i) => {
        const dot = document.createElement("li");
        dot.classList.add("carousel-dot");
        dot.setAttribute("data-slide-to", i + 1);

        indicators.append(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.push(dot);
    });

    slider.append(indicators);

    dots.forEach((dot, i) => {
        dot.addEventListener("click", (event) => changeSlidePogination(event));
    });

    function changeSlidePogination(e) {
        const slideTo = e.target.getAttribute("data-slide-to");
        slideIndex = slideTo;

        offset = width * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    }
});
