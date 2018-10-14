//exercise D and E

let toHHMMSS =(sec)=>{
    sec = parseInt(sec);
    let hour = Math.floor(sec/3600);
    let min = Math.floor((sec - (hour*3600))/60);
    let secs = (sec - (hour*3600) - (min*60));

    hour = hour.toString().padStart(2,"0");
    min= min.toString().padStart(2,"0");
    secs= secs.toString().padStart(2,"0");

    return `${hour}:${min}:${secs}`
    
}

$("button").click(function(e){
    e.preventDefault();
let lat = $("input[name=lat]").val();
let lng = $("input[name=lng]").val();

$(function(){
    $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
    ).done(function(data){
        console.log(data);
        let rise = data.results.sunrise;
        let set = data.results.sunset;
    // $("#display").append(`<p>Sunrise time: ${rise} <br> Sunset time: ${set}</p>`)
        let curr = new Date().getTime();
        rise = new Date(rise).getTime();
        set = new Date(set).getTime();

        let x = "";
        let t = "";
       if(curr>rise){
          x = "last"; y="ago";
          t = toHHMMSS((curr-rise)/1000);   
             } else {
                 x= "next"; y="away";
                 t =toHHMMSS((rise-curr)/1000);
             }
             
    $("#display").append(`<p>This ${x} sunrise is ${t} ${y}</p>`)
      
    if(curr>set){
        x = "last"; y="ago";
        t = toHHMMSS((curr-set)/1000);   
           } else {
               x= "next"; y="away";
               t =toHHMMSS((set-curr)/1000);
           }
           
  $("#display").append(`<p>This ${x} sunset is ${t} ${y}</p>`)
    

}).fail(function(){
    console.log("there is an error");
        })
    });
});




