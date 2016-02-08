'use strict';

// var не имеет блочной видимости
var x = 'foo';

if (true) {
  var x = 'bar';

  console.log(x); // bar
}

console.log(x); // bar


// let имеет блочную видимость
let y = 'foo';

if (true) {
  let y = 'bar';

  console.log(y); // bar
}

console.log(y); // foo

// переменные var видны вне блока
for(var i = 0; i < 10; i++) { /* … */ }
console.log(i); // 10

// переменные let не видны вне блока
// для каждой итерации создается новая переменная
for(let k = 0; k < 10; k++) { /* … */ }
console.log(k); // ошибка
