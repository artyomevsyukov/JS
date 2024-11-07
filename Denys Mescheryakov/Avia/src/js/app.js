import "./plugins";
import "../css/style.css";
import locations from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tickets";
import { dataTickets } from "./DATA/DataTickets";
// import favoritesUI from "./views/favorites";

document.addEventListener("DOMContentLoaded", () => {
    // FIXME
    // initApp();
    const form = formUI.form;

    // Events
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // FIXME
        // onFormSubmit();
        locations.lastSearch = dataTickets;
        ticketsUI.renderTickets(dataTickets, currencyUI.currencySymbol);
    });

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteDate(locations.shortCitiesList);

        // console.log(
        //     "=========================CONSOLE============================="
        // );
        // console.log(locations);
        // console.log("location.countries: ", locations.countries);
        // console.log("location.cities:", locations.cities);
        // console.log(
        //     "location.shortCitiesList: ",
        //     locations.createShortCities(locations.cities)
        // );
        // console.log("location.airlines: ", location.airlines);
        // console.log("location.airlines Serilize: ", location.airlines);

        // console.log("location.countries.RU:", locations.countries.RU);
        // console.log("location.cities.MOW:", locations.cities.MOW);
        // console.log(
        //     "=========================CONSOLE END============================="
        // );
    }

    async function onFormSubmit() {
        // собрать данные из инпутов
        const currency = currencyUI;
        // console.log("currency onFormSubmit: ", currency);

        const formData = new FormData(form);

        const data = {
            origin: locations.getCityCodeByKey(
                formData.get("autocomplete-origin")
            ),
            destination: locations.getCityCodeByKey(
                formData.get("autocomplete-destination")
            ),
            departDate: formData.get("datepicker-depart"),
            returnDate: formData.get("datepicker-return"),
            currency: currency.currncyValue,
        };
        console.log("data:", data);

        await locations.fetchTickets(data);
        ticketsUI.renderTickets(locations.lastSearch, currency.currencySymbol);
    }
});
