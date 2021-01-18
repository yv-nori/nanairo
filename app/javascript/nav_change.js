$(function () {
  if (location.pathname.match("/")) {
    // メニュー表示のアニメーション
    $('.js-click-animation').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.js-open');
      $clickMenu.toggleClass('active');
      $openMenu.toggleClass('open');
    });
    // スクロールの時のメニューアニメーション
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        const $scrollMenu = $('.js-sticky');
        $scrollMenu.addClass('sticky')
      } else {
        const $scrollMenu = $('.js-sticky');
        $scrollMenu.removeClass('sticky')
      };
    });
  }
});


// // Mobile Navigation
// $('.mobile-toggle').click(function() {
//     if ($('.main_h').hasClass('open-nav')) {
//         $('.main_h').removeClass('open-nav');
//     } else {
//         $('.main_h').addClass('open-nav');
//     }
// });

// $('.main_h li a').click(function() {
//     if ($('.main_h').hasClass('open-nav')) {
//         $('.navigation').removeClass('open-nav');
//         $('.main_h').removeClass('open-nav');
//     }
// });

// // navigation scroll lijepo radi materem
// $('nav a').click(function(event) {
//     var id = $(this).attr("href");
//     var offset = 70;
//     var target = $(id).offset().top - offset;
//     $('html, body').animate({
//         scrollTop: target
//     }, 500);
//     event.preventDefault();
// });
