
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

if($('.header').hasClass("header--empty")) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.header').removeClass("header--empty");
		} else {
			$('.header').addClass("header--empty");
			
		}
	})
}
 
	

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJidG4vYnRuLmpzIiwiaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwidmFyIGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbihlKSB7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQ7XHJcbiAgLy9yZXNldCBhbmltYXRpb25cclxuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICB9LDcwMCk7XHJcbn07XHJcblxyXG52YXIgYnViYmx5QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidWJibHktYnV0dG9uXCIpO1xyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidWJibHlCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFuaW1hdGVCdXR0b24sIGZhbHNlKTtcclxufSIsIiQoJy5qcy1oZWFkZXJfX3N3aXRjaCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5oZWFkZXJfX3N3aXRjaCcpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX3N3aXRjaC0tb3BlbicpO1xyXG5cdCQoJy5oZWFkZXJfX2lubmVyJykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9faW5uZXItLW9wZW4nKTtcclxufSk7XHJcblxyXG4kKCcuaGVhZGVyX19uYXYtaXRlbSBhJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5oZWFkZXJfX3N3aXRjaCcpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX3N3aXRjaC0tb3BlbicpO1xyXG4gICAkKCcuaGVhZGVyX19pbm5lcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX2lubmVyLS1vcGVuJyk7XHJcbn0pO1xyXG5cclxuaWYoJCgnLmhlYWRlcicpLmhhc0NsYXNzKFwiaGVhZGVyLS1lbXB0eVwiKSkge1xyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuXHRcdFx0JCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKFwiaGVhZGVyLS1lbXB0eVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJy5oZWFkZXInKS5hZGRDbGFzcyhcImhlYWRlci0tZW1wdHlcIik7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuIFxyXG5cdFxyXG4iXX0=
