<!-- https://www.markdownguide.org/basic-syntax/ -->

Включи Markdown Preview CTRL+K V

# Заголовок

## Заголовок 2

**Текс**
_Текс курсив_
~~text~~

## links

https://google.com
[google](https://google.com)
[google][google]
[yandex][2]

## images

<!-- ![My image](https://krots.top/uploads/posts/2023-04/thumbs/1681221659_krot-info-p-milie-kotiki-v-shapochkakh-krasivo-87.jpg) -->

![My image](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)

## list

<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item
    <ul>
      <li>Indented item</li>
      <li>Indented item</li>
    </ul>
  </li>
  <li>Fourth item</li>
</ul>

-   First item
-   Second item
-   Third item
    -   Indented item
    -   Indented item
-   Fourth item

1. list item
1. list item
1. list item
1. list item

---

---

> some code

## code

```js
const a = 1;
```

```html
<div>Text</div>
```

`npm run dev`

```shel
npm run dev
```

```diff
const a = 1;
- const y = 5;
+ const x = 7;
```

## Table

| Dir  | Comment       |
| :--: | :------------ |
| /src | some comments |
| /app | some comments |

## TODO

-   [x] Learn JS
-   [ ] React
<!-- short -->

[google]: https://google.com
[2]: https://yandex.ru
