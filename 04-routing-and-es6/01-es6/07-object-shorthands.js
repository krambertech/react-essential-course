'use strict';

// для упрощения записи объектов были созданы сокращения
// если название переменной равно названию поля, то
// вместо того чтобы записать { name: name }
// можно записать { name }
{
    let name = 'Katya';

    let me = {
        name,
        city: 'Kyiv'
    };

    console.log(me); // { name: 'Katya', city: 'Kyiv' }
}

// также можно использовать деструктуризацию для полей объекта
{
    let propName = 'name';

    let user = {
        [propName]: 'Katya'
    };

    console.log(user.name); // Katya
}

