/*
Chapter Name: Variable
Page No: 64
This File: 7
Total Practice: 71
*/

const stringValue1 = "20";
const value1 = parseInt(stringValue1) + 10;
console.log(value1); // 30

const stringValue2 = "3.14159";
const value2 = parseInt(stringValue2);
console.log(value2);

const string = "premikBoy";
const stringToNum = parseInt(string);
console.log(stringToNum); // NaN

const n1 = 3.456;
const n2 = 2.789;
const sum = n1 + n2;
const sumTwoDigit = parseFloat(sum.toFixed(2));
console.log(sumTwoDigit); // 6.25

const x = "56.78";
const y = "12.34";
const total = parseFloat(x) + parseFloat(y);
console.log(total); // 69.12

const a = "10.5678";
const b = "5.4321";
const totalNum = (parseFloat(a) + parseFloat(b)).toFixed(1);
console.log(totalNum); // 16.0

const num = "42.45678954";
const round = parseFloat(num).toFixed(3);
console.log(round); // 42.457
