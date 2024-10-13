// Custom Http Module
function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener("error", () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener("error", () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        },
    };
}
// Init http module
const http = customHttp();

const newsService = (function () {
    const apiKey = "fc300fc51107481fb280abdfa107f2bd";
    const apiURL = "https://newsapi.org/v2";

    return {
        topHeadlines(country = "us", category = "technology", cb) {
            http.get(
                `${apiURL}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
                cb
            );
        },
        everything(query, cb) {
            http.get(`${apiURL}/everything?q=${query}&apiKey=${apiKey}`, cb);
        },
    };
})();

// Elements

const form = document.forms["newsControls"];
const countrySelect = form["country"];
const categorySelect = form["category"];
const searchInput = form["search"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    loadNews();
});

//  init selects
document.addEventListener("DOMContentLoaded", function () {
    M.AutoInit();
    loadNews();
});

// load news function
function loadNews() {
    showLoader();
    const country = countrySelect.value;
    const category = categorySelect.value;
    const searchText = searchInput.value;

    if (!searchText) {
        newsService.topHeadlines(country, category, onGetResponce);
    } else {
        newsService.everything(searchText, onGetResponce);
    }
}

// Обработка данных
function onGetResponce(err, res) {
    removePreloader();

    if (err) {
        showAlert(err, "error-msg");
        return;
    }

    if (!res.articles.length) {
        // show empty message
        showEmptyMessage("Таких новостей нет");
        return;
    }

    renderNews(res.articles);
}

//function render news
function renderNews(news) {
    const newsContainer = document.querySelector(".news-container .row");

    if (newsContainer.children.length) {
        clearContainer(newsContainer);
    }

    let fragment = "";

    news.forEach((newsItem, i) => {
        if (newsItem.content !== "[Removed]" && newsItem.content) {
            const el = newsTemplate(newsItem, i);

            fragment += el;
        }
    });

    newsContainer.insertAdjacentHTML("beforeend", fragment);
}

function clearContainer(container) {
    container.innerHTML = "";
}

//news item template function
function newsTemplate({ urlToImage, title, url, description }, index) {
    return `
    <div class="col s12" data-index="${index}">
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage}">
                    <span class="card-title">${title || ""}</span>
                </div>
            </div>
            <div class="card-content">
                      <p>${description || ""}</p>
            </div>
            <div class="card-action">
                    <a href="${url}">Read more</a>
            </div>
    </div>
    `;
}

// show error

function showAlert(msg, type = "success") {
    M.toast({ html: msg, class: type });
}
function showEmptyMessage(msg) {
    console.log(msg);
}

function showLoader() {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="progress">
        <div class="indeterminate"></div>
    </div>`
    );
}

function removePreloader() {
    const loader = document.querySelector(".progress");
    if (loader) {
        loader.remove();
    }
}
