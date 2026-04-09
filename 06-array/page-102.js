/*
Chapter Name: Array
Page No: 102
This File: 6
Total Practice: 145
*/
const fruis = ["apple", "banana", "mango", "lichi"];
fruis.includes("mango") ? console.log("Mango Exists") : console.log("No Mango"); //Mango Exists

const names = ["Babul", "Alif", "Choton"];
const babul = names.indexOf("Babul");
console.log(babul); // 0

const friends = ["Rimon", "Rifat", "Rajib"];
const rifat = friends.indexOf("Rifat");
console.log(rifat); // 1

const city = ["Dhaka", "Chittagong", "Sylhet"];
city.push("Rajshahi");
console.log(city.includes("RajShahi")); // false

const items = ["Dighi", "Megh", "Bristy", "Borsha"];
items.includes("Bristy")
  ? console.log("I need umbrella")
  : console.log("No Rain, No Pain"); // I need umbrella

const favGames = ["Football", "Cricket", "Hocky"];
console.log(favGames.includes("Badminton")); // False
