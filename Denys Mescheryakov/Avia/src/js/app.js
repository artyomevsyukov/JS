import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import citiesListKeys from "./DATA/citiesListKeys";
import formUI from "./views/form";

// locations.init().then((res) => {
//     console.log(res);
//     console.log(locations);

//     console.log("getCountryNameByCode: ", locations.getCountryNameByCode("RU"));
//     console.log("this.countries: ", locations.countries);
//     console.log("this.cities:", locations.cities);
//     console.log(
//         "this.shortCitiesList: ",
//         locations.createShortCitiesList(locations.cities)
//     );
// });

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    const form = formUI.form;

    // Events

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    // Handlers
    async function initApp() {
        // await locations.init();
        // console.log(locations);
        // formUI.setAutocompleteDate(locations.shortCitiesList);
        formUI.setAutocompleteDate(citiesListKeys);
    }

    async function onFormSubmit() {
        // собрать данные из инпутов
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
        };

        await locations.fetchTickets(data);
    }
});
