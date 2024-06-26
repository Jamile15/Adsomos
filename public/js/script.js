// script.js

const navBar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("show-menu");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    autoplay: false, 
    autoplayHoverPause: true,
    autoplaySpeed: 1000, 
    dots: true, 
    responsive: {
      0: {
        items: 1,
        autoplay: true // Ativa o autoplay em dispositivos móveis
      },
      768: {
        items: 2,
        nav: true, // Adiciona as setas de navegação em desktop
        autoplay: false // Desativa o autoplay em desktop
      }
    }
  });
});
