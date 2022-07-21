/*--------------------------------
	360px未満はviewportを固定
--------------------------------*/
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 360 ? "width=device-width,initial-scale=1" : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

/*--------------------------------
	iosでも100vhで画面いっぱいに表示
--------------------------------*/
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

let vw = window.innerWidth;

window.addEventListener("resize", () => {
  if (vw === window.innerWidth) {
    // 画面の横幅にサイズ変動がないので処理を終える
    return;
  }

  // 画面の横幅のサイズ変動があった時のみ高さを再計算する
  vw = window.innerWidth;
  setFillHeight();
});

// 初期化
setFillHeight();

/*--------------------------------
	ハンバーガーメニューの設定
--------------------------------*/
$(".js-hamburger").click(function () {
  //ハンバーガーがクリックされたら
  $(this).toggleClass("is-show"); //ハンバーガー自身にis-showクラスを付与
  $(".js-gnav").toggleClass("is-show"); //ハンバーガー自身にis-showクラスを付与
  $(".js-gnav-mask").toggleClass("is-show"); //ハンバーガー自身にis-showクラスを付与
});

/*------ 画面外をクリックしたときの処理 -------*/
jQuery(document).ready(function ($) {
  var nav = $(".js-gnav");
  $(".js-gnav-mask").click(function () {
    //画面外がクリックされたら
    if (nav.hasClass("is-show")) {
      //メニューにis-show-doneがあるか判別し
      $(".js-hamburger").removeClass("is-show"); //メニューのis-showを削除
      $(".js-gnav").removeClass("is-show"); //メニューのis-showを削除
      $(".js-gnav-mask").removeClass("is-show"); //アイコンのis-showを削除
    }
  });
});

/*------ リサイズしたときの処理 -------*/
$(window).on("resize", function () {
  let hamburger = $(".js-hamburger");
  if (window.matchMedia("(min-width:768px)").matches) {
    $(".js-hamburger").removeClass("is-show"); //表示されているメニューを非表示
    $(".js-gnav").removeClass("is-show"); //表示されているメニューを非表示
    $(".js-gnav-mask").removeClass("is-show"); //表示されているマスクを非表示
  }
});

/*--------------------------------
	スライダー
--------------------------------*/
$(function () {
  $(".js-slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "25%",
    dots: true,
    dotsClass: "slide-dots",
    slidesToShow: 1,
    speed: 400,
    prevArrow: '<img src="./asset/img/slide-prev.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./asset/img/slide-next.svg" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

/*--------------------------------
    スクロールトップボタン
--------------------------------*/
$(function () {
  const pageTop = $(".js-scroll-top");
  pageTop.hide(); // 最初はボタンを非表示にする
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      // 200pxスクロールしたら
      pageTop.fadeIn(); // ボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 200px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, // 上から0pxの位置に戻る
      },
      50 // 50ミリ秒かけて戻る
    );
    return false;
  });
});

// footer手前で止める
if ($(window).width() < 1024) {
  //sp
  // 何もしない
} else {
  //pc
  $(document).ready(function () {
    $(".js-scroll-top").hide();
    $(window).on("scroll", function () {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $(".l-footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $(".js-scroll-top").css({ position: "absolute", bottom: footHeight + 40 }); //フッターの手前何pxで止めるか
      } else {
        $(".js-scroll-top").css({ position: "fixed", bottom: "20px" }); //表示された時の位置
      }
    });
  });
}
