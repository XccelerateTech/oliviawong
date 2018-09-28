/* Logging number 1 to 30 and for number divisible by 3 log Hong,
number divisible by 5 log Kong, divisible by both log Hong Kong.*/

for (let n=1; n<=30; n++){ //making a loop to count 1 to 30
    x ="";    //  assign an empty string        
    if (n%3 === 0){ //if condition to check whether n is divisible by 3
        x = x + "Hong"; //add Hong to the empty if condition apply
            if (n%5 === 0){ //nested if condition to check whether the same n is divisible by 5 also
        x = x + "" + "Kong";//add Kong to the empty if condition apply
        };  
    } else {
        x = n;   //if both conditions fail, return n
    }
    console.log(x);
};