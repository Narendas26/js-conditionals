// Ternary Operator > Three Parts
/**
 * Structure:
 * Condition ? Do something when true : Do something when false
 */

const age = 16;

// Simple Conditional Statement:
// if(age >= 18){
//     console.log("You can vote");
// }

// else{
//     console.log("Go To Sleep");
// }

// Simple Ternary - 1
age >= 18 ?  console.log("You can vote") : console.log("Go To Sleep");


let price = 500;  //You can change the value of let
const isLeader = false; //You can not change the value of const

if(isLeader === true){
    price = 0;
}
else{
    price += 100;
}

//console.log(price);

//Simple Ternary - 2
price = isLeader === true ? 0 : price += 100;

console.log(price);


//For Nested Ternary:
let price1 = 700;

if(isLeader === true){
    if(price1 > 1000){
        price1 = price1 / 2;
    }
    else{
        price1 = 0;
    }
}
else{
    price1 = price1 + 1000;
}

//Nested Ternary: Semi Advance Ternary

let price2= 800;

price2 = isLeader === true ? 
            price2 > 1000 ? 
                price2 / 2 : 0
        : price2 + 1000;

console.log(price2);
