/*Casino simulation*/

//set up a Gambler constructor function

function Gambler(lose){
    this.cash = 5000;
    this.bet = 500;
    this.lose = lose;
}

let peter = new Gambler(0.6);
let john = new Gambler(0.4);
let frank = new Gambler(0.7);

let casino = [peter, john, frank];

function gamble(){
    for (let gambler of casino){
        console.log(true);
       while(gambler.cash > 0){ 
        if(Math.random() <= gambler.lose){
            gambler.cash += gambler.bet;
        } else {
            gambler.cash -= gambler.bet;
        }
      }
    } return casino.sort(function(a,b){
        return a.cash - b.cash;
    }) 
}

gamble()


let sortCasino = casino.sort(function(a,b){
return a.lose - b.lose;
});

console.log(sortCasino)