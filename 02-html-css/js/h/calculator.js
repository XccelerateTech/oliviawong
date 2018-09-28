/*The calculator function will receive 3 arguments - operator, number 1 and number 2.
It will return the answer of the algebric expression of number 1 operator number 2.*/


//declare the function

/*since I cannot change the string into the mathematical operators, I 
simply check and compare the input with the 4 possible strings to call
for the corresponding calculation.*/ 

function calculator(operator, x, y) {
    switch (operator){
        case "+":
         console.log(x + y);
         break;
        case "-":
         console.log(x - y);
         break;
        case "*":
         console.log(x * y);
         break;
        case "/":
         console.log(x / y);
         break;
        default:
         console.log("cannot identify the operator");
    };
};

calculator ("+", 4, 5);