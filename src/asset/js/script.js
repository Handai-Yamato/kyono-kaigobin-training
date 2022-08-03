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
//swiper
const swiper = new Swiper(".js-swiper", {
  // ドットを追加
  pagination: {
    el: ".swiper-pagination",
    clickable: true, //クリックでスライドを有効化
  },
  // 前後ナビを追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //スライドの方向を設定
  direction: "horizontal", //horizontalで水平 verticalで垂直

  /* fade */
  // effect: 'coverflow',

  /* card */
  // grabCursor: true,
  // effect: "cards",

  /* creative */
  // grabCursor: true,
  // effect: "creative",
  // creativeEffect: {
  //   //transformプロパティを設定可能
  //   prev: {
  //     // 表示しているスライドの移動先
  //     translate: [0, 0, -400], // translateをX,Y,Zで指定
  //     origin: "left center",
  //     translate: ["-5%", 0, -200],
  //     rotate: [0, 100, 0],
  //   },
  //   next: {
  //     // 次に表示されるスライドの設定
  //     translate: ["100%", 0, 0],
  //     origin: "right center",
  //     translate: ["-5%", 0, -200],
  //     rotate: [0, -100, 0],
  //   },
  // },

  // 事前の画像読み込み
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },

  //
  
  // activeなスライダーのクラス名変更
  slideActiveClass: "specify-active-class",
  
  //スライドのループを設定
  loop: true, //trueでループ falseでループしない(スライドが１枚の場合コントロールを表示させない場合はfalse)
  loopAdditionalSlides: 1,// 無限ループさせる場合に複製するスライド数

  //両端見切れ状態にするかどうか
  centeredSlides: true, //slidePerViewが３以上の場合、１枚目がセンタリングされる

  //一度に表示するスライドの数を設定
  slidesPerView: 1.1,

  //スライドのスピードを設定
  speed: 1000, //流し続ける場合は基本的に5000以上に設定

  //自動スライドを設定
  autoplay: {
    delay: 4000, //自動スライドの秒数
    disableOnInteraction: false, //スライドクリックで自動スライドを停止させるか設定
    reverseDirection: false, // trueで逆方向にスライド
  },

  //一度のスライドでいくつコンテンツをスライドさせるか
  slidesPerGroup: 1,

  //1画面で見えるスライド数を指定します。autoにして常にスライドが見える
  spaceBetween: 1,

  //スワイプでスライドを有効化
  allowTouchMove: false, // falseで無効化 流し続ける場合はfalse

  //スライド同士の余白を設定
  spaceBetween: 10, //数字のみ記述可能。単位はpxが出力される

  //スライドが１枚の場合はコントロールを非表示
  watchOverflow: true,

  //スライド切り替え中は別のスライドへの切り替えを無効にする
  preventInteractionOnTransition: true,

  //メディアクエリ
  breakpoints: {
    // ウィンドウサイズが600px以下
    0: {
      slidesPerView: 1.0,
    },
    768: {
      slidesPerView: 1.0,
      centeredSlides: false,
    },
    1400: {
      slidesPerView: 1.0,
    },
  },
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
