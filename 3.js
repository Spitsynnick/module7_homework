function createObject() { // Функция, которая создает пустой объект без прототипа
  const emptyObj = Object.create(null);
  return emptyObj;
}

console.log(createObject()); // В консоли выводится объект без прототипа

