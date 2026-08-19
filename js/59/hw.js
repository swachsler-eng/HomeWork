'use strict';
function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 5);

function getMultiply() {
    return function multiply(a, b) {
        console.log(a * b);
    };
}
const multiFunc = getMultiply();
multiFunc(7, 4);

function getCustomMultip(a) {
    return function multiply(b) {
        console.log(a * b);
    };
};

const timesFive = getCustomMultip(5);
timesFive(4);

/////every

function everyFilter(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}
const nums = [2, 6, 7, 4];
console.log(everyFilter(nums, (x) => x > 3));

const leters = ['a', 'B', 'c'];
const isUpperCase = (x) => x < 'a'/*=== x.toUpperCase()*/;
console.log(everyFilter(leters, isUpperCase));

console.log(leters.every(isUpperCase));
console.log(everyFilter(leters, (x) => x > 'Z'));//lowercase


//////


function someFilter(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}
console.log(someFilter(leters, isUpperCase));
console.log(leters.some(isUpperCase));
