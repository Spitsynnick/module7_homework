function checkObjectProps(obj) { // Фунцкия принимает объект в качестве аргумента
  for (let key in obj) { // Перебираем свойства объекта
    if (obj.hasOwnProperty(key)) { // Если свойство объекта - собственное:
      console.log("Ключ: " + key + ". Значение: " + obj[key]); // Вывести в консоль свойство + значение
    }
  }
};

const obj1 = {a: 1}; // Создаем объект - прототип с одним свойством a
const obj2 = Object.create(obj1); // Создаем объект - экземпляр
console.log(obj1.isPrototypeOf(obj2)); // Проверка ("true")
obj2.b = 2;
obj2.c = 3; // Добавляем в экземпляр собственные свойства b и c

checkObjectProps(obj2); // "Ключ: b. Значение: 2" "Ключ: c. Значение: 3"
