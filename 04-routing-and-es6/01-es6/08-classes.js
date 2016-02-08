'use strict';

// Объявление класса
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

let point = new Point(2, 1);
console.log( point.toString() ); // (2, 1)

// Наследование
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `${super.toString()} in ${this.color}`;
    }
}

let colorPoint = new ColorPoint(4, 2, 'red');
console.log( colorPoint.toString() ); // (4, 2) in red

console.log(colorPoint instanceof ColorPoint); // true
console.log(colorPoint instanceof Point); // true

// Статические методы
class Button {
    static getElementType() {
        return 'button';
    }
    constructor(name) {
        this.color = color;
    }
    click() {
        console.log('Button clicked!');
    }
}

console.log( Button.getElementType() ); // button

// Геттеры и сеттеры
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // геттер
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // сеттер
    set fullName(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
    }
};

let user = new User('Вася', 'Пупков');
console.log( user.fullName ); // Вася Пупков

user.fullName = 'Иван Петров';
console.log( user.fullName ); // Иван Петров
