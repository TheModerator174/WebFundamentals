//alert("Hey. It's working");

$(document).ready(function(){

	$("#add").on("click", function(){
		var videoGame = $("#videogame").val();
		console.log(videoGame);

		var listItem = "<li>" + videoGame + "</li>";
		console.log(listItem);

		$("#videoGameList").append(listItem);

		$("#videogame").val("");
	});

});