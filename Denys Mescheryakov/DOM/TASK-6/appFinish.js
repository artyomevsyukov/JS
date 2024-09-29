const users = [
    {
        id: "t624654645747",
        name: "John Smith",
        age: 20,
        balance: 2853.33,
        gender: "male",
        email: "sdgsgg@gfsgfd.com",
        phone: "1564861234",
        company: "KNKLCV",
    },
    {
        id: "h452674747567",
        name: "Ann Smith",
        age: 24,
        balance: 23422.12,
        gender: "male",
        email: "jklhjkl@bnmbnm.com",
        phone: "1564861234",
        company: "KNKLCV",
    },
    {
        id: "j315346758676",
        name: "Pete Peterson",
        age: 31,
        balance: 6575.64,
        gender: "male",
        email: "lkjukj@qerter.com",
        phone: "1564861234",
        company: "523454325",
    },
    {
        id: "l345345345311",
        name: "Max Hash",
        age: 34,
        balance: 8797,
        gender: "male",
        email: "zxcvdfgs@awefw.com",
        phone: "1564861234",
        company: "dfsgdfg",
    },
];

const tableSchema = {
    index: "#",
    name: "Name",
    email: "Email",
    balance: "Balance",
    company: "company",
};

// generateThead
// generateTr
// generateTableTemplate
//initTable
// generateTbody
//generateItemsShema

//generateTotalBalance

function generateThead(tableSchema) {
    const thead = document.createElement("thead");
    const tr = generateTr(tableSchema, "th");
    thead.append(tr);

    return thead;
}

function generateTbody(tableSchema, items) {
    const tbody = document.createElement("tbody");

    items.forEach((value, index) => {
        value.index = index + 1;
        const itemShema = generateItemsShema(tableSchema, value);
        console.log("itemShema", itemShema);

        const tr = generateTr(itemShema);
        tbody.append(tr);
    });

    return tbody;
}

function generateItemsShema(tableSchema, item) {
    const itemShema = Object.keys(tableSchema).reduce((result, key) => {
        if (key in item) {
            // if (item.hasOwnProperty(key)) {
            result[key] = item[key];
        }
        return result;
    }, {});
    // console.log("itemShema:", itemShema);
    return itemShema;
}

function generateTr(tableSchema, tagName = "td") {
    const tr = document.createElement("tr");
    Object.values(tableSchema).forEach((value) => {
        const td = document.createElement(tagName);
        td.textContent = value;
        tr.append(td);
    });

    return tr;
}

function generateTotalBalance(tableSchema, items) {
    const totalBalance = items.reduce(
        (acc, item) => acc + parseFloat(item.balance),
        0
    );
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const columnCounts = Object.keys(tableSchema).length;
    console.log(columnCounts);
    // td.innerHTML = `Total balance: <b>${totalBalance}</b>`;
    td.insertAdjacentHTML("beforeend", `Total balance: <b>${totalBalance}</b>`);
    td.setAttribute("colspan", columnCounts);
    td.setAttribute("align", "right");
    td.classList.add("total-balance");
    tr.append(td);

    return tr;
}

function initTable(tableSchema, items) {
    const container = document.querySelector(".table-container");
    const table = document.createElement("table");
    table.classList.add("table");

    const thead = generateThead(tableSchema);
    const tbody = generateTbody(tableSchema, items);
    const totalBalance = generateTotalBalance(tableSchema, items);
    tbody.append(totalBalance);

    table.append(thead, tbody);

    container.append(table);
}

initTable(tableSchema, users);
