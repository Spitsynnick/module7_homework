// Функция принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем
function checkPropInObject(str, obj) { 
  return obj.hasOwnProperty(str); 
};

const person = { 
  name: "Ivan",
  surname: "Ivanov",
};

console.log(checkPropInObject("name", person)); // true
console.log(checkPropInObject("surname", person)); // true
console.log(checkPropInObject("age", person)); // false