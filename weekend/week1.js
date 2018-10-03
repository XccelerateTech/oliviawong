/* The hiddenMessage function look up a Hash table to turn an 
input string into a set of numbers*/

//Assign the Hash table 

var showCode = {
    "a":0,
    "b":1,
    "c":2,
    "d":3,
    "e":4,
    "f":5,
    "g":6,
    "h":7,
    "i":8,
    "j":9,
    "k":10,
    "l":11,
    "m":12,
    "n":13,
    "o":14,
    "p":15,
    "q":16,
    "r":17,
    "s":18,
    "t":19,
    "u":20,
    "v":21,
    "w":22,
    "x":23,
    "y":24,
    "z":25
};

//declare a function that takes in 1 argument

function hiddenMessage(word){
    let message=""; //assign an empty string
    wordArray = word.split("");  //split the word into an array
    for (let letter of wordArray){
        message = message + showCode[letter] //loop each letter in the array to match the number key from the Hash 
    };
    return message;
};

console.log(hiddenMessage("love"));

