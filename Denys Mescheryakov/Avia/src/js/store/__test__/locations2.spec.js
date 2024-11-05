// Полная херня

import locations from "../locations"; // Путь к вашему классу Locations
import apiService from "../../services/apiService"; // Путь к вашему API

jest.mock("../../services/apiService", () => {
    return {
        countries: jest.fn(() =>
            Promise.resolve([{ code: "RU", name: "Россия" }])
        ),
        cities: jest.fn(() =>
            Promise.resolve([
                { code: "LED", name: "Санкт-Петербург", country_code: "RU" },
                { code: "MOW", name: "Москва", country_code: "RU" },
            ])
        ),
        airlines: jest.fn(() =>
            Promise.resolve([{ code: "UT", name: "Utair" }])
        ),
        prices: jest.fn(() =>
            Promise.resolve({
                data: [
                    {
                        origin: "LED",
                        destination: "MOW",
                        airline: "UT",
                        departure_at: "05 Nov 2024 21:30",
                        return_at: "28 Nov 2024 19:10",
                        expires_at: "2024-11-05T19:11:20Z",
                        price: 5644,
                        flight_number: 382,
                        transfers: 0,
                    },
                ],
            })
        ),
    };
});

describe("Locations", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Очистка моков перед каждым тестом
    });

    test("fetchTickets должен обновлять lastSearch с данными из API", async () => {
        // Инициализируем локации
        await locations.init();

        const params = {
            // origin: "LED",
            // destination: "MOW",
            // departDate: "2024-11-25",
            // returnDate: "2024-12-15",
            // currency: "RUB",
        };
        // const params = {
        //     origin: "LED",
        //     destination: "MOW",
        //     airline: "UT",
        //     departure_at: "2024-11-09T21:30:00+03:00",
        //     return_at: "2024-11-28T19:10:00+03:00",
        //     expires_at: "2024-11-05T19:37:14Z",
        //     price: 4902,
        //     flight_number: 382,
        //     transfers: 0,
        // };

        await locations.fetchTickets(params); // Вызов метода

        expect(apiService.prices).toHaveBeenCalledWith(params); // Проверка вызова API

        expect(locations.lastSearch).toEqual([
            {
                origin: "LED",
                destination: "MOW",
                airline: "UT",
                departure_at: "05 Nov 2024 21:30",
                return_at: "28 Nov 2024 19:10",
                expires_at: "2024-11-05T19:11:20Z",
                price: 5644,
                flight_number: 382,
                transfers: 0,
                origin_name: "Санкт-Петербург",
                destination_name: "Москва",
                airline_logo: "https://pics.avs.io/200/200/UT.png",
                airline_name: "Utair",
            },
        ]);
    });
});
