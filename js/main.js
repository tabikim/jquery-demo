/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */ 
var old = $("#selector").val();
var newStuff = $('#newContent').val();

$('#change-content').click(function(){
	var buttonName = $(this).attr('id')
	var old = $("#selector").val();
	var newStuff = $('#newContent').val();
	// var selectorText = old.val();
	// var contextText = newStuff.val();
	// $(old).html(newStuff);
	switch(buttonName) {
		case 'change-content':
		$('main ' + old).html(newStuff);
		break;
		case 'add-at-end': 
		$('main ' + old.)

	}
});

$('#add-at-end').click(function(){
	var old = $("#selector").val();
	var newStuff = $('#newContent').val();
	$(old).append(newStuff);
});

$('#add-at-start').click(function(){
	var old = $("#selector").val();
	var newStuff = $('#newContent').val();
	$(old).prepend(newStuff);
});

$('#insert-before').click(function(){
	var old = $("#selector").val();
	var newStuff = $('#newContent').val();
	$(newStuff).before(old);
})
