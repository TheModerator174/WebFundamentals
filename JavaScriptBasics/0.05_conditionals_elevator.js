 

 var elevatorUp =true;
 var elevatorDown= true;
 var elevatorBroken= false;
 var elevatorIsStuckWhileWeAreOnIt= true;
 var elevatorNumber= 13;

 if(elevatorUp === true){
 	console.log("Going up!")
} else{
	console.log("Going down!")
} 

if(elevatorIsStuckWhileWeAreOnIt){
	console.log("We should call 911")
}

if(elevatorBroken && elevatorIsStuckWhileWeAreOnIt){
	console.log("Oh no!!")
}

if(elevatorDown === 13 && elevatorIsStuckWhileWeAreOnIt){
	console.log("")
}









