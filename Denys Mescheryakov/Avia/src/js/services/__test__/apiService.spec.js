import api, { Api } from "../apiService";
import axios from "axios";
import config from "../../config/apiConfig";

jest.mock("axios");

// const data = {
//     origin: locations.getCityCodeByKey(formData.get("autocomplete-origin")),
//     destination: locations.getCityCodeByKey(
//         formData.get("autocomplete-destination")
//     ),
//     departDate: formData.get("datepicker-depart"),
//     returnDate: formData.get("datepicker-return"),
//     currency: currency.currncyValue,
// };

// jest.mock("../apiService", () => ({
//     params: jest.fn(),
//     prices: jest.fn(),
// }));

const params = {
    origin: "LED",
    destination: "MOW",
    departDate: "2024-10-30",
    returnDate: "2024-11-09",
    currency: "RUB",
};

const price = [
    {
        origin: "LED",
        destination: "MOW",
        airline: "DP",
        departure_at: "2024-10-30T23:45:00+03:00",
        return_at: "2024-11-09T05:20:00+06:00",
        expires_at: "2024-10-30T12:44:19Z",
        price: 20781,
        flight_number: 515,
        transfers: 1,
    },
];

const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];
const countries = [{ code: "RU", name: "Россия" }];
const airlines = [{ country_code: "RU", name: "Airlines", code: "Avia" }];

describe("Тест Api Service", () => {
    it("Проверка что apiService инстанс Location class", () => {
        expect(api).toBeInstanceOf(Api);
    });

    it("Проверка полей конструктора apiService", () => {
        const instance = new Api(config);
        expect(instance.url).toBe(config.url);
    });

    // cities
    it("Проверка запроса получения городов cities()", async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: cities })
        );
        await expect(api.cities()).resolves.toEqual(cities);
        // проверяем с какими аргументами был вызван метод
        expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
    });

    // it("Проверка метода cities() на получение ошибок", async () => {
    //     const errMsg = "Api Error";
    //     axios.get.mockImplementationOnce(() =>
    //         Promise.reject(new Error(errMsg))
    //     );
    //     await expect(api.cities()).rejects.toThrow(errMsg);
    // });

    // countries
    it("Проверка запроса получения стран countries()", async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: countries })
        );
        await expect(api.countries()).resolves.toEqual(countries);
        // проверяем с какими аргументами был вызван метод
        expect(axios.get).toHaveBeenCalledWith(`${config.url}/countries`);
    });

    // it("Проверка метода countries() на получение ошибок", async () => {
    //     const errMsg = "Api Error";
    //     axios.get.mockImplementationOnce(() =>
    //         Promise.reject(new Error(errMsg))
    //     );
    //     await expect(api.countries()).rejects.toThrow(errMsg);
    // });

    // airlines
    it("Проверка запроса получения авиакомпаний airlines()", async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: airlines })
        );
        await expect(api.airlines()).resolves.toEqual(airlines);
        // проверяем с какими аргументами был вызван метод
        expect(axios.get).toHaveBeenCalledWith(`${config.url}/airlines`);
    });

    // it("Проверка метода airlines() на получение ошибок", async () => {
    //     const errMsg = "Api Error";
    //     axios.get.mockImplementationOnce(() =>
    //         Promise.reject(new Error(errMsg))
    //     );
    //     await expect(api.airlines()).rejects.toThrow(errMsg);
    // });

    //prices
    // Проверить что параметры были переданы
    // Что аксиос был вызван с ними

    it("Проверка запроса получения цен метода prices(params) с параметрами", async () => {
        // Мокаем axios.get
        axios.get.mockImplementationOnce(
            () => Promise.resolve({ data: price }) // Здесь возвращаем мокированные данные
        );

        // Вызываем метод prices с параметрами
        await expect(api.prices(params)).resolves.toEqual(price);

        // Проверяем, что axios.get был вызван с правильными параметрами
        expect(axios.get).toHaveBeenCalledWith(`${config.url}/prices/cheap`, {
            params,
        });
    });

    // it("Проверка метода prices(params) на получение ошибок", async () => {
    //     const errMsg = "Api Error";
    //     axios.get.mockImplementationOnce(() =>
    //         Promise.reject(new Error(errMsg))
    //     );
    //     await expect(api.prices()).rejects.toThrow(errMsg);
    // });
});
