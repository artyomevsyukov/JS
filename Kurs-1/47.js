const url = "https://purpleschool.ru/course/javascript";
const url2 = "htt://purpleschool.ru/course/javascript";
const url3 = "https://purpleschoolru/course/javascript";

function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split("/");
    if (protocol === "https:" || protocol === "hhtp:") {
        if (!host.includes(".")) {
            return console.log("Invalid url");
        }
        console.log(`Протокол (${protocol.split(":")[0]})`);
        console.log(`Доменное имя (${host})`);
        console.log(`Пусть внутри сайта /${path.join("/")}`);
    }
}
getUrlParts(url);
getUrlParts(url2);
getUrlParts(url3);
