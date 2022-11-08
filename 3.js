function createObject() { // Функция создает пустой объект, но без прототипа
  const emptyObj = Object.create(null);
  return emptyObj;
}

console.log(createObject()); // В консоли выводится объект без прототипа

