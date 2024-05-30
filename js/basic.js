// mobileJs 
$('.top-gnb-mo').hide()

let moBtn = $('#mo-btn')
console.log(moBtn)

moBtn.on("click",function(){
  $('.top-gnb-mo').toggle()
})



// 






let num = 0.5;
$(".name").each(function () {
  // 각 엘리먼트의 animation-delay를 0.5, 1.0, 1.5 ~ 차례로 준다.
  $(this).css("animation-delay", `${num}s`);
  num += 0.25;
});

let documentLoadCount = 0;
$(".l-wrapper").hide(); //
$(".left-title").addClass("animate__animated animate__fadeInLeft");
$(".sub-year").addClass("animate__animated animate__fadeInLeft");

// 1번이 약 1.25가 되어야함
let projectNum = 1.25;

$(".project-sub").each(function () {
  $(this).css("animation-delay", `${projectNum}s`);
  projectNum += 0.25;
});





// 이미지 추가

for (i = 1; i <= 100; i++) {
  $(".img-area").append(
    "<img src='../img/daily/moday-(" +
      i +
      ").png' width='800' height='auto' style='padding-bottom:40px;'>"
  );
}

$(document).ready(function () {
  $(".img-area img").css({ visibility: "hidden" });
  $(".img-area img").eq(88).css({ visibility: "visible" });

  // 버튼 클릭 시 랜덤 이미지를 표시합니다.
  $("#random-btn").click(function () {
    // 0부터 99까지의 랜덤 숫자를 생성합니다.
    let randomNum = Math.floor(Math.random() * 100);

    // 이미지를 모두 숨깁니다.
    $(".img-area img").css({ visibility: "hidden" });

    // 랜덤 숫자에 해당하는 이미지를 표시합니다.
    $(".img-area img").eq(randomNum).css({ visibility: "visible" });
  });
});

// 프로젝트 탭

$(".project-total").hide();
$(".project-total").eq(0).show();

$(".project-change").on("click", function () {
  // project change 버튼
  let projectIndex = $(".project-change").index(this);
  $(".project-total").hide(); // 모든 project-total을 숨깁니다.
  $(".project-total").eq(projectIndex).show(); // 클릭한 버튼에 해당하는 project-total을 보여줍니다.

  $(this).addClass("btn-active");
  $(".project-change").not(this).removeClass("btn-active");
});

// window.onload = function () {

// };

window.onload = function () {
  var mainTask = $(".task-wrap li a");
  var taskExplain = $(".task-box");
  var taskBox = $(".code-real");
  var isOpen = false;

  taskBox.hide();
  taskBox.eq(0).show();

  mainTask.eq(0).css("color", "black");

  mainTask.click(function () {
    // 기능 버튼 클릭 시
    var taskIndex = mainTask.index(this); // 누른 인덱스 값 저장
    taskBox.eq(taskIndex).show(); // 해당 인덱스 글 보이기
    taskExplain.eq(taskIndex).show(); // 해당 인덱스 설명 보이기

    var notThisIndexes = mainTask
      .not(this)
      .map(function () {
        // 선택 안된 것들의 index 얻기
        return mainTask.index(this);
      })
      .get();

    for (let i = 0; i < notThisIndexes.length; i++) {
      // 반복문 돌면서 display block 시키기
      taskBox.eq(notThisIndexes[i]).hide();
      taskExplain.eq(notThisIndexes[i]).hide();
    }

    $(this).css({
      color: "black",
    });

    mainTask.not(this).css({
      color: "lightgray",
    });
  });

  let play = true;
  const movingWrap = $(".right-vision");

  let x = 0;
  let s = -1;

  const set = $(".right-vision p");

  let hap = 0;

  setTimeout(function () {
    for (i = 0; i < set.length; i++) {
      hap = hap + $(".right-vision p:eq(" + i + ")").width() + 40;
    }
    //alert(hap);
  }, 500);

  const temp = set.clone(true);
  movingWrap.append(temp);

  let wrapWidth = movingWrap.width();
  let itemWidth = movingWrap.find("p").outerWidth();

  function moving() {
    if (play) {
      // x = x + s
      let currentLeft = parseInt(movingWrap.css("left"));

      if (currentLeft < -hap) {
        // 끊어지는 위치가 될 시 기존 위치로 변경하기 즉 clone 노드까지 뷰포트에 다 보여졌을 때
        currentLeft = 0;
      }

      movingWrap.css("left", `${currentLeft - 1}px`);
    }
  }

  setInterval(moving, 10);
};













// 호버 시 배경 이미지 src 가져오기
// 새로운 값에 담아서
// 업데이트 해주기

let skillIcon = $(".icon-wrap");
let clickedItem;

$(document).ready(function () {
  skillIcon.hover(
    function () {
      $(this)
        .find("a")
        .each(function () {
          var clickedItem = $(this);
          clickedSrc = clickedItem.css("background-image");

          clickedItem.data("originalSrc", clickedSrc);

          var extensionIndex = clickedSrc.lastIndexOf("."); // src값 확장자 값 찾기
          var extension = clickedSrc.slice(extensionIndex); // 확장자 앞 텍스트 가져오기
          var newSrc = clickedSrc.slice(0, extensionIndex) + "-on" + extension; // "-on" 텍스트 추가

          console.log(newSrc);

          clickedItem.css("background-image", newSrc);
        });
      // 클릭된 요소의 a태그 찾기
      // 해당 요소 배경 이미지 찾기
    },
    function () {
      $(this)
        .find("a")
        .each(function () {
          var clickedItem = $(this);
          var originalSrc = clickedItem.data("originalSrc");
          // 기존 src로 변경
          clickedItem.css("background-image", originalSrc);
        });
    }
  );
});

//  해결 방법 : each로 순회 돌면서 해당 a 값 개별로 src값 할당

// 해당 인덱스 번호

let modalBtn = $(".icon-wrap");
let modal = $(".modal-body");
let modalClose = $(".close-btn");
let tempBg = $(".temp-bg");
let blackBg = $(".modal-bg");
let modalOffset = modal.offset();

modal.hide();

modalBtn.click(function () {
  let modalIndex = modalBtn.index(this);

  modal.eq(modalIndex).fadeIn("swing", function () {
    
   /* $("html, body")
      .stop()
      .animate(
        {
          scrollTop: modalOffset.top - modal.height() / 2,
        },
        "smooth"
      );
  }); */

  $("body").css("overflowY", "hidden");
})
  blackBg.css({ height: $(document).height() });
  blackBg.show();
  
});

blackBg.click(AA);

modalClose.click(AA);

function AA() {
  modal.fadeOut("swing");
  blackBg.hide();
  $("body").css("overflowY", "auto");
}

let etcModalOffset = $(".etc-modal").offset();
$(".etc-modal").hide();

$(".etc-box").click(function () {
  // $(".etc-modal").fadeIn('swing',function(){

  //   $('html, body').stop().animate({
  //     scrollTop: etcModalOffset.top

  //   }, 'smooth');
  //   console.log(etcModalOffset.top);

  // });
  $(".etc-modal").fadeIn("swing");
  $("body").css("overflowY", "hidden");

  blackBg.css({ height: $(document).height() });
  blackBg.show();
});

function BB() {
  console.log("BB 함수 실행됨"); // 디버깅 로그
  $(".etc-modal").hide();
  blackBg.hide();
  $("body").css("overflowY", "auto");
}

// etc-close 클릭 시 모달 숨기기
$(".etc-close").click(BB);
blackBg.click(BB);

// 애로우 화면 뷰포트 애니메이션

var projectDown = $(".main-task");
let observer = new IntersectionObserver( // 생성자 즉 대상 요소 감시자 설정
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 뷰 포트에 보일 시 해당 코드 실행
        console.log(`${entry.target} is intersecting`);
        $(".arrow-down").css("opacity", 0);
        $(".top-btn").css("opacity", 1);
      } else {
        console.log(`${entry.target} is not intersecting`);
        $(".arrow-down").css("opacity", 1);
        // $('.top-btn').css('opacity', 0)
      }
    });
  },
  { threshold: 0.5 } // 보이는 영역 비율 50%, 넘을 시 함수 실행
);
projectDown.each(function () {
  observer.observe(this);
}); // 관찰 대상

// TOP BTN 애니메이션

var projectUp = $(".project-view");

let observer2 = new IntersectionObserver( // 생성자 즉 대상 요소 감시자 설정
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 뷰 포트에 보일 시 해당 코드 실행
        console.log(`${entry.target} is intersecting`);
        $(".top-btn").css("opacity", 0);
      } else {
        console.log(`${entry.target} is not intersecting`);
      }
    });
  },
  { threshold: 0.5 } // 보이는 영역 비율 50%, 넘을 시 함수 실행
);
projectUp.each(function () {
  observer2.observe(this);
}); // 관찰 대상

const content = $(".design-page");

// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
const contentTop = content.offset().top;
console.log(contentTop);

const subGnb = $(".right-gnb");
let subGnbBtn = $(".right-gnb li a");

// 스크롤 이벤트 추가
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= contentTop) {
    subGnb.addClass("fixed");
  } else {
    subGnb.removeClass("fixed");
  }
});

subGnbBtn.eq(0).css("color", "#1e1eca");

subGnbBtn.on("click", function () {
  // 클릭된 요소의 폰트 색상 변경
  $(this).css("color", "#1e1eca");
  // 클릭된 요소가 아닌 것들
  subGnbBtn.not(this).css("color", "lightgray");
});

// 스와이퍼 자바스크립트

// var swiper = new Swiper(".etcSwiper-1", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// mobile style
