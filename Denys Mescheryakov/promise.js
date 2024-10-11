// const promise = new Promise((resolve, reject) => {
//     console.log("1");

//     setTimeout(() => resolve(Math.random()), 1000);
// });
// console.log("2");

// promise
//     .then((res) => {
//         console.log("4: ", res);
//         return res;
//     })
//     .then((x) => console.log("6: ", x * 2));

// console.log("3");

// promise.then((y) => console.log("5: ", y * 100));

// const arr = [{ 1: 1, 5: 5 }, { 2: 2 }, { 3: 3 }];
// const [poster, comment, user] = arr;

// console.log(poster, comment, user);
// const obj = Object.assign({}, { post: poster }, { comment }, { user });
// console.log(obj);

// const data = async (id) =>
//     await fetch(`https://dummyjson.com/posts/${id}`).then((res) =>
//         console.log(res)
//     );
// data(1);
// const d = (async (id) =>
//     await fetch(`https://dummyjson.com/posts/${id}`).then((res) =>
//         console.log(res)
//     ))(1);

// async function getPost(id) {
//     try {
//         const response = await fetch(`https://dummyjson.com/posts/${id}`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// // getPost(1).then((res) => console.log(res));

// async function getAll() {
//     const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
//     console.log(res1, res2);
// }
// getAll();

async function getPost(id) {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
function render(post) {
    console.log(post);
}

async function getAll(...ids) {
    const promise = ids.map(
        // (id) => getPost(id)
        (id) => getPost(id).then((res) => render(res))
    );
    console.log(promise);

    // const result = await Promise.all(promise);
    // console.log(result);
}
getAll(2, 3, 7, 9, 1, 4, 5, 8, 11, 10, 12);
