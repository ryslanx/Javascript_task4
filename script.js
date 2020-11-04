// - створити функцію яка виводить масив
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let showArray = function (array) {
//     console.log(array);
// }
//
// let generateNumbers = function (array, arrayLength) {
//     for (let i = 0; i < arrayLength; i++) {
//         array[i] = Math.ceil(Math.random() * 10);
//     }
//     showArray(array);
// };
// let test = [];
// generateNumbers(test, 15);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// let smallestOfThree = function (number1, number2, number3) {
//     let theSmallest = number1;
//     if (number2 < number1 && number2 < number3) {
//         theSmallest = number2;
//     } else if (number3 < number2 && number3 < number1) {
//         theSmallest = number3;
//     }
//     console.log(theSmallest);
//     return theSmallest;
// };
// let theSmallest = smallestOfThree(3, 5, 2);


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// let biggestOfThree = function (number1, number2, number3) {
//     let theBiggest = number1;
//     if (number2 > number1 && number2 > number3) {
//         theBiggest = number2;
//     } else if (number3 > number2 && number3 > number1) {
//         theBiggest = number3;
//     }
//     console.log(theBiggest);
//     return theBiggest;
// };
// let theBiggest = biggestOfThree(3, 5, 2);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// let exampleFunc = function () {
//     let theBiggest = -Infinity;
//     let theSmallest = Infinity;
//     for (const argument of arguments) {
//         if (argument > theBiggest) {
//             theBiggest = argument;
//         }
//         if (argument < theSmallest) {
//             theSmallest = argument;
//         }
//     }
//     console.log(theBiggest);
//     return theSmallest;
// };
//
// console.log(exampleFunc(1, 3, 5, 7, 13, 11, 23, 0));


// - створити функцію яка виводить масив
// let showArray = function (array) {
//     console.log(array);
// }


// - створити функцію яка повертає найбільше число з масиву
// let biggestFromArray = function (array) {
//     let theBiggest = -Infinity;
//     for (const element of array) {
//         if (element > theBiggest) {
//             theBiggest = element;
//         }
//     }
//     console.log(theBiggest);
//     return theBiggest;
// };


// - створити функцію яка повертає найменьше число з масиву
// let smallestFromArray = function (array) {
//     let theSmallest = Infinity;
//     for (const element of array) {
//         if (element < theSmallest) {
//             theSmallest = element;
//         }
//     }
//     console.log(theSmallest);
//     return theSmallest;
// };


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let addAllElements = (array) => {
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     console.log(sum)
//     return sum;
// }
// addAllElements([1, 3, 5, 9, 19])


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let averageNumber = (array) => {
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     return sum / array.length
// }
// console.log(averageNumber([1, 2, 5, 10, 15]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let objectQuantity = (array) => {
//     let number = 0;
//     for (const element of array) {
//         if (typeof element === 'object' && element != null) {
//             number++;
//         }
//     }
//     return number;
// }
// console.log(objectQuantity([{}, {}, {}, 5, 7, 9, "int"]))


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let objectQuantity = (array) => {
//     let number = 0;
//     for (const element of array) {
//         if (typeof element === 'object' && element != null) {
//             number += Object.keys(element).length;
//         }
//     }
//     return number;
// }
// console.log(objectQuantity([{name: "serf"}, {}, {}, 5, 7, 9, "int"]))


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let addArrays = (array1, array2) => {
//     let newArrLength = array1.length > array2.length ? array2.length : array1.length;
//     let newArray = [];
//     for (let i = 0; i < newArrLength; i++) {
//         newArray.push(array1[i] + array2[i]);
//     }
//     return newArray;
// }
// console.log(addArrays([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5]))


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let changePosition = (array1, k) => {
//     let temp = array1[k];
//     array1[k] = array1[k + 1];
//     array1[k+1] = temp;
//     return array1;
// }
// console.log(changePosition([1, 2, 3, 4, 5, 7], 3))


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let nullsToEnd = (array) => {
//     let numberOfZeroes = 0;
//     let totalNumberOfZeroes = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             for (let j = i; j < array.length; j++) {
//                 if (array[j] > 0) {
//                     array[i] = array[j];
//                     array[j] = 0;
//                     break;
//                 }
//             }
//         }
//     }
//     return array;
// }
// console.log(nullsToEnd([1, 0, 0, 3, 0, 5, 0, 6, 0]));


//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// let addBlock = () => {
//     let createdElement = document.createElement("div");
//     createdElement.innerText = "Hello owu";
//     document.body.appendChild(createdElement);
// }
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let addBlockWithArguments = (type, text) => {
//     let createdElement = document.createElement(type);
//     createdElement.innerText = text;
//     document.body.appendChild(createdElement);
// }
// addBlockWithArguments('p', 'I am a programmer');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// let cars = [{
//     model: "Ferrari1",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari2",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari3",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari4",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari5",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari6",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari7",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari8",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari9",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari10",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// }];
//
// let addAutoToId = (cars, elementId) => {
//     let element = document.getElementById(elementId);
//     for (let car of cars) {
//         let carObject = document.createElement('div');
//         for (let key of Object.keys(car)) {
//             carObject.innerHTML += `${key} - ${car[key]}<br>`;
//         }
//         element.appendChild(carObject);
//     }
// }
//
// let addAutoToIdWithBlock = (cars, elementID) => {
//     let element = document.getElementById(elementID);
//     for (let car of cars) {
//         let carObject = document.createElement('div');
//         for (let key of Object.keys(car)) {
//             let carKey = document.createElement("div");
//             carKey.innerText = `${key} = ${car[key]}`;
//             carObject.appendChild(carKey);
//         }
//         element.appendChild(carObject);
//     }
//     document.body.appendChild(element);
// }
// addAutoToId(cars, "auto-task");
// addAutoToIdWithBlock(cars, "auto-task");


//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let createUsersWithCities = (user_array, cities_array) => {
//     let usersWithCities = [];
//     for (const user of user_array) {
//         let userCopy = JSON.parse(JSON.stringify(user));
//         for (let city of cities_array) {
//             if (userCopy.id === city.user_id) {
//                 userCopy.city = city.city;
//                 break;
//             }
//         }
//         usersWithCities.push(userCopy);
//     }
//     console.log(usersWithCities);
//     return usersWithCities;
// }
// createUsersWithCities(usersWithId, citiesWithId);


//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
//
// let createRulesMarkup = (rules_array) => {
//     for (let rule of rules_array) {
//         let ruleBlock = document.createElement('div');
//         let title = document.createElement('h2');
//         title.innerText = rule.title;
//         let body = document.createElement('p');
//         body.innerText = rule.body;
//         ruleBlock.appendChild(title);
//         ruleBlock.appendChild(body);
//         document.body.appendChild(ruleBlock);
//     }
// }
// createRulesMarkup(rules);
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// let number = 64;
// let checkNumber = (number) => {
//     while (number !== 1) {
//         number /= 2;
//         if (number === 0) {
//             return "NO"
//         }
//     }
//     return "YES";
// }
// console.log(checkNumber(number));

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// let obj = {
//     name: 'Vasia',
//     age: 3,
//     address: {
//         city: 'Lviv'
//     }
// }
//
// let deepCopy = (obj) => {
//     let tmp = {}
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             tmp[key] = deepCopy(obj[key])
//         } else {
//             tmp[key] = obj[key]
//         }
//     }
//     return tmp;
// }
//
// let deepCopy1 = deepCopy(obj);
// deepCopy1.address.city ='kiev'
// console.log(deepCopy1);
// console.log(obj);


//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// let array = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// let newArray = [];
// let deepCopy = (array) => {
//     for (const arrayElement of array) {
//         if (typeof arrayElement === 'object') {
//             deepCopy(arrayElement);
//         } else {
//             newArray.push(arrayElement);
//         }
//     }
// }
// deepCopy(array);
// console.log(newArray);




// ===========додаткове========
