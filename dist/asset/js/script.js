!function(){const e=document.querySelector('meta[name="viewport"]');function s(){var s=360<window.outerWidth?"width=device-width,initial-scale=1":"width=360";e.getAttribute("content")!==s&&e.setAttribute("content",s)}addEventListener("resize",s,!1),s()}();const setFillHeight=()=>{var s=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",s+"px")};let vw=window.innerWidth;window.addEventListener("resize",()=>{vw!==window.innerWidth&&(vw=window.innerWidth,setFillHeight())}),setFillHeight(),$(".js-hamburger").click(function(){$(this).toggleClass("is-show"),$(".js-gnav").toggleClass("is-show"),$(".js-gnav-mask").toggleClass("is-show")}),jQuery(document).ready(function(s){var e=s(".js-gnav");s(".js-gnav-mask").click(function(){e.hasClass("is-show")&&(s(".js-hamburger").removeClass("is-show"),s(".js-gnav").removeClass("is-show"),s(".js-gnav-mask").removeClass("is-show"))})}),$(window).on("resize",function(){$(".js-hamburger");window.matchMedia("(min-width:768px)").matches&&($(".js-hamburger").removeClass("is-show"),$(".js-gnav").removeClass("is-show"),$(".js-gnav-mask").removeClass("is-show"))}),$(function(){$(".js-slider").slick({arrows:!0,autoplay:!0,autoplaySpeed:2e3,centerMode:!0,centerPadding:"25%",dots:!0,dotsClass:"slide-dots",slidesToShow:1,speed:400,prevArrow:'<img src="./asset/img/slide-prev.svg" class="slide-arrow prev-arrow">',nextArrow:'<img src="./asset/img/slide-next.svg" class="slide-arrow next-arrow">',responsive:[{breakpoint:1024,settings:{centerMode:!0,centerPadding:"30px",slidesToShow:1}}]})}),$(function(){const s=$(".js-scroll-top");s.hide(),$(window).scroll(function(){200<$(this).scrollTop()?s.fadeIn():s.fadeOut()}),s.click(function(){return $("body,html").animate({scrollTop:0},50),!1})}),$(window).width()<1024||$(document).ready(function(){$(".js-scroll-top").hide(),$(window).on("scroll",function(){scrollHeight=$(document).height(),scrollPosition=$(window).height()+$(window).scrollTop(),footHeight=$(".l-footer").innerHeight(),scrollHeight-scrollPosition<=footHeight?$(".js-scroll-top").css({position:"absolute",bottom:footHeight+40}):$(".js-scroll-top").css({position:"fixed",bottom:"20px"})})});