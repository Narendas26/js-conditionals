const salary = 25000;
const isBCS = true;
const hasCar = true;
const height = 61;

//Single Condition
if(salary > 20000){
    console.log("Good Bride");
}
else{
    console.log("Search Other Bride");
}

//Multiple Condition - 1
if(salary > 20000 && height > 66){

    console.log("Good Bride");
}
else{
    console.log("Search Other Bride"); //THis statement Will happen. 
}


//Multiple Condition - 2
if(salary > 25000 || height > 72){

    console.log("Eso baba Kabul");
}
else{
    console.log("Vhag tui makbul");
}

//More & More Condition-1
if(salary > 25000 || height > 72 || isBCS == true){

    console.log("Eso baba Kabul");
}
else{
    console.log("Vhag tui makbul");
}

//More & More Condition-2
if(salary > 25000 && height > 72 && isBCS == true){

    console.log("Eso baba Kabul");
}
else{
    console.log("Vhag tui makbul");
}


//======================Complex Condition - 1 ============================
if((salary > 25000 && hasCar == true) || isBCS == true){

    console.log("Eso baba Kabul");
}
else{
    console.log("Vhag tui makbul");
}


//======================Complex Condition - 2 ============================
if((salary > 25000 || hasCar == true) && isBCS == true){

    console.log("Eso baba Kabul");
}
else{
    console.log("Vhag tui makbul");
}



