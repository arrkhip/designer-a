$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__inner').toggleClass('header__inner--open');
});

$('.header__nav-item a').click(function() {
   $('.header__switch').removeClass('header__switch--open');
   $('.header__inner').removeClass('header__inner--open');
});


$('.js-header__social-switch').click(function() {
	$('.header__social-icon svg').fadeToggle();
	$('.header__social-list').toggleClass('header__social-list--open');
});


$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 500);
	return false;
});
 
	
