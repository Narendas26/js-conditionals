const isLeader = true;

// if(isLeader === true){
//     console.log("Leader Asche! Chair Charo");
// }
// else{
//     console.log("Vitore Dhukte Dibi na");
// }


// বুলিয়ান ডেটা চেক করার ক্ষেত্রে === true লিখার দরকার নাই। শুধু চলক লিখে দিলে if এর ভিতরে হয়ে যাবে। সেখানেই চেক হবে সত্য কিনা মিথ্যা। 
if(isLeader){
    console.log("Leader Asche! Chair Charo");
}
else{
    console.log("Vitore Dhukte Dibi na");
}


const isPassed = false;

//if(isPassed === False) এবং if(isPassed) দুটোই একই কাজ করে। মূলত আমরা চাই মিথ্যা থাকলেই কাজ করুক তাই এটাকে নট দিয়ে সত্য করা হয়েছে যাতে if এর ভিতরের অংশ কাজ করে। 
if(!isPassed){
    console.log("Tore Biya Dia Dimu");
}
else{
    console.log("Tumi Amader Noyon er Moni");
}