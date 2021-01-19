$(function() {
    var $window = $(window),
        $clone = $('.header-clone'),
        threshold = 0.1;
  
        $window.on('scroll',function(){
          if($window.scrollTop() > threshold) {
            $clone.fadeIn();
          }else{
            $clone.fadeOut();
          }
        }
    );
  }
);

$(function(){　//ページの内容（HTMLやCSSなど）を全て読み込み準備が整ったら実行
$('.btnHamburger').on('click', function(){　//.btnHamburgerがクリックされた時の処理
    $(this).toggleClass('is-active');　//.is-activeを付ける・外す
    $(".drawer-menu").fadeToggle(300)("open");
});
});

$(function() {
$(".drawer-bg,.drawer-menu a").on("click", function() {
    $(".drawer-menu").fadeOut(300);
    $(".btnHamburger").removeClass("is-active");
});
});

$(function() {
$(".reservation-btn,.reserve").on("click", function() {
    $("#modal").fadeIn(300);
});
});

$(function() {
$("#drawer-bg").on("click", function() {
    $("#modal").fadeOut(300);
});
});

$(function() {
$("#close-btn").on("click", function() {
    $("#modal").fadeOut(300);
});
});

$(function() {
$("#modal-bg").on("click", function() {
    $("#modal").fadeOut(300);
});
});
