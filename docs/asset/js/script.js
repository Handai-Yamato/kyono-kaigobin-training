!function(){const s=document.querySelector('meta[name="viewport"]');function e(){var e=360<window.outerWidth?"width=device-width,initial-scale=1":"width=360";s.getAttribute("content")!==e&&s.setAttribute("content",e)}addEventListener("resize",e,!1),e()}(),$(".js-hamburger").click(function(){$(this).toggleClass("is-show"),$(".js-gnav").toggleClass("is-show"),$(".js-gnav-mask").toggleClass("is-show")}),jQuery(document).ready(function(e){var s=e(".js-gnav");e(".js-gnav-mask").click(function(){s.hasClass("is-show")&&(e(".js-hamburger").removeClass("is-show"),e(".js-gnav").removeClass("is-show"),e(".js-gnav-mask").removeClass("is-show"))})}),$(window).on("resize",function(){$(".js-hamburger");window.matchMedia("(min-width:768px)").matches&&($(".js-hamburger").removeClass("is-show"),$(".js-gnav").removeClass("is-show"),$(".js-gnav-mask").removeClass("is-show"))});const swiper=new Swiper(".js-swiper",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},direction:"horizontal",preloadImages:!1,lazy:{loadPrevNext:!0},slideActiveClass:"specify-active-class",loop:!0,loopAdditionalSlides:1,centeredSlides:!0,slidesPerView:1.1,speed:1e3,autoplay:{delay:4e3,disableOnInteraction:!1,reverseDirection:!1},slidesPerGroup:1,spaceBetween:10,allowTouchMove:!1,watchOverflow:!0,preventInteractionOnTransition:!0,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1,centeredSlides:!1},1400:{slidesPerView:1}}});$(function(){const e=$(".js-scroll-top");e.hide(),$(window).scroll(function(){200<$(this).scrollTop()?e.fadeIn():e.fadeOut()}),e.click(function(){return $("body,html").animate({scrollTop:0},50),!1})}),$(window).width()<1024||$(document).ready(function(){$(".js-scroll-top").hide(),$(window).on("scroll",function(){scrollHeight=$(document).height(),scrollPosition=$(window).height()+$(window).scrollTop(),footHeight=$(".l-footer").innerHeight(),scrollHeight-scrollPosition<=footHeight?$(".js-scroll-top").css({position:"absolute",bottom:footHeight+40}):$(".js-scroll-top").css({position:"fixed",bottom:"20px"})})});