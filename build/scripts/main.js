
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJidG4vYnRuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwidmFyIGFuaW1hdGVCdXR0b24gPSBmdW5jdGlvbihlKSB7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQ7XHJcbiAgLy9yZXNldCBhbmltYXRpb25cclxuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICB9LDcwMCk7XHJcbn07XHJcblxyXG52YXIgYnViYmx5QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidWJibHktYnV0dG9uXCIpO1xyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidWJibHlCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgYnViYmx5QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFuaW1hdGVCdXR0b24sIGZhbHNlKTtcclxufSJdfQ==
