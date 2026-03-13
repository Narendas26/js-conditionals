var myMarks = 81;
var friendMarks = 40;

if(myMarks > 80){
    if(friendMarks > 80){
        console.log("Dear Friend! Lets Go For a lunch");
    }

    else if(friendMarks >= 60 && friendMarks < 80){
        console.log("Dear Friend! good luck next time");
    }

    else if(friendMarks >= 40 && friendMarks < 60){
        console.log("Keep your friend's message unseen.");
    }

    else if(friendMarks < 40){
        console.log("Block My Friend!");
    }
}

else{
    console.log("Go to home, sleep & act sad!");
}