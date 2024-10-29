import locationInstance, { Locations } from "../locations";
import { formatDate } from "../../helper/date";
import api, { Api } from "../../services/apiService";

// mock
const countries = [{ code: "RU", name: "Россия" }];
const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];

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
});
