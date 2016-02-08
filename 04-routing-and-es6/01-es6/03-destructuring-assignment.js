'use strict';

// деструктуризация для массива
{
    let array = [1, 2, 3, 4, 5];

    let [a, b] = array;

    console.log(a); // 1
    console.log(b);  // 2
}

// можно оставить пропуски, для того, чтобы получить конкретный по счету элемент
{
    let array = [1, 2, 3, 4, 5];

    let [, , c] = array;

    console.log(c); // 3
}

// также можно использовать spread для того, чтобы получить все оставшиеся элементы
{
    let array = [1, 2, 3, 4, 5];
    let [x, ...rest] = array;

    console.log(x); // 1
    console.log(rest); // [2, 3, 4, 5]
}

// точно так же работает деструктуризация для объекта
{
    let me = {
        name: 'Kateryna',
        age: 20,
        gender: 'female',
        city: 'Kyiv'
    };

    let { name: firstName, city } = me;

    console.log(firstName); // Kateryna
    console.log(city); // Kyiv
}

// значения по умолчанию, если такого поля не будет в объекте,
// то оно будет равно определенному значению по умолчанию
{
    let { name = 'Noname', age = 0 } = {};

    console.log(name); // Noname
    console.log(age); // 0
}

