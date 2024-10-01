"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
    const dedline = "2024-10-11";

    // 79==================================================================================

    const menuContainer = document.querySelector(".menu__field .container");
    const CURS = 91.32;

    const cards = [
        {
            img: { src: "img/tabs/vegy.jpg", alt: "vegy" },
            subtitle: 'Меню "Фитнес"',
            descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            cost: 5,
            total: "500",
            currency: "руб/день",
        },
        {
            img: { src: "img/tabs/vegy.jpg", alt: "vegy" },
            subtitle: 'Меню "Фитнес"',
            descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            cost: 7,
            total: "500",
            currency: "руб/день",
        },
        {
            img: { src: "img/tabs/vegy.jpg", alt: "vegy" },
            subtitle: 'Меню "Фитнес"',
            descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            cost: 10,
            total: "500",
            currency: "руб/день",
        },
    ];

    class MenuCard {
        constructor(selector, cards, curs) {
            this.selector = selector;
            this.cards = cards;
            this.curs = curs;
            this.changeToRub(this.cards, this.curs);
        }

        changeToRub(cards, curs) {
            cards.forEach((card) => {
                card.total = (+card.cost * curs).toFixed(0);
                return card.total;
            });
        }
        render() {
            // console.log(this.selector);
            this.cards.forEach((card) => {
                const el = document.createElement("div");
                el.classList.add("menu__item");
                console.log(card);
                el.innerHTML = `
                        <img src="${card.img.src}" alt="${card.img.alt}">
                        <h3 class="menu__item-subtitle">${card.subtitle}</h3>
                        <div class="menu__item-descr">${card.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${card.total}</span> ${card.currency}</div>
                        </div>
                `;

                this.selector.append(el);
            });
            return this.selector;
        }
    }

    new MenuCard(menuContainer, cards, CURS).render();
});
