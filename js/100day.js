for (i = 1; i <= 100; i++) {
  $(".img-area").append(
    "<img src='../img/daily/moday-(" +
      i +
      ").png' width='100%' height='auto' style='padding-bottom:40px;'>"
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
