$(document).ready(function() {
  $(".mouse_hover_area").mousemove(function(event) {
    var top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    var left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse").css({"left":left - 150, "top":top -150});
  });
});