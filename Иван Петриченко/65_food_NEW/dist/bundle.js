/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc() {
    // Calc =========================================================

    const result = document.querySelector(".calculating__result span");

    let sex, ratio;
    let height, weight, age;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "famele";
        localStorage.setItem("sex", sex);
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem("ratio", ratio);
    }

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "_____";
            return;
        }
        if (sex == "famale") {
            result.textContent = Math.floor(
                (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
            );
        } else {
            result.textContent = Math.floor(
                (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
            );
        }
    }

    function initLocalSettings(parentSelector, activeClass) {
        const elements = document.querySelectorAll(parentSelector);

        elements.forEach((el) => {
            el.classList.remove(activeClass);
            if (
                el.getAttribute("data-ratio") ===
                    localStorage.getItem("ratio") ||
                el.getAttribute("id") === localStorage.getItem("sex")
            ) {
                el.classList.add(activeClass); // Добавляем класс активности, если совпадает
            }
        });
    }

    initLocalSettings(
        ".calculating__choose-item",
        "calculating__choose-item_active"
    );
    initLocalSettings("#gender", "calculating__choose-item_active");

    function getStaticInformation(parentSelector, activeClass) {
        const parentElement = document.querySelector(parentSelector);
        const elements = document.querySelectorAll(`${parentSelector} div`);

        parentElement.addEventListener("click", (e) => {
            if (!e.target.classList.contains("calculating__choose-item"))
                return;

            if (e.target.getAttribute("data-ratio")) {
                ratio = +e.target.getAttribute("data-ratio");
                localStorage.setItem("ratio", ratio);
                console.log(ratio);
            } else {
                sex = e.target.getAttribute("id");
                localStorage.setItem("sex", sex);

                console.log(sex);
            }

            elements.forEach((elem) => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);
            calcTotal();
        });
    }

    // <input type="text" id="height" placeholder="Введите рост" class="calculating__choose-item">
    // <input type="text" id="weight" placeholder="Введите вес" class="calculating__choose-item">
    // <input type="text" id="age" placeholder="Введите возраст" class="calculating__choose-item">

    function getDinamicInformation(selector) {
        const element = document.querySelectorAll(`${selector} input`);
        const obj = {};
        element.forEach((el) => {
            el.addEventListener("input", (e) => {
                const regex = /^\d+$/;
                let id = el.id;
                if (regex.test(e.target.value)) {
                    obj[id] = +el.value;
                    console.log(obj);
                    ({ height, weight, age } = obj);
                    console.log("height, weight, age ", height, weight, age);
                    e.target.style.border = "";

                    calcTotal();
                } else {
                    e.target.style.border = "1px solid red";
                    result.textContent = "ОШИБКА";
                }
            });
        });
    }
    getStaticInformation("#gender", "calculating__choose-item_active");
    getStaticInformation(
        ".calculating__choose_big",
        "calculating__choose-item_active"
    );
    getDinamicInformation(".calculating__choose");
    calcTotal();
}

module.exports = calc;


/***/ }),

/***/ "./js/modules/cards-1.js":
/*!*******************************!*\
  !*** ./js/modules/cards-1.js ***!
  \*******************************/
/***/ ((module) => {

function cards() {
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

    getResource("http://localhost:3000/menu").then((data) => {
        data.forEach(({ img, alt, title, descr, price }) =>
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

    // getResource("./db.json").then(({ menu }) => {
    //     menu.forEach(({ img, alt, title, descr, price }) =>
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
}

module.exports = cards;


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
    // Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
    
        return await res.json();
    };



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
}

module.exports = forms;

/***/ }),

/***/ "./js/modules/modal-1.js":
/*!*******************************!*\
  !*** ./js/modules/modal-1.js ***!
  \*******************************/
/***/ ((module) => {

function modal() {
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
}

module.exports = modal;


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
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
        let index = i + 1;
        dot.addEventListener("click", (event) =>
            changeSlidePogination(event, index)
        );
    });

    function changeSlidePogination(e, index) {
        // const slideTo = e.target.getAttribute("data-slide-to");
        slideIndex = index;

        // offset = width * (slideTo - 1);
        offset = width * (index - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    }
}

module.exports = slider;


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
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
}

module.exports = tabs;


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
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
}

module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
document.addEventListener("DOMContentLoaded", () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
    const slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
    const timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
    const forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
    const cards = __webpack_require__(/*! ./modules/cards-1 */ "./js/modules/cards-1.js");
    const modal = __webpack_require__(/*! ./modules/modal-1 */ "./js/modules/modal-1.js");

    tabs();
    slider();
    calc();
    forms();
    timer();
    cards();
    modal();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map