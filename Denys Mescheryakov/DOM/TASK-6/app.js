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
// generateTbody
// generateTr
// generateTableTemplate

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
        // console.log(`value: ${value}; value.index: ${value.index}`);
        // console.log("Object.values(value): ", Object.keys(value));
        // console.log(value);
        const itemShema = generateItemsShema(tableSchema, value);
        console.log(itemShema);

        const tr = generateTr(itemShema);
        tbody.append(tr);
    });

    return tbody;
}

function generateItemsShema(tableSchema, item) {
    const itemShema = Object.keys(tableSchema).reduce((result, key) => {
        // if (user.hasOwnProperty(key)) {
        if (key in item) {
            result[key] = item[key];
        }
        return result;
    }, {});

    return itemShema;
}

generateItemsShema(tableSchema, users);

function generateTr(tableSchema, tagName = "td") {
    const tr = document.createElement("tr");
    Object.values(tableSchema).forEach((values) => {
        const td = document.createElement(tagName);
        td.textContent = values;
        tr.append(td);
    });

    return tr;
}

function generateTableTemplate() {
    const table = document.createElement("table");
    table.classList.add("table");

    return table;
}

function initTable(tableSchema, items) {
    const container = document.querySelector(".table-container");
    // const table = document.createElement("table");
    // table.classList.add("table");
    const table = generateTableTemplate();
    const header = generateThead(tableSchema);
    const body = generateTbody(tableSchema, items);

    table.append(header, body);

    container.append(table);
}

initTable(tableSchema, users);
