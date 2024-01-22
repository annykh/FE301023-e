// // console.log('Hello world!');

// // Переменные

// let variableName = 'New variable';

// var number1 = 4;

// variableName = 'John';

// variableName = 10;

// // let variableName = 20; //error

// // console.log(variableName);

// const pi = 3.14;

// // pi = 2; //error



// // String
// // Number
// // Boolean
// // Object


// // String

// let str1 = 'Helen';
// let str2 = "Helen";

// // Конкатенация

// let firstname = 'John';
// let lastname = 'Smith';

// let fullname = firstname + " " + lastname;

// console.log(fullname);


// // "Hello. My name is username. I'm age"

// // let username = 'Lily';
// // let age = 19;

// // console.log('Hello. My name is ' + username + ". I'm " + age);


// // Интерполяция

// // console.log(`Hello. My name is ${username}. I'm ${age}`);

// // Задача: есть переменные r, g, b с числовыми значениями. 
// // Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяцию.

// let r = 12;
// let g = 34; 
// let b = 14;

// console.log('rgb('+ r + ', ' + g + ', ' + b + ')');
// console.log(`rgb(${r}, ${g}, ${b})`);


// // let _aaa;
// // let $aaa;
// // // let 1num; //error
// // let name;
// // let Name;

// // let FirstName;
// // let first_name;

// // NUMBER

// let num1 = 20;

// let num2 = 2.34;

// // Специальные числовые значения
// Infinity
// -Infinity
// NaN //not a number

// console.log(8/0); //Infinity
// console.log(-8/0); //-Infinity

// console.log('string' / 2); //NaN

// console.log(NaN + 1); //NaN

// console.log('string' / 2 + 56 - 1); //NaN

// console.log(NaN ** 0); //1

// // Базовые математические действия

// console.log(2 + 4); //6
// console.log(10 - 5); //5
// console.log(3 * 5); //15
// console.log(10 / 2); //5
// console.log(5 ** 2); //25
// console.log(11 % 2); //1 - остаток от деления

// // Boolean

// true
// false

// let bool1 = true;
// let str3 = 'true';

// // Тип аргумента
// console.log(typeof(bool1)); //boolean
// console.log(typeof(str3)); //string
// console.log(typeof(Infinity)); //number


// Ввод данных

// let result = prompt('Enter smth', 'Something');

// console.log(result);

// let age = prompt('Enter your age');

// console.log(`I'm ${age}.`);

// console.log(typeof(age)); //string

// let age1 = Number(age);

// console.log(typeof(age1));


// let number1 = Number(prompt('Enter the number'));

// console.log(number1);
// console.log(typeof(number1));

// Number('John'); //NaN

// let number1 = +(prompt('Enter the number'));

// console.log(number1);
// console.log(typeof(number1));


// console.log('3' + 4); //'34' конкатенация
// console.log('10' - 2); //8
// console.log('5' * 2); //10
// console.log('16' / 4); //4
// console.log(+'16' + 4); //20

// Задача: Написать программу, которая считывает через prompt число и выводит в консоль его квадрат.

// let number2 = Number(prompt('Enter the number'));

// console.log(number2**2);

// Задача: Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число. 

// let num3 = Number(prompt('enter the first number'));
// let num4 = Number(prompt('enter the second number'));

// console.log(num3+num4);

// Задача: есть переменные user_name, user_surname, user_age, user_position. Напишите программу которая через prompt заполняет эти переменные и выводит в консоль строку 
// “Hi, my name is <user_name> <user_surname>. I was born in <текущий год – user_age>. I’m <user_position>.”

let user_name = prompt('Enter your name');
let user_surname = prompt('Enter your surname');
let user_age = Number(prompt('Enter your age'));
let user_position = prompt('Enter your position');

console.log(`Hi, my name is ${user_name} ${user_surname}. I was born in ${2024 - user_age}. I'm ${user_position}.`);
