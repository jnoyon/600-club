// Chapter Three (Data Type) : Page No 73
// Comparison (===) Related Problem
// Total Practice: (This File: 7, Total: 80 + 7 = 87)

const myBalance = 50;
const myFriendBalance = '50';
const firstBalanceCompare = myBalance == myFriendBalance;
const secondBalanceCompare = myBalance === myFriendBalance;
console.log(firstBalanceCompare, secondBalanceCompare);

const notebookText = 'JavaScript';
const compareNotebookText1 = notebookText == 'JavaScript';
const compareNotebookText2 = notebookText === 'JavaScript';
console.log(compareNotebookText1, compareNotebookText2) // true true : Becase Both are Strig and Same Value;

console.log(25 == '25'); // true : becease double equal check values only
console.log(25 === '25') // false : because tripple equal check also datatypes

console.log('apple' == 'apple'); // true : becease double equal check values only
console.log('apple' === 'apple') // true : because tripple equal check also datatypes and both are string

console.log('test' == 'TEST'); // false : upppercase != lowercase
console.log('test' === 'TEST'); // false : upppercase != lowercase

const variableX = 15;
const variableY = '20';
const compareVar = variableX !== variableY;
console.log(compareVar) // true


const variableA = 'hello';
const variableB = 'Hello';
const firstCompare = variableA == variableB;
const secondCompare = variableA === variableB;
console.log(firstCompare) // false
console.log(secondCompare) // false