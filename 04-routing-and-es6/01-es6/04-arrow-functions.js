'use strict';

// короткая запись функций с одним аргументом
{
    let inc = x => x+1;
    // Аналогично с
    // let inc = function(x) { return x + 1; };

    console.log( inc(1) ); // 2
}

// если несколько аргументов
{
    let sum = (a, b) => a + b;
    // Аналогично с
    // let inc = function(a, b) { return a + b; };

    console.log( sum(5, 2) ); // 7
}

// при отсутствии аргументов
{
    let sayHello = () => 'Hello!';

    console.log( sayHello() ); // Hello!
}

// с телом функции
{
    let sayHello = () => {
        let name = 'Katya';
        return `Hello, ${name}!`;
    }

    console.log( sayHello() ); // Hello, Katya!
}

// очень удобно использовать в качестве callback
{
    let a = [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Beryl­lium"
    ];

    let a2 = a.map( s => s.length );
    // Аналогично с
    // let a2 = a.map(function(s){ return s.length });
}

// также стрелочные функции сохраняют контекст
// c ES5 приходилось для использования родительского контекста записывать
// ссылку на него в переменную
{
    function Person1() {
        // записываем контекст в переменную, чтобы
        // он был доступен внутри вложенных функций
        let self = this;
        self.age = 0;

        let life = setInterval(function growUp() {
            self.age++;
        }, 100);

        self.die = function() {
            clearInterval(life);
        };
    }

    let person = new Person1();
    console.log('Person1', person.age); // 0

    setTimeout(() => {
        console.log('Person1', person.age); // 9
        person.die();
    }, 1000);
}

// в ES6 уже такой необходимости нет
{
    function Person2() {
        this.age = 0;

        let life = setInterval(() => {
            this.age++;
        }, 100);

        this.die = () => {
            clearInterval(life);
        };
    }

    let person = new Person2();
    console.log('Person2', person.age); // 0

    setTimeout(() => {
        console.log('Person2', person.age); // 9
        person.die();
    }, 1000);
}
