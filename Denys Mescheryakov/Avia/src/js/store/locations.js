import api from "../services/apiService";
import locarionsData from "../DATA/locationsData";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = null;
        this.citiesListKeys = null;
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
        ]);

        const [countries, cities] = response;
        this.countries = this.serializeCountries(countries);
        this.cities = this.serializeCities(cities);
        this.shortCitiesList = this.createShortCitiesList(this.cities);

        // const json = JSON.stringify(this.shortCitiesList);
        // localStorage.setItem("KEYS", json);

        // this.citiesListKeys = JSON.parse(localStorage.getItem("KEYS"));

        return response;
    }

    getCityCodeByKey(key) {
        // fixme
        return locarionsData.cities[key].code;
        // return this.cities[key].code;
    }

    async fetchTickets(params) {
        const response = await this.api.prices(params);
        console.log(response);
    }

    // createShortCitiesList(cities) {
    //     // {'City, Country' : null }
    //     // [key, value]
    //     // 'City, Country'- [key] - в this.cities он уже есть

    //     return Object.entries(cities).reduce((acc, [key]) => {
    //         console.log(key);
    //     }, {});
    // }
    createShortCitiesList(cities) {
        // {'City, Country' : null }
        // [key, value]
        // 'City, Country'- [key] - в this.cities он уже есть
        return Object.keys(cities).reduce((acc, key) => {
            // console.log(key);
            acc[key] = null;
            return acc;
        }, {});
    }

    serializeCountries(countries) {
        // {'Country code' : {...]}
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    serializeCities(cities) {
        // {'City name, Country name  ' : {...}}

        return cities.reduce((acc, city) => {
            // const countryName = this.countries[city.country_code].name;
            const countryName = this.getCountryNameByCode(city.country_code);
            const cityName = city.name || city.name_translations.en;
            const key = `${cityName}, ${countryName}`;

            acc[key] = city;
            return acc;
        }, {});
    }

    getCountryNameByCode(code) {
        return this.countries[code].name;
    }

    // getCitiesByCountryCode(code) {
    //     return Object.entries(this.cities).filter(
    //         (city) => city.country_code === code
    //     );
    // }
}

const locations = new Locations(api);

export default locations;

// {'City, Country' : null }
// [{},{}]
//{'City': {...}}=>{cities.code}
