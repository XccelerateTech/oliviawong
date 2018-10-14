
//b with .ajax
let informMe =(endpoint, value)=>{
    $(function(){
        $.ajax({
        url: `https://restcountries.eu/rest/v2/${endpoint}/${value}`,
        type:"GET"
    }).done(function(data){
        console.log(data);
    }).fail(function(){
        console.log(`error`);
});
    });
};


//c with .get
let informMe =(endpoint, value)=>{
    $(function(){
        $.get(
        `https://restcountries.eu/rest/v2/${endpoint}/${value}`)
    }).done(function(data){
        console.log(data);
    }).fail(function(){
        console.log(`error`);
});
    };


informMe("capital","paris")
