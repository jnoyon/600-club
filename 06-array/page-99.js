/*
Chapter Name: Array
Page No: 99
This File: 5
Total Practice: 139
*/

const numbers = [10, 20, 30, 40, 50];
numbers.push(60);
console.log(numbers); // [ 10, 20, 30, 40, 50, 60 ]

const names = ["Sajib", "Sajog", "Rakib", "Shohel"];
names.push("Sumon");
console.log(names); // [ 'Sajib', 'Sajog', 'Rakib', 'Shohel', 'Sumon' ]

const games = ["Game1", "Game2", "Game3"];
games.pop();
console.log(games); // [ 'Game1', 'Game2' ]

const nums = [24, 36, 48, 60];
nums.unshift(12);
console.log(nums); // [ 12, 24, 36, 48, 60 ]

const books = [
  "Bangla",
  "English",
  "ICT",
  "JS",
  "Physics",
  "Computer Office Application",
];
books.shift();
console.log(books); // [ 'English', 'ICT', 'JS', 'Physics', 'Computer Office Application' ]
