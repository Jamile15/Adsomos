// script.js

const navBar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("show-menu");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });
});
