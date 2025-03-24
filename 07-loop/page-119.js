// Chapter Seven (Loop) : Page No 119
// Total Practice: (This File: 6, Total: 164 + 6 = 170)

for(i=20; i<=50; i++){
    if(i%7==0){
        console.log(i);
    }
}
for(i=40; i<=80; i++){
    if(i%5==0 && i%7==0){
        console.log(i);
    }
}
sum = 0;
for(a=1; a<=40; a++){
    if(a%13==0){
        sum = sum +a;
    }
}
console.log(sum);

for(b=1; b<=50; b =b+4){
    console.log(b);
}

for(i=0; i<=100; i++){
    if(i%9==0 && i%6==0){
        console.log(i);
    }
}

let addition = 0;
for(c=1; c<=50; c++){
    if(c%3==0 && c%4==0){
        addition = addition + c;
    }
}
console.log(addition);