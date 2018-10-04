/*this function takes in an array of grades and compute 
the average to the nearest integer*/

//to calculate average
//      total grade (sum of all)/number of item

function averageGrades(grades){
    let count = grades.length  //set number of item from the array length
    total = grades.reduce(function(acc, number){
        return acc + number;
    },0)  //add up all numbers in the array 
    
    // calculate the average and Math.floor round it to nearest integer
    return Math.floor(total/count); 
}


averageGrades([28,93,47,76,89])