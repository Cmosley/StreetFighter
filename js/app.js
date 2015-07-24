$(document).ready(function() {

	$(".ryu").mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
 	})

	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
 	})

 	.mousedown(function() {
 		playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  			.animate({'left': '1020px'},
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '525px');
			});
	})	

	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

	$(document).keydown(function(e) {
		if(e.keycode == 88) {
		alert("key pressed");
		}
	});
		/*

		if (e.keycode == 88) {
     		$('.ryu-ready').hide();
     		$('.ryu-still').hide();
      		$('.ryu-cool').show();
			}else{
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			}
		});*/
		
});




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
