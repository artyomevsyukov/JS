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

const cities = [{ country_code: "RU", name: "Москва", code: "MOW" }];
const countries = [{ code: "RU", name: "Россия" }];

function serializeCities(cities) {
    return cities.reduce((acc, city) => {
        const country_name = countries[0].name;

        // const country_name = this.getCountryNameByCode(city.country_code);
        const cityName = city.name || city.name_translations.en;
        const full_name = `${cityName}, ${country_name}`;
        // без мутации оригинального объекта city
        acc[city.code] = { ...city, country_name, full_name };
        return acc;
    }, {});
}

const citiesSerialize = serializeCities(cities);

console.log(Object.values(citiesSerialize));

const city = Object.values(citiesSerialize).find(
    (item) => item.name === "Москва"
);

console.log(city.name);
