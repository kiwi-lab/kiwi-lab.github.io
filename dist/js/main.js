$(document).ready(function() {
	var owl = $('#owl');
	owl.owlCarousel({
	    loop:true,
	    margin:0,
	   items: 1
	});

	$('.nav__button').on('click', function(event) {
		event.preventDefault();
		if ($(this).hasClass('nav__button-left')){
			owl.trigger('prev.owl.carousel');
			return;
		}
		owl.trigger('next.owl.carousel');
	});

	setTimeout(function(){
		$('.logo__arrow').removeClass('shake-constant--hover shake-slow shake-constant')
	},3000);
});