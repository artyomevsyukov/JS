//Проверить существует уже в избранном? Или убирать кнопку и помечать что в избранонм
//при рендере добавлять какой-то уникальный номер
// Добавлять индедкс
// получать в избранное объект из LlastSearch
// рендерить уже объект

export class Favorites {
    constructor() {
        this.dropdownFavorites = document.getElementById("dropdown1");
        this.container = document.querySelector(".tickets-sections .row");
        this.addBtns = document.querySelectorAll(".add-favorite");
        this.favorites = [];
    }
    addToFavorites(ticketCard) {
        this.favorites.push(ticketCard);
        console.log("Дообовление в избранное this.favorites", this.favorites);

        // renderFavorites(this.favorites);
    }
    deleteFromFavorites() {
        renderFavorites(this.favorites);
    }
    renderFavorites(favorites = []) {
        clearContainer();
    }

    clearContainer() {
        this.container.innerHTML = "";
    }
}

const favoritesUI = new Favorites();

export default favoritesUI;
