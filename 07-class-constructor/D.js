// // // /*Killing monster game*/

class Monster {
    constructor(option) {
        this.health = 100;
    }

    wounded(strike){
        this.health = this.health - strike;
        console.log(this.health);
        if(this.health==0){
            console.log("monster dead");
        }
    }

}

Monster.prototype.hero = function(){
    while(this.health !== 0){
    let magic = Math.floor(Math.random()*20);
    if(magic>=5 && magic<=20){
        this.wounded(20);
    } else {
        console.log("missed!");
    }
  } 
}

let durby = new Monster();

durby.hero();


//  console.log(Math.floor(Math.random()*10))