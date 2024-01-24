// String
// Number
// Boolean

// let str1 = "text";
// let str2 = 'text';

// console.log(str1);

// console.log(str1 + str2);
// console.log(`${str1} ${str2}`);

// let num1 = Number(prompt('enter the number'));
// let num2 = +(prompt('enter the number'));

// Условное ветвление

// if(условие){
//     дейстие
// }

// ... код


// if(условие1){
//     дейстие 1
// }
// else if(условие2){
//     дейстие 2
// }
// else if(условие3){
//     дейстие 3
// }

// ... code

// if(условие1){
//     дейстие 1
// }
// else if(условие2){
//     дейстие 2
// }
// else if(условие3){
//     дейстие 3
// }
// else{
//     дейстие N
// }

// > < >= <= == === != !==


// let age = Number(prompt('Enter your age'));

// if(age>=18){
//     console.log('Доступ открыт');
// }
// else{
//     console.log('Доступ закрыт');
// }

// true false

// truthy
// if(true){
//     console.log("it's true");
// }

// if(1){
//     console.log("it's true");
// }


// falsy
// if(false){
//     console.log("it's false");
// }

// if(0){
//     console.log("it's false");
// }

// if(''){
//     console.log("it's false");
// }

// if(undefined){
//     console.log("it's false");
// }

// if(NaN){
//     console.log("it's false");
// }

// if(null){
//     console.log("it's false");
// }

// AND OR
// && ||

// let number1 = 15;

// if(number1>0 && number1%2==0){
//     console.log('положительное и четное');
// }
// else{
//     console.log('negative or odd');
// }

// if(number1>0 || number1%2==0){
//     console.log('положительное или четное');
// }
// else{
//     console.log('negative and odd');
// }

// == ===

// if('23' == 23){ //23==23 true
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// // yes


// if('23' === 23){ (typeof('23')==typeof(23) && 23==23)
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// no

// Задача: Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
// Программа должна выводить в консоль новое значение.


// let number2 = Number(prompt('Enter the number'));

// if(number2>0){
//     console.log(number2*2);
// }

// Задача: Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит в консоль их сумму, если же наоборот – выводит в консоль их произведение. В случае же, если числа одинаковы, программа выводит в консоль сообщение "числа одинаковые". 

// let number3 = Number(prompt('enter the number'));
// let number4 = Number(prompt('enter the number'));

// if(number3>number4){
//     console.log(number3+number4);
// }
// else if(number4>number3){
//     console.log(number3*number4);
// }
// // else if(number3 === number4){
// //     console.log('числа одинаковые');
// // }
// else{
//     console.log('числа одинаковые');
// }


// let or var

// let num = 50;

// if('23' == 23){
//     let num = 23;
//     console.log(num);//23
// }

// console.log(num);//50

// if('23' == 23){
//     var num = 23;
//     console.log(num);//23
// }

// console.log(num);//23


// Array Массивы

// let array = []; //empty array

// let names = ['John', 'Bob', 'Jack', 'Eric'];

// console.log(names[0]); //John
// console.log(names[1]); //Bob
// console.log(names.length); //длина массива
// console.log(names[names.length-1]); //последний элемент массива

// names.push('Lily', 'Laura'); //Добавление элемента в конец массива
// names.unshift('Tom'); //Добавление элемента в начало массива

// names.pop(); //Удаление последнего элемента массива
// names.shift(); //Удаление первого элемента массива

// let index_Jack = names.indexOf('Jack'); //Поиск номера элемента в массиве

// console.log(index_Jack);

// names[index_Jack] = 'John';

// names[0] = 'Jack';

// // names.splice(start, deleteCount, item1, item2)

// names.splice(2, 0, 'Anna', 'Elena'); //Добавление эл. начиная с индекса 2
// names.splice(4, 1); //Удаление эл. с инексом 4
// names.splice(2, 2, 'July'); //Удаление 2 эл. начиная с индекса 2, добавление нового эл. с индексом 2

// // console.log(names);

// let names1 = names.splice(0, 2);

// console.log(names);
// console.log(names1);

// let names2 = [names[2], names[3]];

// Задание:
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». 
// 4. Удалите первый элемент массива.
// 5. Вставьте Рэп и Регги в начало массива


// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// styles[1] = 'Классика';

// // styles.splice(1, 1, 'Классика');

// styles.shift();

// styles.unshift('Рэп', 'Регги');

// console.log(styles);


// Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива. 

// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

// let arr1 = [1, 4, 2, 5, 3];

// let arr2 = [arr1[0]**2, arr1[1]**2, arr1[2]**2, arr1[3]**2, arr1[4]**2];

// console.log(arr1);
// console.log(arr2);

// for(Начало; Условие; Шаг){
//     // тело цикла
// }

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// num++
// num = num + 1;

// for(let num = 0; num <= 5; num++){
//     console.log(num);
// }



// let names = ['John', 'Bob', 'Jack', 'Eric', 'Lily', 'Tom', 'Laura'];

// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }



// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

// let arr1 = [1, 4, 2, 5, 3];

// let arr2 = [];

// for(let i=0; i<arr1.length; i++){
//     arr2.push(arr1[i]**2);
// }

// console.log(arr2);

// Сумма положительных чисел
// let numbers = [12, 15, 30, 10, -13, 20, -1, 0, -23, 12];

// let sum = 0;

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>0){
//         sum = sum + numbers[i];
//     }
// }

// console.log(sum);
