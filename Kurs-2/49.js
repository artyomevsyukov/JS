// function convert(sum, initialCurrency, convertCurrency) {
//     const allCurrencies = {
//         style: "currency",
//         currency: [convertCurrency],

//         RUB: {
//             currency: "RUB",
//             curs: 1,
//         },
//         EUR: {
//             currency: "EUR",
//             curs: 98.4,
//         },
//         USD: {
//             currency: "USD",
//             curs: 92.1,
//         },
//     };

//     initialCurrency = allCurrencies[initialCurrency]?.currency;
//     convertCurrency = allCurrencies[convertCurrency]?.currency;
//     // console.log(initialCurrency);
//     // console.log(convertCurrency);

//     if (!initialCurrency || !convertCurrency) {
//         return null;
//     }

//     let convert =
//         (sum * allCurrencies[initialCurrency].curs) /
//         allCurrencies[convertCurrency].curs;
//     // console.log(convert);

//     // let res = new Intl.NumberFormat(initialCurrency, {
//     //     style: "currency",
//     //     currency: convertCurrency,
//     // }).format(convert);

//     let res = new Intl.NumberFormat(initialCurrency, allCurrencies).format(
//         convert
//     );

//     return res;
// }

function convert(sum, initialCurrency, convertCurrency) {
    const allCurrencies = [
        { name: "USD", mult: 1 },
        { name: "EUR", mult: 1.2 },
        { name: "RUB", mult: 92 },
    ];
    const initial = allCurrencies.find((el) => el.name === initialCurrency);
    if (!initial) {
        return null;
    }
    let convert = allCurrencies.find((el) => el.name === convertCurrency);
    if (!convert) {
        return null;
    }

    let res = new Intl.NumberFormat(initial.name, {
        style: "currency",
        currency: convert.name,
    }).format((sum * initial.mult) / convert.mult);

    return res;
}

console.log(convert(30000, "RUB", "USD"));
console.log(convert(30000, "RUB", "EUR"));
console.log(convert(30000, "USD", "RUB"));
console.log(convert(30000, "EUR", "RUB"));
console.log(convert(30000, "USD", "USD"));
console.log(convert(30000, "USD", "EUR"));
console.log(convert(30000, "USD", "ER"));
console.log(convert(30000, "USD", "sg"));
