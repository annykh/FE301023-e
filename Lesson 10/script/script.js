// Object

// let object = {
//     key1: value1,
//     key2: value2,
//     ...
// }

// for (let key in object){
//     console.log(key);
//     console.log(object[key]);
// }

// Есть объект с различными свойствами.
// Напишите программу, которая выводит все ключи объекта.

// let newobj = {
//     name: 'iphone 13 pro',
//     price: 1000,
//     quality: 9,
//     inStock: true
// };

// for(let key in newobj){
//     console.log(key);
// }

// console.log('quality' in newobj);//true
// console.log('quantity' in newobj);//false


// function

// function function_name(param1, param2, ...){
//     // function body
// }


// show_message();

// function show_message(){
//     console.log('Hello world');
// }

// show_message();


// console.log('123456');


// show_message();

// ...

// show_message();//error

// let username = prompt('Enter your name');

// show_message();//Hello username

// function show_message(){
//     console.log('Hello ' + username);
// }

// show_message();//Hello username

// ...

// show_message();//Hello John

// let username = prompt('Enter your name');

// function show_message(){
//     let username = 'John';
//     console.log('Hello ' + username);
// }

// show_message();//Hello John

// ...


// function show_message(){
//     let username = prompt('Enter your name');
//     console.log('Hello ' + username);
// }

// show_message();
// show_message();
// show_message();


// function show_message(username){//параметр
//     console.log('Hello ' + username);
// }

// show_message('John');//аргумент //Hello John
// show_message('Tom');//Hello Tom
// show_message();//Hello undefined
// show_message(prompt('Enter your name'));//Hello <username>


// function showMax(num1, num2){
//     if(num1>num2){
//         console.log(num1);
//     }
//     else{
//         console.log(num2);
//     }
// }

// showMax(10, 5);//10
// showMax(26, 160);//160
// showMax(20, 20);//20
// showMax();//undefined
// showMax('Hello', 'world');//world


// defaults

// function showMax(num1=0, num2=0){
//     if(num1>num2){
//         console.log(num1);
//     }
//     else{
//         console.log(num2);
//     }
// }

// showMax(10, 5);//10
// showMax(26, 160);//160
// showMax(20, 20);//20
// showMax();//0
// showMax(5);//5
// showMax(undefined, 10);//10

// return

// function getMax(num1, num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// function getMax(num1, num2){
//     if(num1>num2){
//         return num1;
//     }
//     return num2;
// }

// getMax(20, 1);

// console.log(getMax(20, 1));//20

// let result = getMax(10, 5);

// console.log(result);//10

// function getMessage(){
//     return 'Hello'; //выход из функции
//     let user = 'John'; 
// }



// Задача: Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.

// function getMin(a, b){
//     if(a<b){
//         return a;
//     }
//     return b;
// }

// console.log(getMin(10, 2));//2

// Задача: Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.


// function getResult(num1, num2){
//     if(num1>num2){
//         return 1;
//     }
//     else if(num1<num2){
//         return -1;
//     }
//     return 0;
// }

// console.log(getResult(10, 5));//1
// console.log(getResult(10, 15));//-1
// console.log(getResult(15, 15));//0


// function showArrayElemets(array=[]){
//     for(let i=0; i<array.length; i++){
//         console.log(array[i]);
//     }
// }

// showArrayElemets([1, 6, 2, 0, 10]);
// showArrayElemets(["lalal", true, 10]);

// Задача: Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

// function getArraySum(array=[1, 4, 10]){
//     let sum = 0;
//     for(let i=0; i<array.length; i++){
//         sum = sum + array[i];
//     }
//     return sum;
// }

// console.log(getArraySum());//15

// console.log(getArraySum([1, 4, 2, 0]));//7

// Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// function getNewArray(array){
//     let newarray = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2===0){
//             newarray.push(array[i]);
//         }
//     }
//     return newarray;
// }

// console.log(getNewArray([1, 5, 10, 23, 26, 74, 10, 0, -10, 5]));//10, 26, 74, 10, 0, -10


// DOM

// Selectors
// .class
// #id
// tag name

// Поиск элемента
// let paragraph = document.querySelector('p');
// console.log(paragraph);//<p>..</p>

// console.log(paragraph.innerHTML);
// console.log(paragraph.innerText);

// let paragraph2 = document.querySelector('.p2');
// console.log(paragraph2);

// paragraph2.innerText = 'New paragraph';

// let paragraph3 = document.querySelector('#p3');
// console.log(paragraph3);

// let paragraph4 = document.querySelector('.main>p');
// console.log(paragraph4);

// let paragraph5 = document.querySelector('.p5');

// console.log(paragraph5.innerHTML);
// console.log(paragraph5.innerText);

// Задача: Написать программу, которая находит параграф по классу и заменяет в нем текст на “привет”.

let paragraph6 = document.querySelector('.p6');

paragraph6.innerText = 'Hello';

// document.querySelector('.p6').innerText = 'Hello';
