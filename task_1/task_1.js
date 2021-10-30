'use strict';

/**
 * Функция преобразует число в объект и возвращает его с описанными разрядами введенного числа
 * @param {int} num число в диапазоне [0, 999]
 * @returns {Object} объект с разрядами числа либо пустой объект в случае ошибки
 */
function getDigitsOfNums(num) {
    if (Number.isInteger(num) && num > 0 && num < 999) {
        return{
            units: num % 10,
            tens: Math.floor(num / 10) % 10,
            hundreds: Math.floor(num / 100),
        }
    }
    else {
        console.log('Значение числа должно быть в диапазоне от [0, 999].')
        return{}
    }
}

console.log(getDigitsOfNums(678));