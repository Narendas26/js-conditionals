var num1 = 400;
var num2 = 450;

var result;

if(num1 > num2){
    result = num1 * num1;
    console.log("When num1 is larger than num2",result);
}
else{
    result = num1 + num2;
    console.log("When num1 is not larger than num2",result);
}

// Using Ternary Operator:

(num1 > num2) ? console.log("When num1 is larger than num2",result) : console.log("When num1 is not larger than num2",result); 