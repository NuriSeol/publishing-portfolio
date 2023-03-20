//00. a클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]',function(e){
  e.preventDefault();
});


// 로딩
var _showPage = function() {
  var loader = $("div.loader");
  var container = $("div.wrap");
  loader.css("display","none");
  container.css("display","block");
};


//5.햄버거메뉴
$(function(){
  $('.menuOpen button.open ').on('click', function(){
      $('.menuOpen .menuWrap').addClass('on');
  });
  $('.menuOpen .menuWrap .close').on('click', function(){
      $('.menuOpen .menuWrap').removeClass('on');
  })
});


// header 스크롤방향이벤트
$(function() {
  var prevScrollTop = 0;
  document.addEventListener("scroll", function(){
      
      var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
      
      if (nowScrollTop > prevScrollTop){ $('header').addClass('active'); } 
      // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
      else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
      prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
  });
});
// addEventListener()는 document의 특정요소(Id,class,tag 등등..) event(ex - click하면 함수를 실행하라, 마우스를 올리면 함수를 실행하라 등등.. )를 등록할 때 사용합니다.

// header 스크롤방향이벤트
$(function() {
  var prevScrollTop = 0;
  document.addEventListener("scroll", function(){
      
      var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
      
      if (nowScrollTop > prevScrollTop){ $('.menuOpen .open').addClass('active'); } 
      // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
      else { $('.menuOpen .open').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
      prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
  });
});

// Scroll animaition
$(function(){
  $('.animate').scrolla({
      mobile: true,  // 모바일버전시 활성화
      once: false // 스크롤시 딱 한번만 하고 싶을 땐 true
  });
});