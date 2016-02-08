'use strict';

// новыие строки можно использовать с кавычками ``
// с их помощью, можно писать многострочные строки
{
    console.log(`This
        is
        multiline
        string`);
}

// а с помощью ${} использовать переменные внутри них
{
    let name = 'Katya';

    console.log(`Hello, ${name}!`); // Hello, Katya!
}

{
    let a = 2;
    let b = 5;

    console.log(`${a} + ${b} = ${a + b}`); // 2 + 5 = 7
}
