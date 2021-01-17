$(function () {
  if (location.pathname.match("/")) {
    $('.js-click-animation').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.js-open');
      $clickMenu.toggleClass('active');
      $openMenu.toggleClass('open');
    });
  };
});
