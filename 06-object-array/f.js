/*this function receive a string of number and will sort is accesending 
order returning a new string of letter*/

//set up a hash to call store the code data
var code = {
    "1":"a",
    "2":"b",
    "3":"c",
    "4":"d",
    "5":"e",
    "6":"f",
    "7":"g",
    "8":"h",
    "9":"i",
    "0":"j",
};

function transform(numStr){
    var solution="";
    arr=numStr.split("");
    arrSorted = arr.sort();
 for (i=0; i< arrSorted.length; i++){
    solution += code[arrSorted[i]];
 } return solution;
};

transform("238654");