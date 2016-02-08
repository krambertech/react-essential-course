'use strict';

// аргументы по умолчанию
{
    let sayHello = function(name = 'Everyone') {
        console.log(`Hello ${name}!`);
    }

    sayHello(); // Hello Everyone!
    sayHello('Vasya'); // Hello Vasya!
}

// spread для аргументов
{
    let sayHello = function(...people) {
        console.log(`Hello ${people.join(', ')}!`);
    }

    sayHello('Katya', 'Vasya', 'Andrew'); // Hello Katya, Vasya, Andrew
}

// также spread можно использовать при выхове функции
{
    let numbers = [1, 5, 7, 10, 3, 9, 16];
    let max = Math.max(...numbers);

    console.log(max); // 16
}

// использование параметров по умолчанияю и деструктуризации для аргументов функции
{
    let describePerson = function({ name = 'Noname', age = 0, city = 'Nowhere'}) {
        console.log(`Hello from ${city}! My name is ${name}, I am ${age} years old.`)
    }

    let me = {
        name: 'Katya',
        age: 20
    }

    describePerson(me); // Hello from Nowhere! My name is Katya, I am 20 years old.
}

