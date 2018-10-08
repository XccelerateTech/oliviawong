class FlyingAnimal {
   can_fly(){
        console.log(`A ${this.type} can fly`);
    }  
}

class SwimAnimal{
    can_swim(){
        console.log(`A ${this.type} can swim`);
    }
}

class Bird extends FlyingAnimal{
    constructor(){
        super();
        this.type="Bird";
    }

    reproduce(){
        console.log(`A ${this.type} lay eggs`)
    }
    
}

class Bat extends FlyingAnimal{
    constructor(){
        super();
        this.type="Bat";
    }

    feed_milk(){
        console.log(`${this.type} can feed milk`);
    }

}


class Whale extends SwimAnimal{
    constructor(){
        super();
        this.type="Whale";
    }

    feed_milk(){
        console.log(`${this.type} can feed milk`);
    }
    
}  


class Fish extends SwimAnimal{
    constructor(){
        super();
    }

    lay_egg(){
        console.log(`A ${this.type} can lay eggs`)
    }
    can_swim(){
        console.log(`A ${this.type} can swim`);
    }


} 