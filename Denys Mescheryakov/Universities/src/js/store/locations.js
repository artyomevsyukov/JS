import api from "../services/apiService";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.name = null;
    }
    async init(query) {
        const resporse = await Promise.all([
            this.api.countries(),
            this.api.universities(query),
        ]);

        console.log(resporse);

        const [countries, universities] = resporse;
        this.countries = countries;
        this.universities = universities;

        return resporse;
    }
    getUniversitiesByCountryCode(code) {
        return this.universities.filter(
            (university) => university.alpha_two_code === code
        );
    }
}

const locations = new Locations(api);

export default locations;
