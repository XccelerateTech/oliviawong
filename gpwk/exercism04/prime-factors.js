var PrimeFactors = function (number) {
    this.number = number;
};

/*primeFactor is a class and for is a 
function within this class*/ 
primeFactors.prototype.for = function() {
    var i=2;
    var solution=[];
    while (number !== 1){ 
        if(number%i === 0){
            number = number/i;
            solution.push(i);
    } else {
        i++;
    }; 
  }; return solution;
};

module.exports = PrimeFactors;