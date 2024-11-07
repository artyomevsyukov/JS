import currencyUI from "./currency";
import locations from "../store/locations";
import ticketsUI from "./tickets";

export class Favorites {
    constructor() {
        this.dropdownFavoritesContainer = document.getElementById("dropdown1");
        this.favoritesBtn = document.querySelector(".dropdown-trigger");
        this.favorites = []; // Массив для хранения избранных билетов
        this.init();
    }

    /**
     * Инициализация обработчиков событий
     */
    init() {
        this.favoritesBtn.addEventListener("click", () => {
            if (!this.favorites.length) {
                this.showAlert("Нет билетов в избранном");
            }
        });
        this.dropdownFavoritesContainer.addEventListener(
            "click",
            this.handleDropdownClick.bind(this)
        );
    }

    /**
     * Обработчик кликов по выпадающему списку избранного
     * @param {Event} e - объект события
     */
    handleDropdownClick(e) {
        const { target } = e;
        if (target.classList.contains("delete-favorite-dropdown")) {
            const ticketCard = target.closest(".favorite-item");
            const key = ticketCard.dataset.key;

            const ticket = locations.lastSearch.find(
                (ticket) => ticket.key === key
            );
            if (ticket) {
                this.removeFromFavorites(ticket);
                ticketsUI.toggleFavoriteButtons(
                    document.querySelector(`.ticket-card[data-key="${key}"]`),
                    false
                );
            }
        }
    }

    /**
     * Добавляет билет в избранное и обновляет отображение
     * @param {Object} ticket - объект билета
     */
    addToFavorites(ticket) {
        if (!this.favorites.find((favTicket) => favTicket.key === ticket.key)) {
            this.favorites.push(ticket);
            this.renderFavorites();
        }
    }

    /**
     * Удаляет билет из избранного и обновляет отображение
     * @param {Object} ticket - объект билета
     */
    removeFromFavorites(ticket) {
        this.favorites = this.favorites.filter(
            (favTicket) => favTicket.key !== ticket.key
        );
        this.renderFavorites();
    }

    /**
     * Отображает избранные билеты в выпадающем списке
     */
    renderFavorites() {
        this.clearContainer();

        const fragment = this.favorites
            .map((ticket) => Favorites.favoriteTemplate(ticket, this.currency))
            .join("");
        this.dropdownFavoritesContainer.insertAdjacentHTML(
            "afterbegin",
            fragment
        );
    }

    /**
     * Показывает всплывающее уведомление о пустом списке избранного
     * @param {String} msg - текст уведомления
     */
    showAlert(msg) {
        M.toast({ html: msg, displayLength: 1000, classes: "toast-fail" });
    }

    /**
     * Очищает контейнер избранного перед повторным рендером
     */
    clearContainer() {
        this.dropdownFavoritesContainer.innerHTML = "";
    }

    /**
     * Шаблон избранного билета для отображения в выпадающем меню
     * @param {Object} ticket - объект билета
     * @param {String} currency - символ валюты
     * @returns {string} - HTML разметка для билета в избранном
     */
    static favoriteTemplate(ticket, currency) {
        currency = currencyUI.currencySymbol;
        return `
            <div class="favorite-item d-flex align-items-start" data-key="${ticket.key}">
                <img src="${ticket.airline_logo}" class="favorite-item-airline-img" alt="Airline logo" />
                <div class="favorite-item-info d-flex flex-column">
                    <div class="favorite-item-destination d-flex align-items-center">
                        <div class="d-flex align-items-center mr-auto">
                            <span class="favorite-item-city">${ticket.origin_name}</span>
                            <i class="medium material-icons">flight_takeoff</i>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="medium material-icons">flight_land</i>
                            <span class="favorite-item-city">${ticket.destination_name}</span>
                        </div>
                    </div>
                    <div class="ticket-time-price d-flex align-items-center">
                        <span class="ticket-time-departure">${ticket.departure_at}</span>
                        <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
                    </div>
                    <div class="ticket-additional-info">
                        <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                        <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
                    </div>
                    <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite-dropdown ml-auto">Delete</a>
                </div>
            </div>`;
    }
}

const favoritesUI = new Favorites();
export default favoritesUI;
