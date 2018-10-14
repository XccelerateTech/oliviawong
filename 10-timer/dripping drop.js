//A function console.log drop every second

let drippingTap = intervalTime(function(){
    console.log("drop")}, 1000);

//stop the function

let turnOffTap =()=>{
    clearInterval(drippingTap);};