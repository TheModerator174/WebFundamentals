function hello(){
	console.log("Hello!!!!");
}

hello();


var hey = function(){
	console.log("Hey!");
}

hey();

function Gustavo(){
	console.log("Gustavo")
}

Gustavo();

function addTwos(){
	var x = 2;
	var y = 2;
	console.log(x + y)
}

addTwos();

function multiplication(){
	var x = 5
	var y = 4
	console.log(x * y)
}

multiplication();


function numberEntered(x){
	console.log("The number entered is: ", x);
}

numberEntered(5);
numberEntered(7);
numberEntered(100000)

function addAnyNumbers(x,y){
	console.log("The sum is: ", x + y)
}

addAnyNumbers(17, 1000);
addAnyNumbers(15, 29);

function nameEntered(x,y){
	console.log(x + " " + y)
}

nameEntered("Carlos", "Banuelos");

function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	console.log(details);
}

petNameAndBreed("Rufus", "Weiner Dog" )

function price(cost, quantity, tax){
	var total = cost * quantity;
	console.log("The price of 10 candy bars is ", cost * quantity * tax + total); 
}

price(1.00, 10, 0.07)
