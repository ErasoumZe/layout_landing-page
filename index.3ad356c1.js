document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".nav__link"),t=document.getElementById("close-menu"),n=document.getElementById("menu"),o=document.querySelector(".page");function c(){n.classList.remove("menu--open"),o.style.overflow="auto"}e.forEach(function(e){e.addEventListener("click",function(e){c();var t=this.getAttribute("href").substring(1),n=document.getElementById(t);n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})})}),t.addEventListener("click",c),document.querySelector(".icon--menu").addEventListener("click",function(){n.classList.toggle("menu--open")})});
//# sourceMappingURL=index.3ad356c1.js.map
