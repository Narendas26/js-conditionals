/**
 * Multilevel Condition
 */

const price = 3000;

if(price >= 5000){
    // 10% discount
    const discount = price * 10 / 100;
    console.log("You get ",discount,"bdt discount"); 
    const payAmount = price - discount;
    console.log("You have to pay ", payAmount);
}

else if(price >= 2500){
    // 5% discount
    const discount = price * 5 / 100;
    console.log("You get ",discount,"bdt discount"); 
    const payAmount = price - discount;
    console.log("You have to pay ", payAmount);
}

else{
    console.log("You have to pay ", price);
}