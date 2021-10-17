$(function () {
  $(document).scroll(function () {
    var $nav = $('.fixed-top');
    $nav.toggleClass('shadow-sm', $(this).scrollTop() > $nav.height());
  });
});
