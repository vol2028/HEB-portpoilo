$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
 
    anchors: ['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage','sixthPage','thPage','5Page','6Page'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['Home', 'aboutme', 'Web(더본코리아)','Web(일진머터리얼즈)','Web(아더에러)','Web(한국로슈)','Mobile(청첩장)','grapic'],
    navigationPosition: 'right',

    //methods
    // 페이지 진입시
    afterLoad: function (anchorLink, index) {
      console.log(index);
      if(index == 3) {
        $('#section3 > div').append('<p>원대한 꿈에 도약합니다!</p>');
        $('#rocket').addClass('play');
      } else { $('#rocket').removeClass('play'); }
    }
  });

});


//슬라이드 제이쿼리

new Swiper('.swiper-container', {

  slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
  spaceBetween : 30, // 슬라이드간 간격
  slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
  // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
  loopFillGroupWithBlank : true,

  loop : true, // 무한 반복

  pagination : { // 페이징
    el : '.swiper-pagination',
    clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  navigation : { // 네비게이션
    nextEl : '.swiper-button-next', // 다음 버튼 클래스명
    prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
  },
});



//모달팝업창

$(document).ready(function( $ ){     
  $(".openPopup").on("click", function(event) {  //팝업오픈 버튼 누르면
  $("#popup01").show();   //팝업 오픈
  $("body").append('<div class="backon"></div>'); //뒷배경 생성
  });
  
  $("body").on("click", function(event) { 
      if(event.target.className == 'close' || event.target.className == 'backon'){
          $("#popup01,#popup2").hide(); //close버튼 이거나 뒷배경 클릭시 팝업 삭제
            $(".backon").hide();
      }
    });

});