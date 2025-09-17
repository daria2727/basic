// ООП -парадигма программирования,
//которая использует "обьекты" для представления
//данных и методов для работы с этими данными.

//1. Класс и Обьект (Class & Object)
//класс - "чертеж" для создания обьектов
//обьект - экземпляр класса с собственными данными
//object - instance of class

class Animal {
    //конструктор - специальный метод
    //для создания и инциализации обьекта
    constructor(name, age) {
    //this ссылка на текущий обьект
    this.name = name;
    this.age = age;

}
//метод - это функция внутри обьекта
speak() {
    console.log(`${this.name} издает какой-то звук.`);
}
displayInfo() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
}

}
//создание обьектов (экземпляров класса)


const genericAnimal = new Animal(`Some animal`, 5);
const myDog = new Animal (`Шарик`, 8);

genericAnimal.displayInfo();
myDog.speak();
myDog.displayInfo();
