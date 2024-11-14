// const airlines = {
//     55: {
//         name_translations: {
//             en: "Buta Airways",
//         },
//         code: "55",
//         name: "Buta Airways",
//         is_lowcost: false,
//         logo: "https://pics.avs.io/200/200/55.png",
//     },
//     86: {
//         name_translations: {
//             en: "Up Israel",
//         },
//         code: "86",
//         name: "Up Israel",
//         is_lowcost: false,
//         logo: "https://pics.avs.io/200/200/86.png",
//     },
//     RX: {
//         name_translations: {
//             en: "Riyadh Air",
//         },
//         code: "RX",
//         name: "Riyadh Air",
//         is_lowcost: false,
//         logo: "https://pics.avs.io/200/200/RX.png",
//     },
// };

// console.log(Object.values(airlines).filter((air) => air.code === "RX"));

// const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];
// const countries = [{ code: "RU", name: "Россия" }];

// function serializeCities(cities) {
//     return cities.reduce((acc, city) => {
//         const country_name = countries[0].name;

//         // const country_name = this.getCountryNameByCode(city.country_code);
//         const cityName = city.name || city.name_translations.en;
//         const full_name = `${cityName}, ${country_name}`;
//         // без мутации оригинального объекта city
//         acc[city.code] = { ...city, country_name, full_name };
//         return acc;
//     }, {});
// }

// const citiesSerialize = serializeCities(cities);

// console.log(Object.values(citiesSerialize));

// const city = Object.values(citiesSerialize).find(
//     (item) => item.name === "Москва"
// );

// console.log(city.name);

// const key = "204-61030";

// const tickets = [
//     {
//         origin: "LED",
//         destination: "MOW",
//         airline: "N4",
//         departure_at: "07 Nov 2024 18:10",
//         return_at: "28 Nov 2024 17:25",
//         expires_at: "2024-11-07T08:17:10Z",
//         price: 4622,
//         flight_number: 204,
//         transfers: 0,
//         key: "204-50182",
//         origin_name: "Санкт-Петербург",
//         destination_name: "Москва",
//         airline_logo: "https://pics.avs.io/200/200/N4.png",
//         airline_name: "Nordwind Airlines",
//     },
//     {
//         origin: "LED",
//         destination: "MOW",
//         airline: "N4",
//         departure_at: "08 Nov 2024 21:10",
//         return_at: "28 Nov 2024 19:10",
//         expires_at: "2024-11-07T08:17:10Z",
//         price: 4761,
//         flight_number: 204,
//         transfers: 0,
//         key: "204-61030",
//         origin_name: "Санкт-Петербург",
//         destination_name: "Москва",
//         airline_logo: "https://pics.avs.io/200/200/N4.png",
//         airline_name: "Nordwind Airlines",
//     },
//     {
//         origin: "LED",
//         destination: "MOW",
//         airline: "UT",
//         departure_at: "09 Nov 2024 21:30",
//         return_at: "11 Nov 2024 19:35",
//         expires_at: "2024-11-07T08:17:10Z",
//         price: 4651,
//         flight_number: 382,
//         transfers: 0,
//         key: "382-43983",
//         origin_name: "Санкт-Петербург",
//         destination_name: "Москва",
//         airline_logo: "https://pics.avs.io/200/200/UT.png",
//         airline_name: "Utair",
//     },
// ];

// console.log(tickets.find((ticket) => ticket.key === key));

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // [2, 4, 6, 8]
// console.log(numbers); // [1, 2, 3, 4] (исходный массив не изменен)

const arr = [2, 4, 7, 123, 3, 564, 2];

const max = arr.sort((a, b) => b - a);
console.log(max[0]);
console.log(Math.max(...arr));
