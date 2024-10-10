const userAPI = "https://jsonplaceholder.typicode.com/users";
const btn = document.querySelector(".btn");
const col = document.querySelector(".col");
const colInfo = document.querySelector(".col__info");
const userInfo = document.querySelector(".col__info");

async function getUsers(cb, api) {
    try {
        const response = await fetch(`${api}`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        cb(data);
    } catch (e) {
        console.log(`Ошибка запроса ${e.message}`);
    }
}

// all user

function cardTemplate(user) {
    // const card = document.createElement("div");
    // card.classList.add("card");
    // const ul = document.createElement("ul");
    // ul.classList.add("list-group", "user-list");
    // card.append(ul);
    // const li = document.createElement("li");
    // li.classList.add("list-group-item", "mt-2");
    // const a = document.createElement("a");
    // a.classList.add("user__link");
    // // a.classList.add("user__link", "list-group-item", "list-group-item-action");
    // a.setAttribute("data-id", user.id);
    // // a.href = `${userAPI}/${user.id}`;
    // a.textContent = user.name;
    // li.append(a);
    // ul.append(li);
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
            <button type="button" class="list-group-item list-group-item-action">A second button item</button>
    `;
    return li;
}

function renderUsers(responce) {
    if (col) {
        col.innerHTML = "";
    }
    console.log(responce);
    const fragment = document.createDocumentFragment();
    const cards = document.createElement("div");
    cards.classList.add("card");

    const ul = document.createElement("ul");
    ul.className = "list-group user-list";
    responce.forEach((user) => {
        const card = cardTemplate(user);
        ul.append(card);
    });
    cards.append(ul);
    fragment.append(cards);

    col.append(fragment);
}

// user INFO

function renderUsersInfo(responce) {
    // console.log(responce);
    if (colInfo) {
        colInfo.innerHTML = "";
    }
    const fragment = document.createDocumentFragment();
    card = cardTemplateUserInfo(responce);
    fragment.append(card);
    colInfo.append(fragment);
}

function cardTemplateUserInfo(user) {
    console.log(user);
    const card = document.createElement("div");

    card.classList.add("card");
    card.innerHTML = `
        <div class="card-header">Имя: ${user.name}</div>
        <div class="card__email">Email: ${user.email}</div>
    `;
    return card;
}

btn.addEventListener("click", () => getUsers(renderUsers, userAPI));

col.addEventListener("click", (e) => {
    const link = col.querySelectorAll(".user__link");
    link.forEach((link) => link.parentElement.classList.remove("active"));
    const { target } = e;
    if (target.tagName != "A") return;
    target.parentElement.classList.add("active");
    // target.classList.add("active");
    console.log(target);
    const id = target.dataset.id;
    console.log(id);

    getUsers(renderUsersInfo, `${userAPI}/${id}`);
});
