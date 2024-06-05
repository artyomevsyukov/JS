# document.getElementById

<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // получить элемент
  let elem = document.getElementById('elem');

  // сделать его фон красным
  elem.style.background = 'red';
</script>

# querySelectorAll

Самый универсальный метод поиска – это elem.querySelectorAll(css), он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.

Следующий запрос получает все элементы <li>, которые являются последними потомками в <ul>:

<ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
alert(elem.innerHTML); // "тест", "пройден"
}
</script>

Псевдоклассы тоже работают
Псевдоклассы в CSS-селекторе, в частности :hover и :active, также поддерживаются. Например, document.querySelectorAll(':hover') вернёт коллекцию (в порядке вложенности: от внешнего к внутреннему) из текущих элементов под курсором мыши.

# matches Метод matches проверяет, соответствует ли элемент CSS-селектору, указанному в качестве аргумента

// может быть любая коллекция вместо document.body.children
for (let elem of document.body.children) {
// console.log(elem);
if (elem.matches('a[href$="zip"]') || elem.matches('a[href$="rar"]')) {
// alert("Ссылка на архив: " + elem.href);
console.log("Ссылка на архив: " + elem.href);
}
if (elem.matches("div")) {
// alert("Ссылка на архив: " + elem.href);
console.log("Нашли Span");
}
}

# Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.

<h1>Содержание</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Глава 1</li>
    <li class="chapter">Глава 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (потому что h1 - не предок)
</script>

# Атрибуты и свойства

elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
elem.removeAttribute(name) – удаляет атрибут.

<!-- ///////////////////////////////////////////////////////////////////////////////// -->

Самые верхние элементы дерева доступны как свойства объекта document:

<html> = document.documentElement
Самый верхний узел документа: document.documentElement. В DOM он соответствует тегу <html>.
<body> = document.body
Другой часто используемый DOM-узел – узел тега <body>: document.body.
<head> = document.head
Тег <head> доступен как document.head.

# Дети: childNodes, firstChild, lastChild

Здесь и далее мы будем использовать два принципиально разных термина:

Дочерние узлы (или дети) – элементы, которые являются непосредственными детьми узла. Другими словами, элементы, которые лежат непосредственно внутри данного. Например, <head> и <body> являются детьми элемента <html>.
Потомки – все элементы, которые лежат внутри данного, включая детей, их детей и т.д.

# Коллекция childNodes содержит список всех детей, включая текстовые узлы.

# Для проверки наличия дочерних узлов существует также специальная функция elem.hasChildNodes().

# DOM-коллекции, и даже более – все навигационные свойства, перечисленные в этой главе, доступны только для чтения.

# Мы не можем заменить один дочерний узел на другой, просто написав childNodes[i] = ...

# Не используйте цикл for..in для перебора коллекций. Коллекции перебираются циклом for..of. Некоторые начинающие разработчики пытаются использовать для этого цикл for..in. Не делайте так. Цикл for..in перебирает все перечисляемые свойства. А у коллекций есть некоторые «лишние», редко используемые свойства, которые обычно нам не нужны: length, item, values keys forEach и другие свойства

# Эти ссылки похожи на те, что раньше, только в ряде мест стоит слово Element:

children – коллекция детей, которые являются элементами.
firstElementChild, lastElementChild – первый и последний дочерний элемент.
previousElementSibling, nextElementSibling – соседи-элементы.
parentElement – родитель-элемент.

# Есть метод elem.matches(css), который проверяет, удовлетворяет ли элемент CSS-селектору.

Метод elem.closest(css) ищет ближайшего по иерархии предка, соответствующему данному CSS-селектору. Сам элемент также включён в поиск.
И, напоследок, давайте упомянем ещё один метод, который проверяет наличие отношений между предком и потомком:

elemA.contains(elemB) вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.
