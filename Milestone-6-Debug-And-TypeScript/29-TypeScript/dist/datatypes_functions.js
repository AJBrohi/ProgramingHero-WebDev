"use strict";
let age = 50;
let club = 'Real Madrid';
const isFamous = true;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
function add1(num1, num2) {
    // return num1 + num2;
} // not recommended
add1('adam', 'sand');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
doubleItAndConsole(10);
let multiply2;
multiply2 = (x, y) => x * y;
multiply2(5, 6);
