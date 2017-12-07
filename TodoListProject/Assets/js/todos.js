//Strike through items on clicking
$("ul").on("click","li",function()
{
	$(this).toggleClass("completed")
	}
);

//remove the item where "X" span is clicked 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		});
	event.stopPropagation();
	});

//first "this" is different from
//2nd "this". First "this" represents the span "X" which is clicked on and
//second "this" represents the li because now we are targetting the parent
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//extracting value from the text input box
		var TodoText = ($(this).val())
		//remove the text from the input box
		$(this).val("");
		//make a new li out of the text and put it in ul with the span
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + TodoText+ "</li>")
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
// click only adds event to the existing event. On click can add events to the future elements. 
//Like here, the to-do items that we add later are future elements. Click will not work on it, meaning,m
//meaning, it will not apply the function toggle on the new list items. So we use "on click".


/////////////////////////////////////////


//$("ul").on("click","li",function()
// We use ul first and then li because we can add an event in jquery only on elements that exist
// when this code is run the first time. and when this code is run the first time, all lis are not present.
//So we tell jQuery to add the on click listener to the ul family and then to the lis