//Основные способы обьявления функции 

console.log(`---1. Function declaration---`);
console.log(sum(5,3));
//можно вызывать до обьявления, так как оно "поднимается" hoistisng в начало области видимости

function sum(a, b) {
    return a + b;

}
console.log(`---2.Function Expression---`);
//Нельзя вызывать до обьявленияю
//функция создается, когда до этого места доходит обработчик кода
const sumExpression = function (a,b) {
    return a + b;
};
console.log(sumExpression(9,15));

console.log(`---3. Arrow Function (Стрелочеая функция)---`);
//функция также" не поднимается"
//главная особенность - не имеет своего контекста "this"
const sumArrow = (a,b) => {
    return a + b;
};

//короткий синтаксис 
const multiply = (a, b) => a * b;
console.log(sumArrow(9, 8));
console.log(multiply(9,8));

//Пример с "this"
const person = {
    name: "Oleg",
    greetRegular: function() {

      //this - здесь это обьект person
        console.log(`Hello from ${this.name} (regular)` );
    }, 
    greetArrow: () => {
        //у стрелочной функции нет своего this (контекста)
        console.log(`Hello from ${this.name} arrow`);
    }
}
person.greetRegular();
person.greetArrow();


//ПАРАМЕТРЫ ФУНКЦИИ


console.log("---Параметры функции---");
//Параметры по-умолчанию (default params)
function greet(name = "Somebody") {
    console.log(`Welcome ${name}!` );

}
greet("Anna");
greet();

//REST-params
//Собирают все переданные аргументы (параметры) в массив

function sumAll (...numbers) {
let total = 0;
for (const num of numbers) {
    total += num;
}
return total;

}
console.log(`Sum 1,2,3,4: `, sumAll(1,2,3,4));


//call-back -функции
//это функция, переданная в другую функцию
//в качестве аргумента
//классический пример callback
setTimeout(() => {
console.log(`это сообщение появится через 2 сек`);

}, 2000);

function operate (a , b, operationCallback) {
    return operationCallback(a,b);

}
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
console.log("Вызов колбеком add: " , operate(10,5, add));
console.log("Вызов колбеком su: " , operate(10,5, subtract));

console.log(`---Замыкания---`);

//Замыкания - комбинация функци и ее окружения.
//проще - внутренняя функция "помнит" переменные внешней функции
//даже после того, как внешняя завершила работу.

function createCounter() {
    let count = 0; //эта переменная в лексич. окружении 
    //внутренняя функция, которая будет возвращена
    return function() {
        count++;
        console.log(count);
        return count;
        
    };
}
const counter1 = createCounter();
counter1();
counter1();//Помнит предыдущее значение.
const counter2 = createCounter();
counter2();

console.log("---самовызывающаяся функция----");
//IIFE - Immediately Invoked Function Expression

(function() {
    const secretMessage = "Это сообщение не доступно глобально";
console.log(secretMessage);


})();



