var mainTask = $(".task-wrap li a");
var taskExplain = $(".task-box");
var taskBox = $(".code-review");
var isOpen = false;

taskBox.eq(0).css("display", "block");
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
