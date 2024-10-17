import "./plugins";
import "../css/style.css";
import locations from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tickets";

document.addEventListener("DOMContentLoaded", () => {
    // FIXME
    initApp();
    const form = formUI.form;

    // Events
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteDate(locations.shortCitiesList);

        console.log(
            "=========================CONSOLE============================="
        );
        console.log(locations);
        console.log("location.countries: ", locations.countries);
        console.log("location.cities:", locations.cities);
        console.log(
            "location.shortCitiesList: ",
            locations.createShortCities(locations.cities)
        );
        console.log("location.airlines: ", location.airlines);

        console.log(
            "=========================CONSOLE END============================="
        );
    }

    async function onFormSubmit() {
        // собрать данные из инпутов
        const currency = currencyUI;
        console.log("currency onFormSubmit: ", currency);

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

        await locations.fetchTickets(data);
        ticketsUI.renderTickets(locations.lastSearch, currency.currencySymbol);
    }
});
