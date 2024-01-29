// if(..){
//     //..
// }
// else if(..){
//     // ...
// }
// else{
//     // ...
// }

// if(true/>=1)

// if(false/<=0, "", NaN, null, undefined)


// let array = [];

// array.length;

// array.push('new');
// array.unshift('new1');
// array.pop();
// array.shift();

// array.splice(start, deleteCount, 'new elements');
// array.splice(0, 5);
// array.splice(0, 0, '...');
// array.splice(0, 2, '...', '...');

// for(let i=0; i<=10; i+=2){
//     console.log(i);
// }
// // 0, 2, 4, 6, 8, 10

// for(let i=1; i<=10; i*=2){
//     console.log(i);
// }
// // 1, 2, 4, 8


// // Обратный цикл
// for(let i=10; i>=0; i--){
//     console.log(i);
// }


// break, countinue


// for(let i=0; i<=5; i++){
//     console.log(i);
//     if(i==2){
//         break;
//     }
// }
// //0, 1, 2

// for(let i=0; i<=5; i++){
//     if(i==2){
//         break;
//     }
//     console.log(i);
// }
// 0, 1


// for(let i=0; i<=5; i++){
//     if(i==2){
//         continue;
//     }
//     console.log(i);
// }
// 0, 1, 3, 4, 5


// Array

// let array = [[], [], [], []];

// let users = [
//     ['John', 'Bob', 'Jack'],
//     ['Smith', 'Thomas', 'Brown'],
//     [24, 20, 19]
// ]



// console.log(users);
// console.log(users[0]);
// console.log(users[0][0]);
// console.log(users[1][2]);


// for(let i=0; i<users.length; i++){
//     for(let k=0; k<users[i].length; k++){
//         console.log(users[k][i]);
//     }
// }

// 1. i=0, k=0
// John
// 2. i=0, k=1
// Bob
// 3. i=0, k=2
// Jack
// 4. i=1, k=0
// Smith
// 5. i=1, k=1
// Thomas
// 6. i=1, k=2
// Brown
// 7. i=2, k=0
// 8. i=2, k=1
// 9. i=2, k=2

// 00
// 10
// 20

// 01
// 11
// 21

// 02
// 12
// 22

// OBJECT

// let object = {}; //empty object

// let object1 = {
//     key1: 'value1', //ключ + значение = свойство
//     key2: 'value2',
//     key3: 'value3',
//     ...
// }


// let phone = {
//     model: 'iphone 15 pro max',
//     color: 'black',
//     ram: 8,
//     camera: 48,
//     is_avalible: true
// };

// phone.color = 'blue'; //изменение

// phone.display_size = 15; //добавление

// delete phone.ram; //удаление

// console.log(phone);
// console.log(phone.color);

// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;


// let phone = {
//     model: 'iphone 15 pro max',
//     color: 'black',
//     ram: 8,
//     camera: 48,
//     is_avalible: true
// };


// for(let key in phone) {
//     // console.log(key);//model, color, ram, camera, is_avalible
//     console.log(phone[key]);//'iphone 15 pro max', 'black', 8, 48, true
// }

// console.log(phone['camera']);//48
// console.log(phone.camera);//48

// let user1 = {
//     firstname: 'Tom',
//     lastname: 'Brown',
//     position: 'Web developer',
//     birth: {
//         day: 4,
//         month: 'July',
//         year: 2000
//     }
// };


// console.log(user1);
// console.log(user1.firstname);
// console.log(user1.birth);
// console.log(user1.birth.month);

// let users = {
//     firstnames: ['John', 'Tom', 'Bob'],
//     lastnames: ['Smith', 'Brown', 'Thomas']
// };

// console.log(users.firstnames[1]);//Tom

// John
// Tom
// Bob
// Smith
// Brown
// Thomas

// for(let key in users){
//     for(let i=0; i<users[key].length; i++){
//         console.log(users[key][i]);
//     }
// };


let products = [
    {
        name: 'iPhone 12',
        price: 800, 
        quantity: 10
    },
    {
        name: 'iPhone 13',
        price: 1000, 
        quantity: 5
    },
    {
        name: 'iPhone 14',
        price: 1100,
        quantity: 20
    }
];

// console.log(products);
// console.log(products[1]);
// console.log(products[1].name);
// // Кол/во 3 товара
// console.log(products[2].quantity);

// for(let i=0; i<products.length; i++){
//     for(let key in products[i]){
//         console.log(products[i][key]);
//     }
// }

// Вывести только имена товаров

for(let i=0; i<products.length; i++){
    console.log(products[i].name);
}


// let prices = [100, 2000, 346, 2000];

// let sum = 0;

// for(let i=0; i<prices.length; i++){
//     sum = sum + prices[i];
// }

// Найти сумму всех товаров

let sum = 0;

for(let i=0; i<products.length; i++){
   sum = sum + products[i].price;
}

console.log(sum);


