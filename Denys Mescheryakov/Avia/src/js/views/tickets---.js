import currencyUI from "./currency";
import favoritesUI from "./favorites";
import locations from "../store/locations";

export class TicketUI {
    constructor() {
        this.container = document.querySelector(".tickets-sections .row");
        this.currency = currencyUI.currencySymbol;
    }

    /**
     * Отображает билеты
     * @param {Array} tickets - массив билетов
     * @param {String} currency - символ валюты (по умолчанию используется this.currency)
     */
    renderTickets(tickets = [], currency = this.currency) {
        this.clearContainer();
        let key = null;

        if (!tickets.length) {
            this.showEmptyMsg();
            return;
        }

        const fragment = tickets
            .map((ticket) => TicketUI.ticketTemplate(ticket, currency))
            .join("");
        this.container.insertAdjacentHTML("afterbegin", fragment);

        // Events
        this.container.addEventListener("click", (e) => {
            const { target } = e;

            if (target.classList.contains("add-favorite")) {
                const ticketCard = target.closest(".ticket-card");

                if (ticketCard) {
                    key = ticketCard.dataset.key;

                    favoritesUI.addToFavorites(
                        locations.lastSearch.find(
                            (ticket) => ticket.key === key
                        )
                    );
                    this.toggleButtons(ticketCard, true);
                }
            }

            if (target.classList.contains("delete-favorite")) {
                const ticketCard = target.closest(".ticket-card");

                if (ticketCard) {
                    key = ticketCard.dataset.key;

                    favoritesUI.removeFromFavorites(
                        locations.lastSearch.find(
                            (ticket) => ticket.key === key
                        )
                    );
                    this.toggleButtons(ticketCard, false);
                }
            }
        });
    }

    /**
     * Переключает видимость кнопок "Добавить" и "Удалить из избранного" для билета
     * @param {HTMLElement} card - карточка билета
     * @param {Boolean} isFavorite - флаг, добавлен ли билет в избранное
     */
    toggleButtons(card, isFavorite) {
        const addBtn = card.querySelector(".add-favorite");
        const deleteBtn = card.querySelector(".delete-favorite");

        if (isFavorite) {
            addBtn.classList.add("hide");
            deleteBtn.classList.remove("hide");
        } else {
            addBtn.classList.remove("hide");
            deleteBtn.classList.add("hide");
        }
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
        const template = TicketUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML("afterbegin", template);
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
          </div></div>
        </div>
        `;
    }
}

const ticketsUI = new TicketUI();
export default ticketsUI;
