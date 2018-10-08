/*This mini game has a constructor function to create players 
to battle each other at random. Whoever get the other player's health value
reaches 0 won*/

//declaring the constructor function for the Players with 2 properties: name and health
function Player(name, health){
    this.name = name;
    this.health = health;
};

//initialize two players

let player1 = new Player ("Dragon", 200);
let player2 = new Player ("Alligator", 250);

/*make a prototype function to for one to attack the other
at random to reduce each other's health*/

//Key to remember these have to be applied on an object 
// object.attack(argument)  when thinking about the function 
//bear in mind

Player.prototype.attack = function(opponent){
        opponent.health -=10;
}

function turn(p1,p2){
    while(p1.health !== 0 && p2.health !==0){ 
//important logic not using || in this case either one reach 0 will break the condition when && is used
       
       let turn = Math.floor(Math.random()*10);
       if(turn%2 === 0){
           p1.attack(p2);   //calling a function within a function
       } else {
           p2.attack(p1);
           }
        } 
   //after breaking the loop, check who win by another condition.     
       if(p1.health == 0){
           console.log(p2.name + " won!")
       } else {
           console.log(p1.name + " won!")
       }
   }

turn(player1, player2)

/*version 2 of this game when one player attack 3 time consecutively
their health go up by 5 pts.*/ 

//add one more function upHealth 
//Key to note, argument is not need if we use "this" before the property
Player.prototype.upHealth = function(){   
        this.health +=5;
}


//rewrite turn function to include new feature
function turn(p1,p2){
    let count1 = 0; //set counter for player 1
    let count2 = 0; //set counter for player 2
    while(p1.health !== 0 && p2.health !==0){ 
//important logic not using || in this case either one reach 0 will break the condition when && is used
       
       let turn = Math.floor(Math.random()*10);
       if(turn%2 === 0){ 
           p1.attack(p2);   //calling a function within a function
           
           count1 ++   //counter increase whenever attack take place 
           if(count1 === 3){  //adding another condition to call the upHealth function
               p1.upHealth(p1);
               return count1 = 0; //reset counter to 0;
           }
       } else {    
           p2.attack(p1);

           count2 ++    //exact same logic
           if(count2 === 3){
            p2.upHealth(p2);
            return count2 = 0;
        }
           }
        } 
   //after breaking the loop, check who win by another condition.     
       if(p1.health == 0){
           console.log(p2.name + " won!")
       } else {
           console.log(p1.name + " won!")
       }
   }

turn(player1, player2)