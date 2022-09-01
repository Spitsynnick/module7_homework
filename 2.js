function checkPropInObject(str, obj) { // Функция принимает 2 аргумента: строку и объект
  return obj.hasOwnProperty(str); // Проверяем: есть ли у объекта такое свойство
};


const person = { // Создаем объект с 2-мя свойствами
  name: "Ivan",
  surname: "Ivanov",
};

console.log(checkPropInObject("name", person)); // true
console.log(checkPropInObject("surname", person)); // true
console.log(checkPropInObject("age", person)); // false