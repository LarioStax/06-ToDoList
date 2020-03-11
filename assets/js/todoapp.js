//Check off specific todos by clicking
//add listener to an element (ul) that exists when the page loads
//then listen only to the lis inside that ul
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Clicking on icon removes the entire todo
//add listener to UL, but listen for click on a span inside it!
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding new todos functionality
$("input[type='text']").on("keypress",function(event){
	if(event.which === 13) {
		//getting new todo text from input
		var todoText = $(this).val();
		//strip html tags from the text
		var strippedText = stripHTML(todoText);
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + strippedText + "</li>");
		//clear the input box
		$(this).val("");
	};
});


$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});


// $("li").on("click", function() {
// 	//if li is grey
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		//then turn black
// 			$(this).css({
// 				color: "black",
// 				textDecoration: "none"
// 			});
// 	} else {
// 		//turn it grey
// 		$(this).css({
// 			color: "grey",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

function stripHTML(text){
   var regex = /<[^>]+>/ig;
   return text.replace(regex, "");
}