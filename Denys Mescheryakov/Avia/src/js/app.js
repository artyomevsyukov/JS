import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
// import citiesListKeys from "./DATA/citiesListKeys";
import formUI from "./views/form";
import currencyUI from "./views/currency";

document.addEventListener("DOMContentLoaded", () => {
    // FIXME
    initApp();
    const form = formUI.form;
    const currency = currencyUI.currncyValue;
    // console.log(currency);

    // Events
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    // Handlers
    async function initApp() {
        await locations.init();

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

        formUI.setAutocompleteDate(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // собрать данные из инпутов
        const currency = currencyUI.currncyValue;
        // console.log(currency);

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
            currency: currency,
        };

        await locations.fetchTickets(data);
    }
});
