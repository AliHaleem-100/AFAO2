const header = document.querySelector("header")

// events
window.addEventListener("DOMContentLoaded", update);
window.addEventListener("resize", update);

function update() {
  hero.contentToCenter()
  trustBar.update();
}

// hero section
const hero = {
  heroContent: document.querySelector(".hero-content"),

  contentToCenter() {
    if (trustBar.mobileMode) return this.heroContent.style.marginTop = 0;
    this.heroContent.style.marginTop = `-${trustBar.halfHeight}px`
  }
}

// trust bar 
const trustBar = {
  item: document.querySelector(".trust-bar"),
  get mobileMode() { return innerWidth <= 992 ? true : false },

  get halfHeight() { return this.item.clientHeight / 2 },

  update() {
    if (this.mobileMode) return this.item.style.marginTop = 0;
    this.item.style.marginTop = `-${this.halfHeight}px`;
  }
}


// slider 
let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


