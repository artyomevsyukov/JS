//Проверить существует уже в избранном? Или убирать кнопку и помечать что в избранонм

// рендерить уже объект

export class Favorites {
    constructor() {
        this.dropdownFavoritesContainer = document.getElementById("dropdown1");
        this.container = document.querySelector(".tickets-sections .row");
        this.favorites = [];
        this.favoritesBtn = document.querySelector(".dropdown-trigger");
    }
    addToFavorites(ticketCard) {
        this.favorites.push(ticketCard);
        this.renderFavorites(this.favorites);
    }
    removeFromFavorites(ticketCard) {
        this.favorites = this.favorites.filter(
            (ticket) => ticket.key !== ticketCard.key
        );

        this.renderFavorites(this.favorites);
    }

    renderFavorites(favorites = []) {
        this.clearContainer();
        if (!favorites.length) {
            this.showEmptyMsg();
            return;
        }

        const fragment = favorites
            .map((ticket) => Favorites.FavoritesTemplate(ticket))
            .join("");
        this.dropdownFavoritesContainer.insertAdjacentHTML(
            "afterbegin",
            fragment
        );
    }

    /**
     * Показывает сообщение о том, что билеты не найдены
     */
    showEmptyMsg() {
        const template = Favorites.emptyMsgTemplate();
        this.container.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * Шаблон сообщения о пустом результате
     * @returns {string} - HTML разметка
     */
    static emptyMsgTemplate() {
        return `
    <div class="tickets-empty-res-msg">
        Нет билетов в избранном
    </div>`;
    }

    static FavoritesTemplate(ticket) {
        return `
    <div class="favorite-item  d-flex align-items-start">
              <img src="http://pics.avs.io/200/200/PS.png" class="favorite-item-airline-img" />
              <div class="favorite-item-info d-flex flex-column">
                <div class="favorite-item-destination d-flex align-items-center">
                  <div class="d-flex align-items-center mr-auto">
                    <span class="favorite-item-city">Харьков </span>
                    <i class="medium material-icons">flight_takeoff</i>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="medium material-icons">flight_land</i>
                    <span class="favorite-item-city">Львов</span>
                  </div>
                </div>
                <div class="ticket-time-price d-flex align-items-center">
                  <span class="ticket-time-departure">14 Sep 2019 02:30</span>
                  <span class="ticket-price ml-auto">$315</span>
                </div>
                <div class="ticket-additional-info">
                  <span class="ticket-transfers">Пересадок: 1</span>
                  <span class="ticket-flight-number">Номер рейса: 26</span>
                </div>
                <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto">Delete</a>
              </div>
            </div>
    `;
    }

    clearContainer() {
        this.dropdownFavoritesContainer.innerHTML = "";
    }
}

const favoritesUI = new Favorites();

export default favoritesUI;
