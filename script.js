'use strict';

// внешнее лексическое окружение, все переменные и тп внутри внешнего объекта
/* let number = 5; debugger

// внутренее лексическое окружение, все переменные и тп внутри одного объекта
function logNumber() {
    console.log(number); debugger
}

number = 6;

logNumber(); debugger

number = 8;

logNumber(); debugger */


function createCounter() {
    let counter = 0;
    // внутренее лексическое окружение
    const myFunction = function () {
        debugger
        counter = counter + 1; debugger
        return counter; debugger
    }
    // внутренее лексическое окружение
    return myFunction;
}

// внешнее лексическое окружение
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);


/* let a = 3
function addTwo(x) {
    let ret = x + 2
    return ret

}

let b = addTwo(a)
console.log(b) */



/*  let val1 = 2 // Объявление новой переменной vall в глобальной области выполнения и присваивание ей значения 2

 function multiplyThis(n) {
    let ret = n * val1  // В локальной области выполнения объявлена переменная ret
    // Умножаем два операнда и присваиваем результат переменной ret

    return ret
    // Возвращение переменной ret. Локальна область выполнения разрушена вместе с переменными ret и n. Переменная vall не разрушена, так как является частью глобальной области выполнения

}
let multiplied = multiplyThis(6) // Объявляем новую переменную multiplied и присваиваем ей описание функции
// внутри функции присваем аргумент (6)

console.log('example of scope:', multiplied) */
// число 12 присвоено переменной multiplied



let val = 7 // Мы объявляем переменную val в глобальной области выполнения и присваиваем ей число 7
function createAdder() { // Мы объявляем переменную с названием createAdder в глобальной области выполнения и присваиваем ей описание функции
    function addNumbers(a, b) { // описываем функцию
        let ret = a + b // Внутри локальной области создано две новых переменных, a и b. Им соответствуют значения 7 и 8, как аргументы, которые мы передали функции в предыдущем шаге
        return ret
        // Сложение выполнено. Мы сложили значения переменной a и b. Результат(15) присвоен переменной ret.
    }

    return addNumbers 
    // Возвращаем все свойства из переменной addNumbers
}
let adder = createAdder() // Мы объявляем новую переменную adder в глобальной области выполнения и присваиваем ей функцию - переменную, createAdder
let sum = adder(val, 8) //  Первый параметр — это переменная val, которую мы определили в первом шаге. Её значение 7, а значение второго параметра 8
console.log('example of function returning a function: ', sum); 
// Мы выводим значение переменной sum в консоль.