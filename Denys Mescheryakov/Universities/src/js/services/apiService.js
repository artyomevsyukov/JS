import axios from "axios";
import config from "../config/apiConfig";

class Api {
    constructor(config) {
        this.url = config.url;
    }

    async countries() {
        try {
            // const resporse = await axios.get(`${this.url}/countries`);
            const resporse = await axios.get(
                `${this.url}/search?country=Russian%20Federation`
            );
            // console.log(resporse);
            return resporse.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    async countriesCode() {
        try {
            const resporse = await axios.get(
                `${this.url}/search?alpha_two_code="RU"`
            );
            // console.log(resporse);
            return resporse.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    async universities(name) {
        try {
            const resporse = await axios.get(`${this.url}/search?name=${name}`);
            return resporse.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    domain() {}

    // cities() {}
    // prices(parm) {}
}

const api = new Api(config);

export default api;
