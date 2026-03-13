var weight = 110;
var height = 1.80;

var BMI = weight / (height * height);

console.log("BMI Value is:", BMI);

if(BMI < 18.5){
    console.log("You are underweight");
}

else if(BMI >= 18.5 && BMI <=24.9){
    console.log("You are normal");
}

else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight");
}

else{
    console.log("You are obese");
}