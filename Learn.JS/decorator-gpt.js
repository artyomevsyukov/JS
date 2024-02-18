function myDecorator(target) {
    // Логика, добавляемая к целевой функции или объекту
    target.newProperty = "Это новое свойство!";
  }
  
  // Применение декоратора к функции или объекту
  @myDecorator
  function myFunction() {
    console.log("Функция выполнена!");
  }
  
  console.log(myFunction.newProperty); // Выводит "Это новое свойство!"
  