
//Object Literal//

var player = {
	name : "",
	life : 100,
	damage : 0, //attackPoints
	hasSniperRifle : true,
	hasSword : false,
	rank : ["soldier", "mage", "spartan", "barbarian"],


	//Methods
	challenge : function(){
		console.log("Sir, would you care to do battle?");
	},

	fightMe  : function(){
		console.log("Would you care to fight " + this.name + "?");
	},

	attack: function(target){
		var target= "saul"
		console.log(this.name + " attacks " + target + " for " + this.damage);
		target.life -= this.damage; 
	},

	pickedUpSword  : function(){
		if(this.hasSword === true){
			console.log(this.name + "picked up the sword");
		}
	},
	rankDamage : function(){
		if(this.rank === "soldier"){
			var damage= 15
			console.log(this.name + " has a " + damage + " damage stat.") 
		} else if(this.rank === "mage"){
			var damage= 10
			console.log(this.name + " has a " + damage + " damage stat")
		} else if(this.rank === "spartan"){
			var damage= 25
			console.log(this.name + " has a " + damage + " damage stat")
		} else if(this.rank === "barbarian"){
			var damage= 20
			console.log(this.name + " has a " + damage + " damage stat")
		}
	}

};


var saul = Object.create(player);
saul.name = "Saul";
saul.life = 120;
saul.damage = 20;
saul.hasSniperRifle=true; 
saul.hasSword = true;
console.log(saul.name)
console.log(saul.life)
console.log(saul.hasSniperRifle)
saul.fightMe();

var carlos = Object.create(player);
carlos.name = "Carlos";
carlos.life = 110;
carlos.damage = 40;
carlos.rank = "barbarian"
console.log(carlos.name)
console.log(carlos.life)
console.log(carlos.damage)
console.log(carlos.rank)
carlos.attack(saul)
carlos.rankDamage()