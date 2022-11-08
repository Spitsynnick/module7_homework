function Device(type, power) { // функция-конструктор 
  this.type = type, // тип прибора
  this.power = power, // потребляемая мощность
  this.isSwitchedOn = false // логическое свойство, определяющее: включен или выключен прибор
};

Device.prototype.switchOn = function() { // метод, включающий прибор в розетку
  this.isSwitchedOn = true;
  console.log(`${this.type} is switched on`);
};

Device.prototype.switchOff = function() { // метод, выключающий прибор из розетки
  this.isSwitchedOn = false;
  console.log(`${this.type} is switched off`);
};


const computer = new Device("Notebook", 45); // создать объект - компьютер
const washingMachine = new Device("Automatic WM", 1700); // создать объект - стиральная машина

// проверка:
console.log(computer.type); // Notebook
computer.switchOn(); // Notebook is switched on
console.log(computer.isSwitchedOn); // true

console.log(washingMachine.type); // Automatic WM
washingMachine.switchOn(); // Automatic WM is switched on
console.log(washingMachine.isSwitchedOn); // true


const Workingcomp = function(system, processor) { // функция-конструктор рабочего компьютера
  this.system = system, // ОС
  this.processor = processor, // процессор
  this.connectionToInternet =  function() { // метод для подключения к интернету
    console.log("Notebook is connected to internet");
  }
};

const Workingmachine = function(load, consumption) { // функция-конструктор рабочей стиральной машины
  this.load = load, // загрузка белья
  this.consumption = consumption, // потребление воды
  this.washing = function() { // метод для стирки белья
    console.log("Washing in process");
  }
};

Workingcomp.prototype = computer; // назначить компьютер прототипом рабочего компьютера
Workingmachine.prototype = washingMachine; // назначить стиральную машину прототипом рабочей машины


const lenovo = new Workingcomp("Windows 10", "Intel Celeron"); // создать экземпляр рабочего компьютера
const panasonic = new Workingmachine(6.5, 56); // создать экземпляр рабочей стиральной машины

// Проверка:
console.log(lenovo.type); // Notebook
lenovo.switchOn(); // Notebook is switched on
console.log(lenovo.isSwitchedOn); // true

console.log(lenovo.processor); // Intel Celeron
lenovo.connectionToInternet(); // Notebook is connected to internet
// Экземпляр рабочего компьютера обладает всеми свойствами и методами из прототипов компьютера и рабочего компьютера

console.log(panasonic.type); // Automatic WM
panasonic.switchOn(); // Automatic WM is switched on
console.log(panasonic.isSwitchedOn); // true

console.log(panasonic.consumption); // 56
panasonic.washing(); // Washing in process
// Экземпляр рабочей машины обладает всеми свойствами и методами из прототипов стиральной и рабочей машин






