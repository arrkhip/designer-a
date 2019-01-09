
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
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
 
	

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJidG4vYnRuLmpzIiwiaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsInZhciBhbmltYXRlQnV0dG9uID0gZnVuY3Rpb24oZSkge1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0O1xyXG4gIC8vcmVzZXQgYW5pbWF0aW9uXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gIFxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgfSw3MDApO1xyXG59O1xyXG5cclxudmFyIGJ1YmJseUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnViYmx5LWJ1dHRvblwiKTtcclxuXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgYnViYmx5QnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gIGJ1YmJseUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbmltYXRlQnV0dG9uLCBmYWxzZSk7XHJcbn0iLCIkKCcuanMtaGVhZGVyX19zd2l0Y2gnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX19zd2l0Y2gnKS50b2dnbGVDbGFzcygnaGVhZGVyX19zd2l0Y2gtLW9wZW4nKTtcclxuXHQkKCcuaGVhZGVyX19pbm5lcicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX2lubmVyLS1vcGVuJyk7XHJcbn0pO1xyXG5cclxuJCgnLmhlYWRlcl9fbmF2LWl0ZW0gYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaGVhZGVyX19zd2l0Y2gnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19zd2l0Y2gtLW9wZW4nKTtcclxuICAgJCgnLmhlYWRlcl9faW5uZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyX19pbm5lci0tb3BlbicpO1xyXG59KTtcclxuXHJcblxyXG4kKCcuanMtaGVhZGVyX19zb2NpYWwtc3dpdGNoJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JCgnLmhlYWRlcl9fc29jaWFsLWljb24gc3ZnJykuZmFkZVRvZ2dsZSgpO1xyXG5cdCQoJy5oZWFkZXJfX3NvY2lhbC1saXN0JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fc29jaWFsLWxpc3QtLW9wZW4nKTtcclxufSk7XHJcblxyXG5cclxuJCgnYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn0pO1xyXG4gXHJcblx0XHJcbiJdfQ==
