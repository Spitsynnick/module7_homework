// функция создает пустой объект, но без прототипа
function createObject() { 
  const emptyObj = Object.create(null);
  return emptyObj;
}

console.log(createObject()); // В консоли выводится объект без прототипа

