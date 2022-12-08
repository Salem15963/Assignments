class Card  {
    constructor(name, cost) {
        this.name = name
        this.cost = cost;
    }
}

class Unit extends Card  {
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }


    reduceResilience(x){
    this.resilience-=x;
}

increaseResilience(val){
    this.resilience+=val;
}

attack(target){
    console.log("Start the Fight......");
    console.log("Target resilience = " + target.resilience);
    target.reduceResilience(this.power);
    console.log(`this ${this.name} decrease `+ target.name + " resilience by " + this.power);
    console.log(target.name + " resilience after the attack = " + target.resilience);
    console.log("End the Fight");
    console.log("............................................................................");
}

}

class Effect extends Card  {
    constructor(name, cost, text, state, magnitude) {
        super(name, cost)
        this.text = text;
        this.state = state;
        this.magnitude = magnitude;
    }
        play(target) {
            if( target instanceof Unit ) {
    
                if(this.state === "resilience") {
                    // target.ResManager(this.magnitude);
                    target.resilience+=this.magnitude;
                    console.log("Playing " + this.name);
                    console.log("Effect: " + this.text);
                    console.log(target.name + " new resilience = " + target.resilience);
                    console.log("......................................................");
                }
                else if(this.state === "power") {
                    // target.powerManager(this.magnitude);
                    target.power+=this.magnitude;
                    console.log("Playing " + this.name);
                    console.log("Effect: " + this.text);
                    console.log(target.name + " new Power = " + target.power);
                    console.log(".............................................");
                }
                
                else {
                    throw new Error( "Target must be a unit!" );
                }
                
            }
        }
    }

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(RedBeltNinja);

const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(BlackBeltNinja);



const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
console.log(HardAlgorithm);

const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
console.log(UnhandledPromiseRejection);

const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2	", "power", +2);
console.log(PairProgramming);

HardAlgorithm.play(RedBeltNinja);
UnhandledPromiseRejection.play(RedBeltNinja);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);
BlackBeltNinja.attack(RedBeltNinja);

