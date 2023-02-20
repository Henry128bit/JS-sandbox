'use strict';
// console.log('Hello World!');

// const btn = document.querySelector('.btn');

// function myAnimation() {
//     const element = document.querySelector('.box'),
//           id = setInterval(frame, 10);
//     let position = 0;

//     function frame() {
//         if (position == 300) {
//             clearInterval(id);
//         } else {
//             position++;
//             element.style.top = position +  'px';
//             element.style.left = position + 'px';
//         }
//     }

//     btn.addEventListener('click', myAnimation);
// }

// btn.addEventListener('click', myAnimation);

// const now = new Date();
// console.log(now.setHours(18));
// console.log(now);

// Задачи с переборами массивов

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. 
// Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми 
// фильмами, у которых рейтинг больше или равен 8.

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}

console.log(showGoodFilms(films));

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит 
// названия фильмов через запятую.

function showListOfFilms(arr) {
    return arr.map(item => item.name)
           .reduce((sum, current) => `${sum}, ${current}`);
}

console.log(showListOfFilms(films));

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но 
// у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

function setFilmsIds(arr) {
    let i = 0;
    return arr.map(function(item){
        item.id = i;
        i++;
        return item;
    });
}

console.log(setFilmsIds(films));

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, 
// что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, 
// если мы передаем checkFilms(tranformedArray);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    let key = 'id';
    return arr.every(item => Object.prototype.hasOwnProperty.call(item, key) === true);
}

console.log(checkFilms(tranformedArray));

// Задачи с переборами массивов

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая 
// принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

const getPositiveIncomeAmount = (data) => {
    return data.map(item => item.amount)
               .filter(amount => amount > 0)
               .reduce((sum, current) => sum + current);
};

console.log(getPositiveIncomeAmount(funds));

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит 
// отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается 
// функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:
// getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
    if (data.some(item => item.amount < 0)) {
        return data.map(item => item.amount)
                   .reduce((sum, current) => sum + current);
    } else {
        getPositiveIncomeAmount(data);
    }
};

console.log(getTotalIncomeAmount(funds));

// Принципы ООП

// 1.Инкапсуляция 

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Petrychenko';

//     say = () => {
//         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);

// Fetch
// Получение ответа от сервера
fetch('http//...')
    .then(response => response.json())
    .then(data => console.log(data));

// Отправка данных на сервер
fetch('http//...', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
});

class Privat {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    #age = 27;

    say = () => {
        console.log(`${this.name}, ${this.surname}, ${this.#age}`);
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

let person = new Privat('Alex', 'Clarck');
person.say();
person.setName = 'Jhon';
person.say();
console.log(person.getName);
person.#age = 56;