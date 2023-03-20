// splitting 
$(function(){Splitting();}) 

// .greeting이 보이면, .wrap배경 흰색 변경과 / 글씨컬러가 검정으로 변경
$(function(){
  gsap.timeline ({ //시간순서에 따라 이벤트가 진행될 수 있도록 만들어줌
    scrollTrigger: {
      trigger: '.greeting', //트리거 대상
      start: '0% 80%', //트리거 대상의 시작지점, 브라우저 화면의 시작지점
      end: '100% 100%', //트리거 대상의 끝나는 지점, 브라우저 화면의 끝나는 지점
      scrub: 1, //되감기
      // markers: true //시작위치 끝위치 확인가능한 마크업
    }
  })

  .fromTo('.greeting .greet_txt p.a', {x: '-100%'}, {x: '0', ease:'none', duration:5},0)
  .fromTo('.greeting .greet_txt p.b', {x: '100%'}, {x: '0', ease:'none', duration:5},0)
  .fromTo('.greeting .greet_txt p.c', {x: '-100%'}, {x: '0', ease:'none', duration:5},0)

});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.visual',
  pin: true, 
})

// visual img 스케일 애니메이션
gsap.to('.visual .img', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.visual .img',
    start: "top  top", // 시작위치
    end:'bottom top',
    // markers:true,
    scrub: 1, // 모션바운스
  }
})



//  카드
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

//04. strength영역
$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();

  fix();
  fixHeader();
  fixList();

  function fix(){
    if(scrollPos > 4705){
      $('.fix .text').addClass('on')
    } else {
      $('.fix .text').removeClass('on')
    }
    if(scrollPos > 2700){
      $('.fix .text').removeClass('on')
    }
  }

  function fixHeader(){
    if(scrollPos > 80){
      $('header').addClass('on')
    } else {
      $('header').removeClass('on')
    }
  }

  function fixList(){
    $('section.approach .inner .list li a').removeClass('on'); //먼저 on클래스 지우고 시작

    if(scrollPos > 1250){
    $('section.approach .inner .list li a').removeClass('on'); //먼저 on클래스 지우고 시작
    $('section.approach .inner .list li:eq(0) a').addClass('on'); //eq(0) 리스트의 (0)번 index를 가져오는 것
    }
    if(scrollPos > 1650){
      $('section.approach .inner .list li a').removeClass('on');
      $('section.approach .inner .list li:eq(1) a').addClass('on'); 
    }
    if(scrollPos > 2050){
      $('section.approach .inner .list li a').removeClass('on'); 
      $('section.approach .inner .list li:eq(2) a').addClass('on'); 
    }
    if(scrollPos > 2550){
      $('section.approach .inner .list li a').removeClass('on'); 
      $('section.approach .inner .list li:eq(3) a').addClass('on');
    }
    if(scrollPos > 2900){
      $('section.approach .inner .list li a').removeClass('on'); //떠날 때 on클래스 없애기
    }
  }
});


// gsap -> skill x스크롤 사용
let list = gsap.utils.toArray(".skill .slide li") ; //배열로 저장하기

let scrollTween2 = gsap.to(list, {
  xPercent: -100 * (list.length -1), //총길이 -1에 -100곱하기(이 부분이 움직이게 해줌)
  ease: 'none', //같은 속도
  scrollTrigger: {
    trigger: ".skill", //대상
    pin: true, //고정
    scrub: 1, //부드러운 진행
    end: "100%",
    // markers: true
  }
});

// svg길이 구하기
// $(function(){
//   $('.svgAni').find('.st3').each(function(i, path){
//       var length = path.getTotalLength();
//       alert(length);  
//   });
// });




