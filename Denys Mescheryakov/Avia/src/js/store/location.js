import api from "../services/apiService";

class location {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
    }
}

const location = new Location(api);

export default location;
