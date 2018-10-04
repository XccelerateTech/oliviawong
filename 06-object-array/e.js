/*This function takes in two arguments and 
return a statement on the match result*/

//argument input can be array, no need to assign further
function uefaEuro2016(teams, score){
    if (score[0]>score[1]) {
        console.log( "At match " + teams[0] + "-" + teams[1] + "," + teams[0] + " won!")
    }  else if (score[1]> score[0]){
        console.log( "At match " + teams[0] + "-" + teams[1] +"," + teams[1] + " won!")
    } else {
        console.log("At match " + teams[0] + "-" + teams[1] + "," + "teams played draw")
    }
};

uefaEuro2016(["England","Germany"], [4,9]);