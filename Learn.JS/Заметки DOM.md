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
