//making an alarm function that will set off to report current time

let alertTime =()=>{
    let hh = new Date().getHours(); 
    let mm = new Date().getMinutes();
    let hour = hh.toString().padStart(2,"0"); //turnin ght hour and min into string with 0 pad left to double digit
     let min = mm.toString().padStart(2,"0");
console.log(`Alarm ringing at ${hour}:${min}`);
}

/* set a function that take in the time from 1-60 sec
for the alertTime funcion to be called
*/

let minuteAlarm =(sec)=>{ 
  let msec = sec*1000;
  if(sec<1 || sec>60){   //validate input to be within 1-60 sec
      console.log("error");
  } else {
     //convert sec input to millisec for the setTimeout function 
  setTimeout(alertTime, msec);
}
};

minuteAlarm(2);