
$("button").click(function(e){
    e.preventDefault();
    dayLengthCompare(callback);
});


let callback = (x) => $(function(){
    $.get(`https://api.sunrise-sunset.org/json?lat=22.28552&lng=114.15769&formatted=0`
             ).done(function(data){
        let HKDayLen = data.results.day_length;
        console.log(x, HKDayLen);
        if(x>HKDayLen){
            word="longer";
    }else {
        word="shorter";
    }

      $("#display").append(`<p>This place have a ${word} day-length than Hong Kong</p>`)
    
    }).fail(function(){
        console.log("there is an error");
            })
      
});
    

let dayLengthCompare =(callback)=>{
    let lat = $("input[name=lat]").val();
    let lng = $("input[name=lng]").val();

$(function(){
    $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
    ).done(function(data){
        let inputDayLen = data.results.day_length; 
        callback(inputDayLen);
    }).fail(function(){
        console.log(`there is an error`);
    });
});        
        

};

