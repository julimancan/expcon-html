$(document).ready(function () {
  $(".mouse_hover_area").mousemove(function (event) {
    var top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    var left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse").css({ left: left - 100, top: top - 100 });
  });
  $(".mouse_hover_area_red").mousemove(function (event) {
    var top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    var left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse_red").css({ left: left + 200, top: top + 140 });
  });
});
