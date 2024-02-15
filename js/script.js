$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    1100: {
      items: 5,
    },
  },
});

var trigger = document.getElementById("toggle");
var box = document.getElementById("menu");

toggle.addEventListener("click", function () {
  box.classList.toggle("active");
});
