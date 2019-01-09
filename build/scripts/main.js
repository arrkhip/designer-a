 $('.parallax').scrolly();
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
 
	

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJidG4vYnRuLmpzIiwiaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAkKCcucGFyYWxsYXgnKS5zY3JvbGx5KCk7IiwidmFyIGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbihlKSB7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQ7XHJcbiAgLy9yZXNldCBhbmltYXRpb25cclxuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICB9LDcwMCk7XHJcbn07XHJcblxyXG52YXIgYnViYmx5QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidWJibHktYnV0dG9uXCIpO1xyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidWJibHlCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFuaW1hdGVCdXR0b24sIGZhbHNlKTtcclxufSIsIiQoJy5qcy1oZWFkZXJfX3N3aXRjaCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5oZWFkZXJfX3N3aXRjaCcpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX3N3aXRjaC0tb3BlbicpO1xyXG5cdCQoJy5oZWFkZXJfX2lubmVyJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9faW5uZXItLW9wZW4nKTtcclxufSk7XHJcblxyXG4kKCcuaGVhZGVyX19uYXYtaXRlbSBhJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5oZWFkZXJfX3N3aXRjaCcpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX3N3aXRjaC0tb3BlbicpO1xyXG4gICAkKCcuaGVhZGVyX19pbm5lcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX2lubmVyLS1vcGVuJyk7XHJcbn0pO1xyXG5cclxuXHJcbiQoJy5qcy1oZWFkZXJfX3NvY2lhbC1zd2l0Y2gnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX19zb2NpYWwtaWNvbiBzdmcnKS5mYWRlVG9nZ2xlKCk7XHJcblx0JCgnLmhlYWRlcl9fc29jaWFsLWxpc3QnKS50b2dnbGVDbGFzcygnaGVhZGVyX19zb2NpYWwtbGlzdC0tb3BlbicpO1xyXG59KTtcclxuXHJcblxyXG4kKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0dmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG5cdHJldHVybiBmYWxzZTtcclxufSk7XHJcbiBcclxuXHRcclxuIl19
