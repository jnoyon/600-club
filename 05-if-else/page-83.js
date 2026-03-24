/*
Chapter Name: If else
Page No: 83
This File: 7
Total Practice: 108
*/

const amount = 4500;
if (amount > 6000) {
  const discount = (amount / 100) * 15;
  const pay = amount - discount;
  console.log(pay);
} else if (amount > 3000) {
  const discount = (amount / 100) * 5;
  const pay = amount - discount;
  console.log(pay); // 4275
}

const age = 50;
if (age < 12) {
  console.log("You can meal free");
} else if (age > 60) {
  console.log("You will get 50% discount");
} else {
  console.log("You have to pay all");
}

const currentBalance = 5000;
if (currentBalance < 1000) {
  console.log("You should deposite");
} else if ((currentBalance >= 1000) & (currentBalance <= 5000)) {
  console.log("Enjoy your life");
} else {
  console.log("You are rich.");
}

const mark = 40;
if (mark > 80) {
  console.log("A+");
} else if (mark >= 50 && mark <= 80) {
  console.log("Pass");
} else {
  console.log("Fail");
}

const page = 50;
if (page > 500) {
  console.log("hear attact book size");
} else if ((page >= 100) & (page <= 500)) {
  console.log("Mid size book");
} else {
  console.log("Small book");
}

const temperature = 40;
if (temperature > 20) {
  console.log("Hot Hot");
} else if (temperature >= 0 && temperature <= 20) {
  console.log("Cool Cool");
} else {
  console.log("Ice");
}

const level = 50;
if (level > 50) {
  console.log("Pro Gamer");
} else if ((level >= 10) & (level <= 50)) {
  console.log("Expert");
} else {
  console.log("Novice");
}
