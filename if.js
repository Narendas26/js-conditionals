/**
 * if you buy food for me
 *      I will come
 * 
 * 
 * ------------------------
 * if biriyani price less than 300 taka
 *    i will buy
 * 
 * ------------------------
 * Basic Structure: (if)
 * if(condition){
 *    statement;
 * } 
 */

if(3 < 10){
    console.log("I have a smaller value");
}

if(13 < 10){
    console.log("This statement execute when condition is true");
}

var birianyiPrice = 500;

if(birianyiPrice <- 300){
    console.log("Mama give me some biriyani"); //This statement will not run because condition is false
}

var friedRicePrice = 250;

if(friedRicePrice <= 250){
    console.log("Mama give me a set of fried rice!"); //This statement will run because condition is true
}

/**
 * Basic Structure: if-else
 * 
 * if(condition){
 *    statement;
 * }
 * else{
 *    statement;
 * }
 */

var weight = 20;

if(weight < 20){
    console.log("I will carry it by myself");
}
else{
    console.log("I will rent a rickshaw");
}

