//Находим  индекс наименьшего элемента в массиве
function findSmallest(arr) {
  let smallest = arr[0] // Для хранения наименьшего значения
  let smallestIndex = 0 // Для хранения индекса наименьшего значения

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

// Функция сортировки выбором
function selectionSort(arr) {
  const newArr = [] // Новый массив для отсортированных элементов
  while (arr.length > 0) {
    const smallest = findSmallest(arr) // Находит индекс наименьшего элемента
    newArr.push(arr.splice(smallest, 1)[0]) // Удаляет и добавляет элемент в новый массив
  }
  return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))
