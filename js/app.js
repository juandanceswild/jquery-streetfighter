$(document).ready(
	function () {
	var over = false;
	var keypress = false;
	$('.ryu').mouseenter(function() {
		over = true;
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		if (keypress == true) {
			$('.ryu-cool').show();
		}
		else {
			$('.ryu-ready').show();
		}
		
	})

	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		over = false;
		if (keypress == true) {
			$('.ryu-cool').show();
		}
		else {
			$('.ryu-still').show();
		}
	})

	.mousedown(function () {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		//play hadouken sound
		.animate(
			{'left':'300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','-130px');
			});
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position
	});

	$(document).keydown(function( event ) {
		if (event.which == 88) {
			//ryu goes to his cool position
			keypress = true;
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
			
		}
	})

	.keyup(function ( event ) {
		if (event.which == 88) {
			//if not over ryu goes to his still position, if over he goes to ready.
			keypress = false;
			$('.ryu-cool').hide();
			if (over==true) {
			$('.ryu-ready').show();
				
			}
			else {
				$('.ryu-still').show();
			}
		
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}