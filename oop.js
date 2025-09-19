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


//2. Инкапсуляция (Encapsulation)
//инкапсуляцияя - скрытие внутренней реализации от внешнего мира
//или же - обьединение данных и методов
//и работы с этими данными в одном классе

console.log('---Инкапсуляция---');
class BankAccount {
    #balance =0; //приватное свойство
    constructor(initialBalance) {
        if(initialBalance > 0) {
            this.#balance = initialBalance;

        }
    }
    //Публичный метод для внесения денег
    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Внесено: ${amount}.Новый баланс: ${this.#balance}`);
        }
    }
    //публичный метод для снятия денег
    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Снято: ${amount}.Новый баланс: ${this.#balance}`);

        } else {
            console.log(`Недостаточно средств или неверная сумма.`);
            
        }
    }

//Приватный метод для получения баланса
#getBalance() {
    return this.#balance;



}
}

const myAccount = new BankAccount(100);

myAccount.deposit(50);
myAccount.withdraw(30);
//console.log(myAccount.#balance); //Ошибка приватное свойство
//myAccount.#get.balance; //Ошибка приватный метод


//3.Наследование - создание нового класса на основе существующего

console.log(`---Наследование---`);

class Dog extends Animal {
    constructor(name, age, breed) {
        //super - вызов конструктора родительского класса
        super(name, age);
        this.breed = breed; //добавляем свое или новое свойство


    }
//переопределение метода speak
speak() {
    console.log(`${this.name} лает: гав-гав.`);
    //Можно вызывать и родительский метод внутри дочернего
}
    displayInfo() {
        super.displayInfo(); //родительский 
        console.log(`Порода: ${this.breed}`);

    }
}


const newDog = new Dog ('Бобик', 5, "Овчарка");
newDog.displayInfo(); //вызовет оба метода: родительский и дочерний.
newDog.speak();//вызовет переопределенный метод


//4. Полиморфизм 
console.log("Полиморфизм");
class Cat extends Animal {
    //переопределим метод speak
    speak() {
        console.log (`${this.name} мяукает: Мяуу!`);

    }
}
const myCat = new Cat("Васька", 2);
//создадим массив из разных обьектов и вызовем один и тот же метод

const animals = [myCat, newDog, new Animal("Нечто", 1)];
//проходим по массиву и вызываем один и тот же метод speak
//в зависимости от класса обьекта будет вызвана своя реализация этого метода

animals.forEach (animal => {
    animal.speak();

});
