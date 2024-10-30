import api, { Api } from "../apiService";
import axios from "axios";
import config from "../../config/apiConfig";

jest.mock("axios");

const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];

describe("Тест Api Service", () => {
    it("Проверка что apiService инстанс Location class", () => {
        expect(api).toBeInstanceOf(Api);
    });

    it("Проверка полей конструктора apiService", () => {
        const instance = new Api(config);
        expect(instance.url).toBe(config.url);
    });

    it("Проверка запроса получения городов cities()", async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: cities })
        );
        await expect(api.cities()).resolves.toEqual(cities);
        // проверяем с какими аргументами был вызван метод
        expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
    });

    it("Проверка метода cities() на получение ошибок", async () => {
        const errMsg = "Api Error";
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errMsg))
        );
        await expect(api.cities()).rejects.toThrow(errMsg);
    });
});
