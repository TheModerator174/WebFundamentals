/*Bronze*/
for (var i=0; i < 21; i += 2){
	console.log(i)
}
 /*Silver*/

 for (var i = 0; i < 101; i += 25){
	if(i === 50){
		console.log("Halfway there!")
	}
	else{
		console.log(i)
	}
}

/*Gold*/
for (var i = 0; i < 11; i++){
	if  (i === 9){
		console.log("nine")
	} else if (i === 10) {
		console.log("ten")
	}
	else {
		console.log(i)
	}
}  

/*While loop*/
var counter = 0;
while(counter <100){
	counter+=25;
	if(counter === 50){
		console.log("There's Halfway")
	} else{
		console.log(counter)
	}
}