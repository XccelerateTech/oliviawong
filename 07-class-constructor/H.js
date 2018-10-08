/*class code for composition different modules for different 
new class object to pick up*/

class FlyingAnimal {
    constructor(type){
        this.type = type; //only passing one variable so "option" is not need
    }

    can_fly(){
         console.log(`A ${this.type} can fly`);
     }  
 }
 
 class SwimAnimal{
    constructor(){
        this.type = type;
    }

     can_swim(){
         console.log(`A ${this.type} can swim`);
     }
 }
 
 class FeedMilkAnimal{
    constructor(){
        this.type = type;
    }

    feed_milk(){
        console.log(`${this.type} can feed milk`);
    }
 }

 class LayEggAnimal{
    constructor(){
        this.type = type; 
    }
    reproduce(){
        console.log(`A ${this.type} lay eggs`)
    }
    
 }


 class Bird {
     constructor(){ //choose the composition module to "compose" the new class you want
        this.flyer = new FlyingAnimal ("Bird");  //the type is specified within parenthesis
        this.layer = new LayEggAnimal ("Bird");
     }
 
 }
 
 class Bat {
     constructor(){
        this.flyer = new FlyingAnimal ("Bat");
        this.feeder = new FeedMilkAnimal ("Bat");
     }
 }
 
 
 class Whale {
     constructor(){
         this.swimer = new SwimAnimal("Whale");
         this.feeder = new FeedMilkAnimal("Whale");
     }
     
 }  
 
 
 class Fish {
     constructor(){
        this.swimer = new SwimAnimal("Fish");
        this.layer = new LayEggAnimal("Fish");
     }
 
 } 