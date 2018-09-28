/* The millionaire function will accept one argument. It will first check whether
the argument is a number. Then it manipulates the number input until it is equal to 
or greater than 1000000 in order to make a return.*/

//declare the function with 1 argument num
function millionaire(n) { 
    if (n<=0 || isNaN(n)) {  //validate the input is a number
        return "ERROR";
    } else if(n>=1000000){ //print number if greater than or equal a million
        return n;
    } else {
        while (n <1000000){ //loop the multiplication if the number is not yet >= a million
            n *= 10;
        };
    return n;
    };
}

console.log(millionaire(68));
console.log(millionaire("oli"));
console.log(millionaire(20000831));