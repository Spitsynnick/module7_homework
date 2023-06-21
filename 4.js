// функция-конструктор 
function Device(type, power) { 
  this.type = type, // тип прибора
  this.power = power, // потребляемая мощность
  this.isSwitchedOn = false // логическое свойство, определяющее: включен или выключен прибор
};
// метод, включающий прибор в розетку
Device.prototype.switchOn = function() { 
  this.isSwitchedOn = true;
  console.log(`${this.type} is switched on`);
};
 // метод, выключающий прибор из розетки
Device.prototype.switchOff = function() {
  this.isSwitchedOn = false;
  console.log(`${this.type} is switched off`);
};

// создать объект - компьютер
const computer = new Device("Notebook", 45);
 // создать объект - стиральная машина
const washingMachine = new Device("Automatic WM", 1700); 

// проверка:
console.log(computer.type); // Notebook
computer.switchOn(); // Notebook is switched on
console.log(computer.isSwitchedOn); // true

console.log(washingMachine.type); // Automatic WM
washingMachine.switchOn(); // Automatic WM is switched on
console.log(washingMachine.isSwitchedOn); // true

// функция-конструктор рабочего компьютера
const Workingcomp = function(system, processor) { 
  this.system = system, // ОС
  this.processor = processor, // процессор
  this.connectionToInternet =  function() { // метод для подключения к интернету
    console.log("Notebook is connected to internet");
  }
};
// функция-конструктор рабочей стиральной машины
const Workingmachine = function(load, consumption) { 
  this.load = load, // загрузка белья
  this.consumption = consumption, // потребление воды
  this.washing = function() { // метод для стирки белья
    console.log("Washing in process");
  }
};
// назначить компьютер прототипом рабочего компьютера
Workingcomp.prototype = computer;
// назначить стиральную машину прототипом рабочей машины
Workingmachine.prototype = washingMachine; 

// создать экземпляр рабочего компьютера
const lenovo = new Workingcomp("Windows 10", "Intel Celeron");
// создать экземпляр рабочей стиральной машины 
const panasonic = new Workingmachine(6.5, 56); 

// проверка:
console.log(lenovo.type); // Notebook
lenovo.switchOn(); // Notebook is switched on
console.log(lenovo.isSwitchedOn); // true

console.log(lenovo.processor); // Intel Celeron
lenovo.connectionToInternet(); // Notebook is connected to internet
// экземпляр рабочего компьютера обладает всеми свойствами и методами из прототипов компьютера и рабочего компьютера

console.log(panasonic.type); // Automatic WM
panasonic.switchOn(); // Automatic WM is switched on
console.log(panasonic.isSwitchedOn); // true

console.log(panasonic.consumption); // 56
panasonic.washing(); // Washing in process
// экземпляр рабочей машины обладает всеми свойствами и методами из прототипов стиральной и рабочей машин






