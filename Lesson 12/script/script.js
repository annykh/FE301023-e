// attirubute

// Element.setAttribute('attr_name', 'value');
// Element.hasAttibute('attr_name')//true or false
// Element.getAttribute('attr_name')//value
// Element.removeAttrbute('attr_name')

// Element.classList.add
// Element.classList.remove
// Element.classList.contains//true or false
// Element.classList.toggle


// let block = document.createElement('div');

// append
// prepend
// before
// after

// Создать массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #links.

// let links = [
//     {
//         link: 'https://facebook.com',
//         title: 'facebook'
//     },
//     {
//         link: 'https://youtube.com',
//         title: 'youtube'
//     },
//     {
//         link: 'https://google.com',
//         title: 'google'
//     },
//     {
//         link: 'https://github.com',
//         title: 'github'
//     }
// ];

// 1. найти блок с ид links; querySelector

// 2. создать цикл для массива i=0; i<links.length; i++

// 3. в цикле создать тег a ; createElement

// 4. добавить атрибут href; setAttribute

// 5. добавить атрибут target; setAttribute

// 6. добавить текст; innerText

// 7. вставить тег в блок; append

// let block_links = document.querySelector('#links');

// for(let i=0; i<links.length; i++){
//     let link = document.createElement('a');
//     link.setAttribute('href', links[i].link);
//     link.setAttribute('target', '_blank');
//     link.innerText = links[i].title;
//     block_links.append(link);
// }


// Свойство style

// Элемент.style.свойство = 'значение';

// let p = document.querySelector('.p1');

// p.style.color = 'blue';


// callback-функция

// function first(){
//     setTimeout( function(){
//         console.log(1); //запрос, ждем ответа
//     }, 1000);
// }

// function second(){
//     console.log(2); // используем ответ
// }

// first();
// second();


// function printArray(elem){
//     console.log(elem);
// }

// function printPowArray(elem){
//     console.log(elem**2);
// }

// function forEach(array, callback){
//     for(let i=0; i<array.length; i++){
//         callback(array[i]);
//     }
// }

// let numbers = [1, 4, 8, 10, 23, 4, 0];

// forEach(numbers, printArray);
// forEach(numbers, printPowArray);


// События

// Element.addEventListener('тип события', функция);

// let p = document.querySelector('p');

// Анонимное событие
// p.addEventListener('click', function() {
//     p.innerText = 'New text';
// });

// Обработчик события
// p.addEventListener('click', changeText);

// function changeText(){
//     p.innerText = prompt('enter the text');
// }

// let p2 = document.querySelector('.p2');

// p2.addEventListener('click', removeEvent);

// function removeEvent(){
//     p.removeEventListener('click', changeText);
// }

// Задание 1: При нажатии на кнопку создать квадратный div с рамкой (все шаги  сделать с помощью JS).

// block.style.width
// block.style.height
// block.style.border = '1px solid black'; 

// let butten  = document.querySelector('.btn');

// butten.addEventListener('click', add_div)

// function add_div(){
//     let div = document.createElement('div');
//     div.style.width = '50px';
//     div.style.height = '50px';
//     div.style.border = '1px solid black';
//     div.style.marginBottom = '10px';
//     document.body.append(div);
// }

// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. 
// При клике на параграф текст должен меняться на звездочки => *****


// let strings = ['John', 'Tom', 'Bob', 'Helen'];

// for(let i=0; i<strings.length; i++){
//     let p = document.createElement('p');
//     p.innerText = strings[i];
//     document.body.append(p);
//     p.addEventListener('click', function(){
//         p.innerText = '*******';
//     });
// }


// Реализовать 10 карточек с числами от 0 до 9 и при нажатии  на какую-либо карточку присвоить ей класс active. В классе  active должны быть стили, которые меняют цвет текста и  цвет заднего фона местами.

// for(let i=0; i<=9; i++){
//     let card = document.createElement('p');
//     card.innerText = i;
//     document.body.append(card);
//     card.addEventListener('click', function(){
//         card.classList.add('active');
//     })
// }

// Доработать прошлый скрипт таким образом, чтобы при  повторном нажатии класс active удалялся (через classList).

// for(let i=0; i<=9; i++){
//     let card = document.createElement('p');
//     card.innerText = i;
//     document.body.append(card);
//     card.addEventListener('click', function(){
//         card.classList.toggle('active');
//     })
// }
