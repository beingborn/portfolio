// input 버튼에 변경이 있을 때 로컬 스토리지의 밸류 값 설정하기

indexPersonal.on("change", function () {
  localStorage.setItem("checkboxState", indexPersonal.prop("checked"));
});

// 브라우저 불러올 시 상태 값 가져오기
$(document).ready(function () {
  var checkboxState = localStorage.getItem("checkboxState");

  // 가져온 상태가 있으면 해당 브라우저 (새 창) 에도 값 설정하기
  if (checkboxState !== null) {
    indexPersonal.prop("checked", JSON.parse(checkboxState));
  }

  // 가져온 값 자동 적용
  var interval = setInterval(function () {
    if (childWindow.closed) {
      // 일정 시간 간격으로 자식 창이 닫혔는지 확인
      clearInterval(interval); // interval 제거
      window.location.reload(true); // 부모 창 새로고침
    }
  }, 1000); // 1초마다 확인
});

// grid

/* 웹페이지 레이아웃을 격자 구조로 구성하는 CSS 기능 3차원 레이아웃에 적합 */

/*
.grid-container {
  display: grid; /* 컨테이너 그리드 박스 지정 */
//   grid-template-columns: repeat(3, 1fr); 	/* 행열 프레임 설정 */
//   grid-template-rows: repeat(2, 1fr);
//   grid-auto-rows: 480px;
//   grid-gap: 20px;
//   grid-template-areas:  /* 행열 별 영역 지정 */
//   'a b b'
//   'a c d'
//   ;
// }

//  /* 자식 아이템 영역 지정 */

// .grid-itemA {
//   grid-area : a;
// }

/* 스와이퍼란 모바일 터치 슬라이더로, 다양한 플러그인을 제공하는 프레임워크 */

/* cdn 지정 (css/js) */
// (css 생략)
// <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

// /* 슬라이드 css, 마크업 */
// <div class="swiper carSwiper">
// 	<div class="swiper-wrapper">
// 		<div class="swiper-slide">
// 			/* 이미지 및 html 마크업 삽입*/
// 		</div>
// 	</div>
// </div>

// /* 슬라이드 기능 정의 */
// var swiper = new Swiper(".carSwiper", {
//         slidesPerView: 1, /* 화면에 보일 슬라이드 개수 지정*/
//         spaceBetween: 200,
//         loop: true, /* 무한 슬라이드 지정 */
//         pagination: {
//           el: ".swiper-pagination", /* 페이지네이션 , 클릭 시 인덱스 변경 */
//           clickable: true,
//         },
// )

// /* 스와이퍼 별 id 지정 , 클릭 이벤트 발생 시 display block, none 처리 */

//   carBtn.addEventListener("click", function () {
//     $(#car-catalog).style.display = "block";
//     $(#accesory-catalog).style.display = "none";
//   });
// });

//   accesoryBtn.addEventListener("click", function () {
//     $(#car-catalog).style.display = "none";
//     $(#accesory-catalog).style.display = "block";
//   });
// });
