/*
  팝업창 오픈, 팝업창 닫히면 현재 상태 확인 
*/ 
var childWindow;

function openChildWindow(a,b,c) {

  childWindow = window.open(a,b,c);   // 창의 크기와 위치를 지정하여 자식 창 열기

 
  var interval = setInterval(function() {
    if (childWindow.closed) {         // 일정 시간 간격으로 자식 창이 닫혔는지 확인
          clearInterval(interval);      // interval 제거
        window.location.reload(true); // 부모 창 새로고침
    }
  }, 1000); // 1초마다 확인
}

// 팝업창 닫기
$('.close-btn').click(function(){
  window.close();
});



/*
  자동차 선택 애니메이션, 견적 신청 완료에 전달
*/

var carformSlides = $('.carformSwiper .swiper-slide');
carformSlides.css({'transition' : '0.5s'})
var clickModel; // 클릭된 슬라이드 변수

carformSlides.click(function() { 
    $(this).css({                   // 클릭된 요소의 CSS 변경
      'transform': 'scale(1)',
      'border': '3px solid #ffba00',
      'opacity': '1'
    });   
    carformSlides.not(this).css({  // 클릭되지 않은 요소의 CSS 변경
      'transform': 'scale(0.9)',
      'border': '0px',
      'opacity': '0.4'
    });    
    clickModelImg = $(this).find('img').attr('src'); // 클릭된 요소의 src값과 text 값을 브라우저 저장소에 저장
    localStorage.setItem('chooseSrc', clickModelImg)
    
    clickModel = $(this).find('p').text(); //값 찾아서 할당
    $('.click-model').text(clickModel); // 값 현재 페이지 변경
    localStorage.setItem('choose', clickModel); // 저장소 저장
});

var clickSub =  localStorage.getItem('choose'); // 클릭된 요소 (value)값 가져오기
var clickModelSrc = localStorage.getItem('chooseSrc');



function submitForm() { 
  // submit 페이지 이동  
  window.location.href = 'sub-2.html';  
}


/* 
  개인 정보 처리 방침 열어서 checkbox 체크 시 
  index2.html checkbox도 체크 표시 되게 제작하기
*/


var easyToggle = $('.easy-modeBtn');
var easyToggle2 = $('.easy-modeBtn2');
var easyToggle3 = $('.easy-modeBtn3');
var changeSpace = $('#pop-1wrap');
var changeSpace2 = $('#pop-2wrap');
var changeSpace3 = $('#pop-3wrap');
var removeFont = $('.text-container');

$('.pop-head').on('click','.easy-modeBtn',function(){

  // 현재 토글 버튼의 텍스트 검색
  var buttonText = $(this).text();

  if(buttonText === "이지모드") {

    // easyToggle.css("background-color" , "#0d0d0d")
    easyToggle.text("원문보기")

// 기존 팝업 내용 지우기 , 그 안에 내용 채워넣기  -- 1번
    changeSpace.remove("popup-1.html")
    changeSpace.load("pop-1-easy.html")    
  } else if (buttonText === "원문보기") {

// 새로 생긴 내용 지우기 , 기존 내용 채워넣기  
    easyToggle.css("background-color", "yellow")
    easyToggle.text("이지모드")

    changeSpace.remove("pop-1-easy.html")
    $('#pop-total-wrap').load("popup-1.html")
  }
})


easyToggle2.on('click',function(){
   
    var buttonText2 = $(this).text();

    if(buttonText2 === "이지모드") {     
      easyToggle2.text("원문보기")
      changeSpace2.remove("popup-2.html")
      changeSpace2.load("pop-2-easy.html")    
    } else if (buttonText2 === "원문보기") {
   
      easyToggle2.css("background-color", "yellow")
      easyToggle2.text("이지모드")
  
      changeSpace2.remove("pop-2-easy.html")
      $('#pop-total-wrap2').load("popup-2.html")
    }
  })

  easyToggle3.on('click',function(){
   
    var buttonText3 = $(this).text();

    if(buttonText3 === "이지모드") {     
      easyToggle3.text("원문보기")

      changeSpace3.remove("popup-3.html")
      changeSpace3.load("pop-3-easy.html")
     
      // removeFont.remove("popup-3.html")
      // changeSpace3 = (#pop-3wrap)
      

    } else if (buttonText3 === "원문보기") {
   
      easyToggle3.css("background-color", "yellow")
      easyToggle3.text("이지모드")
  
      changeSpace3.remove("pop-3-easy.html")
      $('#pop-total-wrap3').load("popup-3.html")
    }
  })









// 해당 방법의 문제 = 약간 야매를 사용한듯하다.


var indexPersonal = $('.personal-check');
var indexPopPersonal = $('.pop-personal');


// 로컬스토리지 내에 checkboxState의 value가 undefined로 유지됌 
// prop('checked'를 사용해야함)


indexPersonal.on('change', function() {
  localStorage.setItem('checkboxState', indexPersonal.prop('checked'));
});

indexPopPersonal.on('change', function() {
  localStorage.setItem('checkboxState', indexPopPersonal.prop('checked'));
});

// 개인정보 제공 동의

var index2Personal = $('.personal-give-check');
var index2PopPersonal = $('#pop-personal2');


index2Personal.on('change', function() {
  localStorage.setItem('checkboxState2', index2Personal.prop('checked'));
});

index2PopPersonal.on('change', function() {
  localStorage.setItem('checkboxState2', index2PopPersonal.prop('checked'));
});

// 마케팅 정보 제공 동의



var index3Personal = $('.personal-macketing');
var index3PopPersonal = $('#pop-personal3');


index3Personal.on('change', function() {
  localStorage.setItem('checkboxState3', index3Personal.prop('checked'));
});

index3PopPersonal.on('change', function() {
  localStorage.setItem('checkboxState3', index3PopPersonal.prop('checked'));
});


//

$(document).ready(function(){

  var checkboxState = localStorage.getItem('checkboxState');
  var checkboxState2 = localStorage.getItem('checkboxState2');
  var checkboxState3 = localStorage.getItem('checkboxState3');

  // 가져온 상태가 있으면 적용
  if (checkboxState !== null) {
    indexPersonal.prop('checked', JSON.parse(checkboxState));
    indexPopPersonal.prop('checked', JSON.parse(checkboxState));
  }

  if (checkboxState2 !== null) {
    index2Personal.prop('checked', JSON.parse(checkboxState2));
    index2PopPersonal.prop('checked', JSON.parse(checkboxState2));
  }

  if (checkboxState3 !== null) {
    index3Personal.prop('checked', JSON.parse(checkboxState3));
    index3PopPersonal.prop('checked', JSON.parse(checkboxState3));
  }

});


// onclick- goto home 

function goHome() {
  window.location.href = 'index2.html';  
}




















// 그럼 순서가 계속 자식창을 확인하다가 닫힌 게 true가 되면 감시 종료하고 부모창을 새로 고침함 -> $(document).ready(function()) 실행됌 -> 바뀐게 있으면 다시 적용함
//현재 가능하긴 한데 실시간으로 안되가지고 페이지를 로드할 때마다 체크해야 되는 오류가 있는 것이군..  