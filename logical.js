// Логическая и (AND) Коньюкция &&
// Истинно (возвращает истину)  только если оба условия истинны
console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false);  // false

//Логической умножение   / результат может быть только 0 или 1
/** 
*  1*1 = 1
*  0*1 = 0
*  1*0 = 0
*  0*0 = 0
*/ 
let age = 17;
let hasDriversLicense = true;
//Человек может арендовать машину только если ему больше 18 
//и у него есть водительские права.

let canRentCar = age > 18 && hasDriversLicense;
console.log(  `Может ли арендовать машину ? Ответ: ${canRentCar}`);

//Логическое или (OR - ||). Дизьюнкция
//возвращает истину , если хотябы одно условие истина
console.log("---Логическое ИЛИ. Дизьюнкция---");
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);


let hasBusTicket = false;
let hasTrainTicket = true;
//Человек может уехать из Йыхви если у него есть билет на автобус или на поезд

let canLeave = hasBusTicket || hasTrainTicket;
console.log(`Может ли человек уехать? Ответ: ${canLeave}`);
/** 
 * Логическое сложение ИЛИ
 * 1 + 1 = 1
 * 0 + 1 = 1
 * 1 + 0 = 1
 * 0 + 0 = 0
 * 
 */
 
//Логическая НЕ( NOT ) операнд - "!""
//Инвертирует ( на противоположное ) логическое значение.
console.log("---Логическое НЕ (NOT)---");
console.log("!true", !true);
console.log("!false", !false);

let isDoorOpen = false;
console.log(`Дверь закрыта? Ответ: ${!isDoorOpen}`);

//Комбинированные примеры

console.log("---Комбинированые примеры");

let isUserAutorized = false;
let accessLevel = "admin";
let hasPremium = false;

//Доступ разрешен, если пользователь авторизован И он является админом или премиум подписка

let isAccessGranted = isUserAutorized && (accessLevel === "admin" || hasPremium);
console.log(`Доступ разрешен? Ответ: ${isAccessGranted}`);



//Пример получения скидки в магазине

let purchaseAmount = 80;
let hasLoyalityCard = false;
let dayOfWeek = "суббота";

//Скидка дается, если сумма покупки больше 100 и у клиента есть скидочная карта ИЛИ сегодня выходной.
let hasDiscount = (purchaseAmount > 100 && hasLoyalityCard) || (dayOfWeek === "суббота") || (dayOfWeek === "воскресенье");

console.log(`Получу скидку? Ответ: ${hasDiscoint}`);


//пример зомби апокалипсиса
let hasWaepon = true;
let hasShelter = false;
let isFastRunner = true;

let iWillSurvive = hasWaepon && (hasShelter || isFastRunner);
console.log(`Есть ли у тебя шанс выжить? Ответ: ${iWillSurvive}`);

//Герой может забрать золото, если (он храбрый парень И у него есть магический меч ИЛИ если дракон просто спит)
let canGetTreasury = (isKnightBrave && hasMagicSword) || isDragonSleep;
console.log(`Я получу сокровище дракона? Ответ: ${canGetTreasury}`);



let knowsCode = true;
let hasCorrectCard = true;
let isLaserActive = true;

let canEnter = knowsCode && hasCorrectCard && !isLaserActive; 
consol.log(`Агент 007 может войти в хранилище? Ответ ${canEnter}`);


//пример - организация вечеринки в пятницу
let hasGoodMusic = true;
let hasEnoughDrinks = false;
let hasBoltDelivery = true;
let hasFriendsAvailable = true;
let isNaigborAngry = true;
let hasSoundProofing = false;
//условие 
//1. Должна быть хорошая музыка и (достаточно напитков ИЛИ доступна доставка еды)
//2. И все друзья могут прийти
//3.И (сосед НЕ злится ИЛИ в квартире звукоизоляция)

let isFantasticParty = (hasGoodMusic && (hasEnoughDrinks || hasBoltDelivery)) && hasFriendsAvailable && (!isNaigborAngry || hasSoundProofing);

console.log(`Вечеринке быть? Ответ ${isFantasticParty}`);



