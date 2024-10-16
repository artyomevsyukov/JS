import api from "../services/apiService";
// import locarionsData from "../DATA/locationsData";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = {};
        this.airlines = {};
        // this.lastSearch = {}
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
            this.api.airlines(),
        ]);

        const [countries, cities, airlines] = response;
        this.countries = this.serializeCountries(countries);
        this.cities = this.serializeCities(cities);
        this.shortCitiesList = this.createShortCities(this.cities);
        this.airlines = this.serializeAirline(airlines);
        console.log(this.cities);

        return response;
    }
    async fetchTickets(params) {
        const response = await this.api.prices(params);
        console.log("fetchTickets: ", response);
    }

    serializeTickets(tickets) {}

    getCityNameByCode(code) {
        return this.cities[code].name;
    }

    getCityCodeByKey(fullName) {
        const city = Object.values(this.cities).find(
            (item) => item.full_name == fullName
        );
        if (city) {
            // console.log("city.code: ", city.code);
            return city.code;
        } else {
            console.log("Такого города в базе нет");
            return null;
        }
        // Альтернатива
        // const city = this.cities;
        // for (const key in city) {
        //     if (this.cities[key].full_name === fullName) {
        //         return this.cities[key].code;
        //     }
        // }
        // return null;
    }

    getCountryNameByCode(code) {
        return this.countries[code].name;
    }

    getAirlineNameByCode(code) {
        return this.airlines[code] ? this.airlines[code].name : "";
    }

    getAirlineLogoByCode(code) {
        return this.airlines[code] ? this.airlines[code].logo : "";
    }

    // getCitiesByCountryCode(code) {
    //     return Object.entries(this.cities).filter(
    //         (city) => city.country_code === code
    //     );
    // }

    createShortCities(cities) {
        // return Object.entries(cities).reduce((acc, [key, value]) => {
        return Object.entries(cities).reduce((acc, [, city]) => {
            // console.log(key);
            acc[city.full_name] = null;
            return acc;
        }, {});
    }

    serializeAirline(airlines) {
        return airlines.reduce((acc, airline) => {
            airline.logo = `https://pics.avs.io/200/200/${airline.code}.png`;
            airline.name = airline.name || airline.name_translations.en;
            acc[airline.code] = airline;
            return acc;
        }, {});
    }

    serializeCountries(countries) {
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    serializeCities(cities) {
        return cities.reduce((acc, city) => {
            // const countryName = this.countries[city.country_code].name;
            const country_name = this.getCountryNameByCode(city.country_code);
            const cityName = city.name || city.name_translations.en;
            const full_name = `${cityName}, ${country_name}`;

            acc[city.code] = { ...city, country_name, full_name };
            return acc;
        }, {});
    }
}

const locations = new Locations(api);

export default locations;
