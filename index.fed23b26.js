!function(){var e,t,n,o,c,a,i;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".nav-mob__link"),a=document.querySelector(".btn__open-modal"),i=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},c.forEach((function(e){return e.addEventListener("click",i)})),a.addEventListener("click",i),n.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),window.addEventListener("load",(function(){var e=document.querySelectorAll('[data-slider="reviews-slider"]');e&&e.forEach((function(e){var t=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){var t=this.previousIndex,n=e.getElementsByClassName("swiper-slide")[t];n&&setTimeout((function(){n.classList.remove("is-play")}),1e3)},transitionEnd:function(){var t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1)}();
//# sourceMappingURL=index.fed23b26.js.map
