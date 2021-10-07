$(function () {
  $(document).scroll(function () {
    var $nav = $('.fixed-top');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('shadow-sm', $(this).scrollTop() > $nav.height());
  });
});
