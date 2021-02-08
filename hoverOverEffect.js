//  using jQuery to find the mouse movement over the .mouse_hover_area in the yellow section and apply the corresponding css styles to the mouse element
$(document).ready(function () {
  $(".mouse_hover_area").mousemove(function (event) {
    let top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    let left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
    $(".mouse").css({ left: left - 100, top: top - 100 });
  });

  //  using jQuery to find the mouse movement over the .mouse_hover_area in the red sections and apply the corresponding css styles to the mouse element
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
