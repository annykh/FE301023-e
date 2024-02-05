// function


// function function_name(param1, param2){
//     // ...
//     return max;
// }

// function_name(arg1, arg2);


// DOM

// let p = document.querySelector('p');

// let paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);

// console.log(paragraphs[1]);//<p>Text2</p>

// paragraphs[2].innerText = 'New paragraph';

// for(let i=0; i<paragraphs.length; i++){
//     console.log(paragraphs[i]);
// }

// let lists = document.querySelectorAll('ul>li');

// console.log(lists);

// for(let i=0; i<lists.length; i++){
//     lists[i].innerText = prompt(`Enter the text ${i+1}`);
// }

// Задача: Написать скрипт, который находит параграфы и первым 3 параграфам меняет текст на указанные пользователем значения.

// Задача: Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 
// 6(вкл).

// let paragraphs = document.querySelectorAll('p');

// for(let i=0; i<paragraphs.length; i++){
//     if(i>=2 && i<=5){
//         paragraphs[i].innerText = prompt('enter the text');
//     }
// }

// for(let i=2; i<=5; i++){
//     paragraphs[i].innerText = prompt('enter the text');
// }

// let list_of_class_text = document.querySelectorAll('.text');

// console.log(list_of_class_text);

// let link = document.querySelectorAll('a');

// console.log(link);
// console.log(link[0]);


// Работа с атрибутами

// let link = document.querySelector('a');

// link.innerText = 'Google';

// element.setAttribute('attribute_name', 'value');

// link.setAttribute('href', 'https://www.google.com/');

// let facebook_link = document.querySelector('.link_facebook');

// facebook_link.innerText = 'Instagram';

// facebook_link.setAttribute('href', 'https://www.instagram.com/');

// //проверяет наличие атрибута
// console.log(facebook_link.hasAttribute('href')); //true
// console.log(facebook_link.hasAttribute('target')); //false

// // получаем значение атрибута
// console.log(facebook_link.getAttribute('href')); //https://www.instagram.com/

// // удаляем атрибут
// facebook_link.removeAttribute('href');

// Работа с классами

// Element.classList //список всех классов элемента

// let block = document.querySelector('div');

// console.log(block.classList);

// block.classList.add('border');//добавляем
// block.classList.remove('border');
// //удаляем
// console.log(block.classList.contains('color1'));//true
// console.log(block.classList.contains('border'));//false
// block.classList.toggle('border');// добавили
// block.classList.toggle('border');// удалили
// false + add
// true + remove

// Создание элемента
// document.createElement(tag_name);

// let block = document.createElement('div');

// block.innerText = 'New block';
// block.classList.add('color2');

// // Методы вставки

// let p = document.querySelector('p');

// // Вставить блок до параграфа
// p.before(block); //куда.каким_методом(что)

// // Вставить блок после параграфа
// p.after(block); //куда.каким_методом(что) 

// // Вставить блок внутри в начале body
// document.body.prepend(block);

// // Вставить блок внутри в конец body
// document.body.append(block);

// Создать 5 параграфов, задать им текст и добавить в HTML- документ в div с id <root>

let root = document.querySelector('#root');

// for(let i=0; i<5; i++){
//     let new_p = document.createElement('p');
//     new_p.innerText = `Text ${i+1}`;
//     root.append(new_p);
// }

// Создать множество параграфов с числами от 0 до 19.

// for(let i=0; i<19; i++){
//     let p = document.createElement('p');
//     p.innerText = i;
//     root.append(p);
// }

// Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root

// let names = ['Tom', 'Bob', 'Jack', 'Lily', 'Nick', 'John', 'Alex'];

// for(let i=0; i<names.length; i++){
//     let p = document.createElement('p');
//     p.innerText = names[i];
//     root.append(p);
// }

// Удаление элементов

// let p = document.querySelector('p');

// p.remove();

