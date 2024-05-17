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
      //paddingBottom: "32px",
      //fontSize: "22px",
    });

    mainTask.not(this).css({
      color: "lightgray",
      //paddingBottom: "12px",
      //fontSize: "20px",
    });
  });

  // 과제 : 해당 인덱스를 다시 누르면 접기
  // 지금 현재는 다른 버튼 not(this)를 눌러야만 원하는 인덱스를 접을 수 있음
  // 바꾸려면 현재 버튼의 상태를 알 수 있는 변수를 선언해서 교차 시켜야 함

  // 이동 갤러리 변수 선언

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

let modalBtn = $('.icon-wrap');
let modal = $('.modal-body')
let modalClose = $('.close-btn')
let tempBg = $('.temp-bg')
let blackBg = $('.modal-bg')

blackBg.css({ height:$(document).height()  });

console.log(modalBtn[0],modalBtn[1])

modal.hide()

modalBtn.click(function(){
  let modalIndex = modalBtn.index(this);
  blackBg.show();

  modal.eq(modalIndex).fadeIn('swing');
})

blackBg.click(AA);
modalClose.click(AA);

function AA(){
  modal.fadeOut('swing');
  blackBg.hide();
}

// 텍스트 애니메이션

window.onload = function() {
  $('.right-sub').css({
    opacity : 1, 
    transform : 'translateY(0)'
  })

  $('.left-title').css({
    opacity : 1, 
    transform : 'translateY(0)'
  })
};