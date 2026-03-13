// Ticket Fair Calculator

var age = 50;
var isStudent = false;
var ticketPrice = 800;

if(age < 10){
    console.log("Dear children! You get a free ride");
}

else if(age >= 60){
    ticketPrice = ticketPrice * 15 / 100;
    console.log("Dear Senior Citizen! You Get a 15% Discount based Ride. You have to pay: ", ticketPrice);
}

else if(isStudent){
    ticketPrice = ticketPrice * 50 / 100;
    console.log("Dear Student! You Get a 50% discount based Ride. You have to pay: ", ticketPrice);
}

else{
    console.log("You have to pay 800tk for our ride");
}