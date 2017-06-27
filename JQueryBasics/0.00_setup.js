jQuery(document).ready(function(){
	
});

$(document).ready(function(){


	$("#hide").click(function(){

		$("#image").hide();
	});
	$("#show").click(function(){
		$("#image").show();
	});
	$("#explode").click(function(){
		$("#image").toggle("explode" , {pieces:16}, 2000);
	});
});	


