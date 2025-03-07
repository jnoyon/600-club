// Chapter Three (Data Type) : Page No 64
// Parse Related Problem
// Total Practice: (This File: 7, Total: 58 + 7 = 65)

const number = '20';
const numberInInt = parseInt(number)
const newNumber = numberInInt + 10;
console.log(newNumber);

const myNum = '3.14159'
const myNumInt = parseInt(myNum);
console.log(myNumInt)

const currentValue = 'premikBoy';
const currentValueInt = parseInt(currentValue);
console.log(currentValueInt);

const num1 = 3.456;
const num2 = 2.789;
const total = num1+num2;
const result = total.toFixed(2);
console.log(result);

const num3 = '56.78';
const num4 = '12.34';
const total2 = parseFloat(num3)+parseFloat(num4);
console.log(total2);


const num5 = '10.5678';
const num6 = '5.4321';
const total3 = parseFloat(num5)+parseFloat(num6);
const result3 = total3.toFixed(1);
console.log(result3);

const myNumber = '42.45689754';
const myNumberFloat = parseFloat(myNumber);
const myNumRound = myNumberFloat.toFixed(3);
console.log(myNumRound)