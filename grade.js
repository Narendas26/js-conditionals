const number = 70;

if((number >= 80) && (number <= 100)){
    console.log("You Get A+");
}

else if((number >= 70) && (number <= 79)){
    console.log("You Get A");
}

else if((number >= 60) && (number <= 69)){
    console.log("You Get A-");
}

else if((number >= 50) && (number <= 59)){
    console.log("You Get B");
}

else if((number >= 40) && (number <= 49)){
    console.log("You Get C");
}

else if((number >= 33) && (number <= 39)){
    console.log("You Get D");
}

else if((number >= 0) && (number <= 32)){
    console.log("Sorry You are Failed!");
}

else{
    console.log("Wrong Input");
}