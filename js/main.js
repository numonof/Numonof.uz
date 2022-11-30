const toggle = document.querySelector("#toggle");
const navbar = document.querySelector("#navbar");
const header = document.querySelector("#header");

document.onclick = function (e) {
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        // console.log(toggle);
        // console.log(navbar);
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}
// console.log(toggle);

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide:'true',
  fade:'true',
  gragCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView:1,   
      },
      576:{
          slidesPerView:2,   
      },
      768:{
          slidesPerView:2,   
      },
      992:{
          slidesPerView:3,   
      },
      1240 :{
          slidesPerView:4, 
      }
  }
});

var acardion = document.getElementsByClassName('contenctBx');
for ( i = 0; i < acardion.length; i++) {
    acardion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}