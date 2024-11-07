import currencyUI from "./currency";
import favoritesUI from "./favorites";
import locations from "../store/locations";

export class TicketUI {
    constructor() {
        this.container = document.querySelector(".tickets-sections .row");
        this.currency = currencyUI.currencySymbol;
        this.init();
    }

    init() {
        // Устанавливаем обработчик на контейнер
        this.container.addEventListener(
            "click",
            this.handleContainerClick.bind(this)
        );
    }

    /**
     * Основной обработчик событий для контейнера с билетами
     * @param {Event} e - объект события
     */
    handleContainerClick(e) {
        const { target } = e;
        const ticketCard = target.closest(".ticket-card");

        if (!ticketCard) return;

        const key = ticketCard.dataset.key;
        const ticket = locations.lastSearch.find(
            (ticket) => ticket.key === key
        );

        if (target.classList.contains("add-favorite")) {
            favoritesUI.addToFavorites(ticket);
            this.toggleFavoriteButtons(ticketCard, true);
        }

        if (target.classList.contains("delete-favorite")) {
            favoritesUI.removeFromFavorites(ticket);
            this.toggleFavoriteButtons(ticketCard, false);
        }
    }

    /**
     * Отображает билеты
     * @param {Array} tickets - массив билетов
     * @param {String} currency - символ валюты (по умолчанию используется this.currency)
     */
    renderTickets(tickets = [], currency = this.currency) {
        this.clearContainer();

        if (!tickets.length) {
            this.showEmptyMsg();
            return;
        }

        const fragment = tickets
            .map((ticket) => TicketUI.ticketTemplate(ticket, currency))
            .join("");
        this.container.insertAdjacentHTML("afterbegin", fragment);
    }

    /**
     * Переключает видимость кнопок "Добавить" и "Удалить из избранного" для билета
     * @param {HTMLElement} card - карточка билета
     * @param {Boolean} isFavorite - флаг, добавлен ли билет в избранное
     */
    toggleFavoriteButtons(card, isFavorite) {
        card.querySelector(".add-favorite").classList.toggle(
            "hide",
            isFavorite
        );
        card.querySelector(".delete-favorite").classList.toggle(
            "hide",
            !isFavorite
        );
    }

    /**
     * Очищает контейнер с билетами
     */
    clearContainer() {
        this.container.innerHTML = "";
    }

    /**
     * Показывает сообщение о том, что билеты не найдены
     */
    showEmptyMsg() {
        this.container.insertAdjacentHTML(
            "afterbegin",
            TicketUI.emptyMsgTemplate()
        );
    }

    /**
     * Шаблон сообщения о пустом результате
     * @returns {string} - HTML разметка
     */
    static emptyMsgTemplate() {
        return `
            <div class="tickets-empty-res-msg">
                По вашему запросу билетов не найдено.
            </div>`;
    }

    /**
     * Шаблон билета
     * @param {Object} ticket - данные билета
     * @param {String} currency - символ валюты
     * @returns {string} - HTML разметка
     */
    static ticketTemplate(ticket, currency) {
        return `
            <div class="col s12 m10 l6 xl6 mx-auto">
              <div class="card ticket-card" data-key="${ticket.key}">
                <div class="ticket-airline d-flex align-items-center">
                  <img src="${ticket.airline_logo}" class="ticket-airline-img" alt="Airline logo" />
                  <span class="ticket-airline-name">${ticket.airline_name}</span>
                </div>
                <div class="ticket-destination d-flex align-items-center">
                  <div class="d-flex align-items-center mr-auto">
                    <span class="ticket-city">${ticket.origin_name}</span>
                    <i class="medium material-icons">flight_takeoff</i>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="medium material-icons">flight_land</i>
                    <span class="ticket-city">${ticket.destination_name}</span>
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
                <div class="change-favorites">
                  <button class="waves-effect waves-light btn-small green darken-1 add-favorite ml-auto show">
                    Add to favorites
                  </button>
                  <button class="waves-effect waves-light btn-small red darken-1 delete-favorite ml-auto hide">
                    Delete from favorites
                  </button>
                </div>
              </div>
            </div>`;
    }
}

const ticketsUI = new TicketUI();
export default ticketsUI;
