import locationInstance, { Locations } from "../locations";
import { formatDate } from "../../helper/date";
import api, { Api } from "../../services/apiService";

// mock
const countries = [{ code: "RU", name: "Россия" }];
const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];
const airlines = [{ country_code: "RU", name: "Победа", code: "DP" }];

jest.mock("../../services/apiService", () => {
    const mockApi = {
        countries: jest.fn(() =>
            Promise.resolve([{ code: "RU", name: "Россия" }])
        ),
        cities: jest.fn(() =>
            Promise.resolve([
                { country_code: "RU", name: "Москва", code: "MOW" },
            ])
        ),
        airlines: jest.fn(() =>
            Promise.resolve([
                { country_code: "RU", name: "Победа", code: "DP" },
            ])
        ),
    };
    return {
        Api: jest.fn(() => mockApi),
    };
});

const apiService = new Api();

describe("Тест locations store", () => {
    beforeEach(() => {
        locationInstance.countries =
            locationInstance.serializeCountries(countries);
        locationInstance.cities = locationInstance.serializeCities(cities);
        locationInstance.airlines =
            locationInstance.serializeAirlines(airlines);
    });

    it("Проверка что locationInstance инстанс Location class", () => {
        expect(locationInstance).toBeInstanceOf(Locations);
    });

    it("Проверка полей конструктора locationInstance", () => {
        const instance = new Locations(api, { formatDate });
        expect(instance.countries).toBe(null);
        expect(instance.cities).toBe(null);
        expect(instance.shortCitiesList).toEqual({});
        expect(instance.airlines).toEqual({});
        expect(instance.lastSearch).toEqual({});
        expect(instance.formatDate).toEqual(formatDate);
    });

    // Проверка данных

    // Countries
    it("Проверка корректной сериализации стран serializeCountries(countries)", () => {
        // без beforeEach
        // const res = locationInstance.serializeCountries(countries);
        // с использованием beforeEach
        const res = locationInstance.countries;
        //
        const expectedData = {
            RU: { code: "RU", name: "Россия" },
        };
        expect(res).toEqual(expectedData);
    });

    it("Проверка корректной сериализации стран serializeCountries(countries) с некорректными данными", () => {
        const res = locationInstance.serializeCountries(null);
        const expectedData = {};
        expect(res).toEqual(expectedData);
    });

    // cities
    it("Проверка корректной сериализации городов serializeCities(cities)", () => {
        const res = locationInstance.serializeCities(cities);
        const expectedData = {
            MOW: {
                country_code: "RU",
                name: "Москва",
                code: "MOW",
                country_name: "Россия",
                full_name: "Москва, Россия",
            },
        };

        expect(res).toEqual(expectedData);
    });

    it("Проверка корректной сериализации городов serializeCities(cities) с некорректными данными", () => {
        const res = locationInstance.serializeCities(null);
        const expectedData = {};
        expect(res).toEqual(expectedData);
    });

    // airlines
    it("Проверка корректной сериализации авиакомпаний serializeAirlines(airlines)", () => {
        const res = locationInstance.serializeAirlines(airlines);
        const expectedData = {
            DP: {
                code: "DP",
                country_code: "RU",
                logo: "https://pics.avs.io/200/200/DP.png",
                name: "Победа",
            },
        };
        expect(res).toEqual(expectedData);
    });
    it("Проверка корректной сериализации авиакомпаний serializeAirlines(airlines) с некорректными данными", () => {
        const res = locationInstance.serializeAirlines(null);
        const expectedData = {};
        expect(res).toEqual(expectedData);
    });

    // Проверка методов
    it("Проверка метода getCityNameByCode(code)", () => {
        const res = locationInstance.getCityNameByCode("MOW");
        expect(res).toBe("Москва");
    });

    // getAirlineNameByCode
    it("Проверка метода getAirlineNameByCode(code)", () => {
        const res = locationInstance.getAirlineNameByCode("DP");
        expect(res).toBe("Победа");
    });

    // getAirlineLogoByCode
    it("Проверка метода getAirlineLogoByCode(code)", () => {
        const res = locationInstance.getAirlineLogoByCode("DP");
        expect(res).toBe("https://pics.avs.io/200/200/DP.png");
    });

    // getCountryNameByCode
    it("Проверка метода getCountryNameByCode(code)", () => {
        const res = locationInstance.getCountryNameByCode("RU");
        expect(res).toBe("Россия");
    });

    // getCityCodeByKey
    it("Проверка метода getCityCodeByKey(fullName)", () => {
        const city = Object.values(locationInstance.cities).find(
            (item) => item.name === "Москва"
        );
        expect(city.code).toBe("MOW");
    });
    // createShortCities
    it("Проверка метода createShortCities(cities)", () => {
        const shortCities = Object.entries(locationInstance.cities).reduce(
            (acc, [, city]) => {
                // console.log(key);
                acc[city.full_name] = null;
                return acc;
            },
            {}
        );

        expect(shortCities).toEqual({ "Москва, Россия": null });
    });

    // fetchTickets
    // it("Проверка метода fetchTickets(params)", () => {
    //     const shortCities = Object.entries(locationInstance.cities).reduce(
    //         (acc, [, city]) => {
    //             // console.log(key);
    //             acc[city.full_name] = null;
    //             return acc;
    //         },
    //         {}
    //     );

    //     expect(shortCities).toEqual({ "Москва, Россия": null });
    // });

    // serializeTickets
    // it("Проверка метода serializeTickets(tickets)", () => {
    //     const tickets = Object.values(tickets).map((ticket) => {
    //         return {
    //             ...ticket,
    //             origin_name: this.getCityNameByCode(ticket.origin),
    //             destination_name: this.getCityNameByCode(ticket.destination),
    //             airline_logo: this.getAirlineLogoByCode(ticket.airline),
    //             airline_name: this.getAirlineNameByCode(ticket.airline),
    //             departure_at: this.formatDate(
    //                 ticket.departure_at,
    //                 "dd MMM yyyy HH:mm"
    //             ),
    //             return_at: this.formatDate(
    //                 ticket.return_at,
    //                 "dd MMM yyyy HH:mm"
    //             ),
    //         };
    //     });

    //     expect(shortCities).toEqual({ "Москва, Россия": null });
    // });

    // Init
    it("Проверка правильного вызова метода Init()", () => {
        const instance = new Locations(apiService, { formatDate });

        expect(instance.init()).resolves.toEqual([countries, cities, airlines]);
    });
});
