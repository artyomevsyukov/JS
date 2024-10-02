export class MenuCard {
    constructor(selector, cards, curs) {
        this.selector = selector;
        this.cards = cards;
        // this.cards = this.getCards("JSON/cards.json");
        this.curs = curs;
        this.changeToRub(this.cards, this.curs);
    }

    changeToRub(cards, curs) {
        cards.forEach((card) => {
            card.total = (+card.cost * curs).toFixed(0);
            return card.total;
        });
    }

    // async getCards(serverURL) {
    //     try {
    //         const responce = await fetch(serverURL);
    //         if (!responce.ok) {
    //             throw new Error(`Ошибка HTTP: ${responce.status}`);
    //         }
    //         const cards = await responce.json();
    //         console.log(cards);
    //         return cards;
    //     } catch (error) {
    //         console.error("Ошибка при отправке запроса", error);
    //     }
    // }

    render() {
        // console.log(this.selector);
        this.cards.forEach((card) => {
            const el = document.createElement("div");
            el.classList.add("menu__item");
            // console.log(card);
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
