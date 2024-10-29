import locationInstance, { Locations } from "../locations";
import { formatDate } from "../../helper/date";
import api, { Api } from "../../services/apiService";

// mock
const countries = [{ code: "RU", name: "Россия" }];
const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];
const airline = [{ country_code: "RU", name: "Airlines", code: "Avia" }];

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
                { country_code: "RU", name: "Airlines", code: "Avia" },
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
    });

    it("Проверка что locationInstance инстанс Location class", () => {
        expect(locationInstance).toBeInstanceOf(Locations);
    });

    it("Проверка полей конструктора locationInstance", () => {
        const instance = new Locations(api, { formatDate });
        expect(instance.countries).toBe(null);
        expect(instance.shortCitiesList).toEqual({});
        expect(instance.formatDate).toEqual(formatDate);
    });

    it("Проверка корректной сериализации стран", () => {
        const res = locationInstance.serializeCountries(countries);
        const expectedData = {
            RU: { code: "RU", name: "Россия" },
        };
        expect(res).toEqual(expectedData);
    });

    it("Проверка корректной сериализации стран с некорректными данными", () => {
        const res = locationInstance.serializeCountries(null);
        const expectedData = {};
        expect(res).toEqual(expectedData);
    });

    it("Проверка корректной сериализации городов", () => {
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

    it("Проверка метода getCityNameByCode()", () => {
        const res = locationInstance.getCityNameByCode("MOW");

        expect(res).toBe("Москва");
    });

    it("Проверка правильного вызова метода Init()", () => {
        const instance = new Locations(apiService, { formatDate });

        expect(instance.init()).resolves.toEqual([countries, cities, airline]);
    });
});
