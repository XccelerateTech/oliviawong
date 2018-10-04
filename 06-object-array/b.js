/*this funciton takes in a number and turn it 
into an array with reverse order of each number*/

function reverse(number) {
  var revStr=[];        //prepare an empty array for new input
  
  /*turn the number into a string first coz split can only be
   used on string not number*/
  var str=number.toString(); 
  var arr=str.split("");   //split into each number

  /*A for loop to go through the original array, 
  select the item in itwith i-index, turn it back into a number 
  using Number() **make sure N is capital** and assign it to variable x*/
  for (i=0; i<arr.length; i++){
    x = Number(arr[i]);
    revStr.unshift(x); //add x from the front of the array one by one to reverse the order
  };
  return revStr;

}

reverse(38927931424);