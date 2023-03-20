// splitting 
$(function(){Splitting();}) 

$(function(){
  gsap.timeline ({ //시간순서에 따라 이벤트가 진행될 수 있도록 만들어줌
    scrollTrigger: {
      trigger: '.brain', //트리거 대상
      start: '0% 80%', //트리거 대상의 시작지점, 브라우저 화면의 시작지점
      end: '100% 100%', //트리거 대상의 끝나는 지점, 브라우저 화면의 끝나는 지점
      scrub: 1, //되감기
      // markers: true //시작위치 끝위치 확인가능한 마크업
    }
  })
  .to('.wrap', {backgroundColor:'#fff', color:"#000", ease: "none", duration:5},0)
  .to('header', {color:"#000", ease: "none", duration:5},0)


  gsap.timeline({
    scrollTrigger: {
      trigger: '.concept',
      start: '0% 100%',
      end: '0% 20%',
      scrub: 1,
      // markers: true
    }
  })
  
  // 화면이 다시 검정색으로 바뀌고 글씨 흰색으로 변경
  .to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
  .to('header', {color:'#fff', ease: "none", duration:5},0)


  gsap.timeline ({ //시간순서에 따라 이벤트가 진행될 수 있도록 만들어줌
    scrollTrigger: {
      trigger: '.architecture', //트리거 대상
      start: '0% 80%', //트리거 대상의 시작지점, 브라우저 화면의 시작지점
      end: '100% 100%', //트리거 대상의 끝나는 지점, 브라우저 화면의 끝나는 지점
      scrub: 1, //되감기
      // markers: true //시작위치 끝위치 확인가능한 마크업
    }
  })
  .to('.wrap', {backgroundColor:'#fff', color:"#000", ease: "none", duration:5},0)
  .to('header', {color:"#000", ease: "none", duration:5},0)


  gsap.timeline({
    scrollTrigger: {
      trigger: '.index',
      start: '0% 100%',
      end: '0% 20%',
      scrub: 1,
      // markers: true
    }
  })
  
  // 화면이 다시 검정색으로 바뀌고 글씨 흰색으로 변경
  .to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
  .to('header', {color:'#fff', ease: "none", duration:5},0)
});


$('.sketch_swiper').slick({
  slide: 'li',        //슬라이드 되어야 할 태그
  infinite: true,
  speed: 250,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  autoplay : true,            // 자동 스크롤 사용 여부
  autoplaySpeed : 3000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
  pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
});
