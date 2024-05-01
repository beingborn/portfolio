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
