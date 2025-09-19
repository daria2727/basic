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








