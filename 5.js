class Device { // создаем класс: Device
  constructor(type, power) {
    this.type = type; // тип прибора
    this.power = power; // потребляемая мощность
    this.isSwitchedOn = false; // логическое свойство, определяющее: включен или выключен прибор
  }

  switchOn() { // метод, включающий прибор в розетку
    this.isSwitchedOn = true;
    console.log(`${this.type} is switched on`);
  }

  switchOff = function() { // метод, выключающий прибор из розетки
    this.isSwitchedOn = false;
    console.log(`${this.type} is switched off`);
  }
}

const computer = new Device("Notebook", 45); // создаем экземпляр класса - компьютер
const washingMachine = new Device("Automatic WM", 1700); // создаем экземпляр класса - стиральная машина

// проверка:
console.log(computer.type); // Notebook
computer.switchOn(); // Notebook is switched on
console.log(computer.isSwitchedOn); // true

console.log(washingMachine.type); // Automatic WM
washingMachine.switchOn(); // Automatic WM is switched on
console.log(washingMachine.isSwitchedOn); // true

class Workingcomp extends Device { // Создаем класс: Workingcomp, расширяющий класс Device
  constructor(type, system, processor) {
    super(type);
    this.system = system; // ОС
    this.processor = processor; // процессор
  }

  connectionToInternet() { // метод для подключения к интернету
    console.log("Working computer is connected to internet");
  }
}

class Workingmachine extends Device { // Создаем класс: Workingmachine, расширяющий класс Device
  constructor(type, load, consumption) {
    super(type);
    this.load = load; // загрузка белья
    this.consumption = consumption; // потребление воды
  }

  washing() { // метод для стирки белья
    console.log("Washing in process");
  }
}

const lenovo = new Workingcomp("Notebook", "Windows 10", "Intel Celeron"); // создаем экземпляр класса Workingcomp
const panasonic = new Workingmachine("Automatic WM", 6.5, 56); // создаем экземпляр класса Workingmachine

// Проверка:
console.log(lenovo instanceof Workingcomp); // true
console.log(lenovo instanceof Device); // true

console.log(lenovo.type); // Notebook
lenovo.switchOn(); // Notebook is switched on
console.log(lenovo.isSwitchedOn); // true

console.log(lenovo.processor); // Intel Celeron
lenovo.connectionToInternet(); // Working computer is connected to internet
// Экземпляр класса Workingcomp обладает всеми свойствами и методами из классов Device и Workingcomp

console.log(panasonic instanceof Workingmachine); // true
console.log(panasonic instanceof Device); // true

console.log(panasonic.type); // Automatic WM
panasonic.switchOn(); // Automatic WM is switched on
console.log(panasonic.isSwitchedOn); // true

console.log(panasonic.consumption); // 56
panasonic.washing(); // Washing in process
// Экземпляр класса Workingmachine обладает всеми свойствами и методами из классов Device и Workingmachine








