// Пример функции для debounce
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Функция для отправки запроса на сервер
async function searchQuery(query) {
  try {
    const response = await fetch(
      `https://api.example.com/search?q=${encodeURIComponent(query)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    console.log('Результаты поиска:', data); // Вывод результатов поиска в консоль
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
}

// Привязываем обработчик ввода текста с debounce
const input = document.querySelector('input');
input.addEventListener(
  'input',
  debounce(() => {
    const query = input.value.trim(); // Получаем текст из поля ввода
    if (query) {
      searchQuery(query); // Отправляем запрос на сервер
    }
  }, 300)
);
