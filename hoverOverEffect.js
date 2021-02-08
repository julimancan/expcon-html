$(document).ready(function () {
  $(".mouse_hover_area").mousemove(function (event) {
    let top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    let left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse").css({ left: left - 100, top: top - 100 });
  });

  $(".mouse_hover_area_red_right").mousemove(function (event) {
    let top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    let left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse_red_right").css({ left: left + 400, top: top + 190 });
  });
  $(".mouse_hover_area_red_left").mousemove(function (event) {
    let top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    let left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse_red_left").css({ left: left + 0, top: top + 190 });
  });
});
