if(window.innerWidth < 1200) {
  new Swiper(".swiper-container",{
      direction: "horizontal",
      centeredSlides: true,
      slidesPerView: 'auto',
      paginationClickable: !0,
      spaceBetween: 0,
      autoplay: 1500,
      loop: !0,
      observer: true,
      observeParents: true,
  })
} else {
  new Swiper(".swiper-container",{
      direction: "horizontal",
      centeredSlides: true,
      slidesPerView: '3',
      parallax: !0,
      paginationClickable: !0,
      spaceBetween: 50,
      speed: 1500,
      parallax: !0,
      autoplay: 1500,
      loop: !0,
      observer: true,
      observeParents: true,
  })
}

