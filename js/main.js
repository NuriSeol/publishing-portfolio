// .greeting이 보이면, .wrap배경 흰색 변경과 / 글씨컬러가 검정으로 변경
//.gsap.to() 메서드는 움직임이 끝나는 점을 지정하는 애니메이션 -> gsap.to("타겟", {속성: 속성값,...})
$(function(){
  gsap.timeline ({
    scrollTrigger: {
      trigger: '.greeting', 
      start: '0% 80%', //트리거 대상의 시작지점, 브라우저 화면의 시작지점
      end: '100% 100%', //트리거 대상의 끝나는 지점, 브라우저 화면의 끝나는 지점
      scrub: 1, //되감기
      // markers: true //시작위치 끝위치 확인가능한 마크업
    }
  })
  .to('.wrap', {backgroundColor:'#fff', color:"#000", ease: "none", duration:5},0)
  .to('header', {color:"#000", ease: "none", duration:5},0)


  .fromTo('.greeting .greet_txt p.a', {x: '-100%'}, {x: '0', ease:'none', duration:5},0)
  .fromTo('.greeting .greet_txt p.b', {x: '100%'}, {x: '0', ease:'none', duration:5},0)
  .fromTo('.greeting .greet_txt p.c', {x: '-100%'}, {x: '0', ease:'none', duration:5},0)


//  카드
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// gsap -> My Work 모션
// start/ end 타임에 맞춘 기준: My work 글씨가 화면에 보이자 마자 글씨가 모이면서 글씨가 중앙으로 왔을 때 종료
gsap.timeline({
  scrollTrigger: {
    trigger: '.work',
    start: '0% 0%',
    end: '0% 20%',
    scrub: 1,
    // markers: true
  }
})

// 화면이 다시 검정색으로 바뀌고 글씨 흰색으로 변경
.to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5},0)
.to('header', {color:'#fff', ease: "none", duration:5},0)


// .work .title a와 b가 서로 반대에서 제자리로 돌아오도록!
.fromTo('.work .title .a', {x: '-100%'}, {x: '0', ease:'none', duration:5},0)
.fromTo('.work .title .b', {x: '100%'}, {x: '0', ease:'none', duration:5},0)

// title을 포지션 픽스해서 workList가 진행되는 동안 스크롤 할 때 고정되도록 해준다
.to('.work .title', {position: 'fixed', ease: 'none', left:'0', top:'0', width: '100%', duration:5},0)
// title포지션 픽스 때문에 갑자기 title의 높이값이 상실되어 애니가 부자연스럽다. 그래서 workList에 margin-top과 위에 둥둥 떠있는 느낌을 주기 위해 z-index를 준다
.fromTo('.workList', {margin: '0 auto'}, {margin: '100vh auto 0', position:'relative', zIndex:'10', duration:1},0)

// workList가 거의 끝나는 부분에서 my Work 글자가 화면 밖으로 사라지게   
// start/end 타이밍 맞춘지점 -> workList가 거의 끝나는 부분에 My work 글씨가 밖으로 사라지도록
gsap.timeline({
  scrollTrigger: {
    trigger:'.workList',
    start:'100% 50%', //100%(workList) 50%(viewpoint)
    end:'100% 0%',
    scrub:1,
    // markers:true
  }
})

// .work .title a와 b가 원래대로 서로 반대방향을 화면 밖으로 사라지게 해준다.
.to ('.work .title .a', {x: '-100%', ease: 'none', duration: 5}, 0)
.to ('.work .title .b', {x: '100%', ease: 'none', duration: 5}, 0)
});


// simplyScroll -> skill영역 배너
$(function(){
  $('.skill .list').simplyScroll({
      speed: 4,
      pauseOnHover : false,
      pauseOnTouch : false
  })
})







