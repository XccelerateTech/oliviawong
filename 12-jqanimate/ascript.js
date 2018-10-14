//select the box1 and slide the right icon at players turn

let i = 1;
let arr = [];
let p="";
let boxIndex = "";
$(".box").click(function(){

    boxIndex = $(this).index(); 

    if(i%2===0){$(this).children(".even").slideDown("fast");
    $(this).children(".odd").remove();
    p = "apple";
        } else{
            $(this).find(".odd").slideDown("fast")
            $(this).find(".even").remove();
            p = "lemon";
        }
return i++;

});  
arr.push(`${boxIndex}:${p}`);
console.log(arr);

/*function that keep record of which box checked 
by which player
*/

//check from the array value in key 1,2,3 or 4,5,6 or 7,8,9
//key in 147, 258, 369 and in 159, 357 are identical, that player
//win



