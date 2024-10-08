// const postData = () => {
//     const res = fetch("http://localhost:3000/menu")
//         .then((data) => data.json())
//         .then((res) => console.log(res));
//     return res;
// };
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(
            `Ошибка запроса по ${url} - ${res.status} ${res.message}`
        );
    }
    return await res.json();
}

// const getResource = async (url) => {
//     let res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(
//             `Ошибка запроса по ${url} - ${res.status} ${res.message}`
//         );
//     }
//     const cards = await res.json();
//     return cards;
// };

// getResource("./db.json").then(({ menu }) => {
//     menu.forEach(({ img, alt, title, descr, price }) =>
//         new MenuCard(
//             img,
//             alt,
//             title,
//             descr,
//             price,
//             ".menu .container",
//             "menu__item"
//         ).render()
//     );
// });

// axios.get("../db.json").then((data) => {
//     // axios.get("http://localhost:3000/menu").then((data) => {
//     data.data.forEach(({ img, alt, title, descr, price }) =>
//         new MenuCard(
//             img,
//             alt,
//             title,
//             descr,
//             price,
//             ".menu .container",
//             "menu__item"
//         ).render()
//     );
// });

// (async function () {
//     const menuCard = await getResource("http://localhost:3000/menu");
//     console.log(menuCard);
//     menuCard.forEach(({ img, alt, title, descr, price }) =>
//         new MenuCard(
//             img,
//             alt,
//             title,
//             descr,
//             price,
//             ".menu .container",
//             "menu__item"
//         ).render()
//     );
// })();

export { postData };
export { getResource };
