import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import citiesListKeys from "./JSON/citiesListKeys";
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

    // Events

    // Handlers
    async function initApp() {
        // await locations.init();
        // formUI.setAutocompleteDate(locations.shortCitiesList);
        formUI.setAutocompleteDate(citiesListKeys);
    }
});
