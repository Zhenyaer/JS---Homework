"use strict"

/**
 * Функция складывает 2 числа.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция вычитает 2 числа.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция умножает 2 числа.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция делит первое число на второе.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция получает 2 числа и осуществляет над ними математическую операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может принимать значения "+", "-", "*", "/"
 * @throws {Error} Выдает ошибку при некорректной операции
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error("Введена некорретная операция: " + operation);
    }
}


console.log(mathOperation(10, 5, "+"))
console.log(mathOperation(10, 5, "-"))
console.log(mathOperation(10, 5, "*"))
console.log(mathOperation(10, 5, "/"))
console.log(mathOperation(10, 5, "^"))