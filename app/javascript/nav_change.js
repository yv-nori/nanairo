$(function () {
  if (location.pathname.match("/")) {
    $('.js-click-animation').on('click', function () {
      var $this = $(this);
      $this.toggleClass('active');
      console.log("a")
    });
  };
});
