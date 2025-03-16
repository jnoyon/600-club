// Chapter Three (Data Type) : Page No 83
// Conditional Statement Related Problem
// Total Practice: (This File: 7, Total: 102 + 7 = 109)

const amount = 4500;
if(amount>3000){
    const discount = (amount / 100) * 5;
    const pay = amount - discount;
    console.log(pay);
}
else if(amount>6000) {
    const discount = (amount / 100) * 15;
    const pay = amount - discount;
    console.log(pay);
}
else {
    console.log('No Discount Availabe')
}

const age = 65;
if (age < 12 ){
    console.log('You do not need to pay')
}
else if (age>60){
    console.log('You will get 50% Discount')
}
else {
    console.log('You are not able to get Discount')
}

const balance = 25060;
if(balance<1000){
    console.log('Deposite Now')
}
else if(balance>= 1000 && balance<=5000){
    console.log('Enjoy Now')
}
else{
    console.log('Marry Me')
}

const mark = 99;
if(mark<50){
    console.log('Fail')
}
else if(mark>=50 && mark<=80){
    console.log('Pass')
}
else{
    console.log('A+')
}

const page = 1500;
if(page<100){
    console.log('Small Book')
}
else if(page<=100 && page>=500){
    console.log('Mid Size Book')
}
else {
    console.log('Heart Attact Size Book')
}

const temp = 50;
if(temp<0){
    console.log('ICE')
}
else if(temp>=0 && temp<=20){
    console.log('Cool Cool')
}
else {
    console.log('Hot Hot')
}

const level = 10;
if(level<10){
    console.log('Novice')
}
else if(level>=10 && level<=50) {
    console.log('Expert')
}
else{
    console.log('Pro Gamer')
}