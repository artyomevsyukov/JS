/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}',
];

// const postJS = postsJSON.map((value) => JSON.parse(value));
const postJS = postsJSON.map(JSON.parse);
console.log(postJS);
console.log(postJS[1].postId);
console.log(postJS[3].commentsQuantity);
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);
