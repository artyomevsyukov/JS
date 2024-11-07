import currencyUI from "./currency";
import locations from "../store/locations";
import ticketsUI from "./tickets";

export class Favorites {
    constructor() {
        this.dropdownFavoritesContainer = document.getElementById("dropdown1");
        this.favorites = [];
        this.favoritesBtn = document.querySelector(".dropdown-trigger");
        this.init();
    }

    init() {
        this.favoritesBtn.addEventListener("click", () => {
            if (!this.favorites.length) {
                this.showAlert("Нет билетов в избранном");
                return;
            }
        });
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

        const fragment = favorites
            .map((ticket) => Favorites.FavoritesTemplate(ticket, this.currency))
            .join("");

        this.dropdownFavoritesContainer.insertAdjacentHTML(
            "afterbegin",
            fragment
        );

        this.dropdownFavoritesContainer.addEventListener("click", (e) => {
            const { target } = e;

            if (target.classList.contains("delete-favorite-dropdown")) {
                const ticketCardDropdown = target.closest(".favorite-item");
                let key = ticketCardDropdown.dataset.key;

                if (ticketCardDropdown) {
                    favoritesUI.removeFromFavorites(
                        locations.lastSearch.find(
                            (ticket) => ticket.key === key
                        )
                    );
                    const ticketCard = document.querySelector(
                        `.ticket-card[data-key="${key}"]`
                    );
                    if (ticketCard) {
                        ticketsUI.toggleButtons(ticketCard, false);
                    }
                }
            }
        });
    }

    /**
     * Показывает сообщение о том, что нет билетов в избранном функцией toast materialize
     */

    showAlert(msg) {
        M.toast({ html: msg, displayLength: 1000, classes: "toast-fail" });
    }

    static FavoritesTemplate(ticket, currency) {
        currency = currencyUI.currencySymbol;
        return `
    <div class="favorite-item d-flex align-items-start" data-key="${
        ticket.key
    }">
              <img src="${
                  ticket.airline_logo
              }" class="favorite-item-airline-img" />
              <div class="favorite-item-info d-flex flex-column">
                <div class="favorite-item-destination d-flex align-items-center">
                  <div class="d-flex align-items-center mr-auto">
                    <span class="favorite-item-city">${
                        ticket.origin_name
                    } </span>
                    <i class="medium material-icons">flight_takeoff</i>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="medium material-icons">flight_land</i>
                    <span class="favorite-item-city">${
                        ticket.destination_name
                    }</span>
                  </div>
                </div>
                <div class="ticket-time-price d-flex align-items-center">
                  <span class="ticket-time-departure">${
                      ticket.departure_at
                  }</span>
                  <span class="ticket-price ml-auto">${currency}${4622}</span>
                </div>
                <div class="ticket-additional-info">
                  <span class="ticket-transfers">Пересадок: ${
                      ticket.transfers
                  }</span>
                  <span class="ticket-flight-number">Номер рейса: ${
                      ticket.flight_number
                  }</span>
                </div>
                <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite-dropdown ml-auto">Delete</a>
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
