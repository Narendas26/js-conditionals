var a = !true;
var b = !false;
var c = !"";
var d = !"Web-Development";
var e = null;

console.log(a); //it returns false
console.log(b); //it returns true
console.log(c); //it returns true
console.log(d); //it returns false
console.log(!e); //it return true


//Practical Example: -1
var userInput = ""; //This execute if block because when data is "" it return false and when it reach at if block for not it returns true which make if block true

if(!userInput){
    console.log("User Input is empty");
}
else{
    console.log("User Input is:", userInput);
}


//Practical Example: -2
var userId = 10;

console.log(!!userId);  //This return true because userId have data = 10 Which return true and when we give double not than it return true
console.log(!userId);  //This return false because userID have data = 10 which return true and when we give single not than it return false
console.log(userId);   //This return actual data of variable
