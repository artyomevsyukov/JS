import { getResource } from "../services/services";

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

export default cards;
