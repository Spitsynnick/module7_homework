// фунцкия принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств
function checkObjectProps(obj) { 
  for (let key in obj) { 
    if (obj.hasOwnProperty(key)) { 
      console.log("Ключ: " + key + ". Значение: " + obj[key]); 
    }
  }
};

const obj1 = {a: 1}; 
const obj2 = Object.create(obj1); 
console.log(obj1.isPrototypeOf(obj2)); // true
obj2.b = 2;
obj2.c = 3; 

checkObjectProps(obj2); // "Ключ: b. Значение: 2" "Ключ: c. Значение: 3"
