import locations from "./store/locations";
import "../css/style.css";

locations.init("Aviation").then((res) => {
    console.log(res);
    console.log(locations);
    console.log(locations.getUniversitiesByCountryCode("RU"));
});

// import api from "./services/apiService";

// api.console();

// api.countries().then((res) => console.log(res));
// api.countriesCode().then((res) => console.log(res));
// api.nameQuery().then((res) => console.log(res));
//
