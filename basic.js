/*
var mainLogo = $('.home-logo')
console.log(mainLogo);

mainLogo.on('click',function(){
console.log(mainLogo);

})
*/

// 클릭된 요소 p 내용 찾기 (find)
// 해당 요소 특정 div 내용에 삽입

var pcHeader = document.querySelector(".header"); // 헤더
var hideGnb = document.querySelector(".hide-gnb"); // hide-gnb
var hideGnbSub = document.querySelector(".hide-gnb-wrap");
var blackBg = document.querySelector(".black-bg");

var gnbDetail = document.querySelectorAll(".first-col"); // gnb 내용

// 마우스 호버 시 스타일
pcHeader.addEventListener("mouseover", function () {
  document.querySelector("#logo-link img").src = "./img/JEEP-로고2(흑백).png";

  // hideGnb.style.height = "249px"
  // hideGnb.style.borderTop = "1px solid #ddd"

  // blackBg.style.display = "block"
  // blackBg.style.height = "100%"
  // blackBg.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
  // blackBg.style.zIndex = "999"

  if (window.location.href.includes("sub-2.html")) {
    blackBg.style.height = "100vh";
    hideGnb.style.height = "249px";
    hideGnb.style.borderTop = "1px solid #ddd";
    blackBg.style.display = "block";
    blackBg.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    blackBg.style.zIndex = "999";
  } else {
    hideGnb.style.height = "249px";
    hideGnb.style.borderTop = "1px solid #ddd";
    blackBg.style.height = "100%";
    blackBg.style.display = "block";
    blackBg.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    blackBg.style.zIndex = "999";
  }
});

// 마우스 아웃 스타일
pcHeader.addEventListener("mouseout", function () {
  document.querySelector(
    "#logo-link"
  ).innerHTML = `<img src="./img/JEEP-로고1.png" alt="오설록 로고" id="main-logo-img" />`;

  hideGnb.style.height = "0px";
  hideGnb.style.borderTop = "0px solid #ddd";
  blackBg.style.display = "none";
  blackBg.style.height = "100%";
  blackBg.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  blackBg.style.zIndex = "1";

  // setTimeout(function() {
  // gnbDetail.forEach(function(item) {
  //     item.style.display = "none";
  // });
  // }, 100)
});

/* 첫째로 구현해야할것. 
    근데 그 스크롤 값에 따라 연도 텍스트의 위치를 옮길거임
    스크롤 값에 따라 opacity -> 오른쪽 텍스트 변경부터  --> 다 구현한듯 
*/

$(".table-head").css({ transition: ".5s" });
// $(".table").css({ transition: ".5s", opacity: 0.5});
// moveText.offset( { left: 0, top: 2153 } );

var opacityText1 = $(".table").eq(0);
var opacityText2 = $(".table").eq(1);
var opacityText3 = $(".table").eq(2);
var opacityText4 = $(".table").eq(3);
var moveText = $(".table-head");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).css({ opacity: 1 });
      } else {
        $(entry.target).css({ opacity: 0 });
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(opacityText1[0]);
observer.observe(opacityText2[0]);
observer.observe(opacityText3[0]);
observer.observe(opacityText4[0]);

$(window).scroll(function () {
  var h = $(document).scrollTop();

  if (h > 1440 && h < 1700) {
    moveText.html("1970");
    moveText.css({ top: 80 });
  }

  if (h > 1700 && h < 1956) {
    moveText.html("1980");
    moveText.css({ top: 336 });
  }

  if (h > 1956 && h < 2212) {
    moveText.html("1990");
    moveText.css({ top: 592 });
  }

  if (h > 2212) {
    moveText.html("2000");
    moveText.css({ top: 848 });
  }
});

// 구현해야할 것 : 버튼 별로 display class 탈 부착 or css 변경 , button css 변경
// #whole-btn, btn-20, btn-30, btn-40

var wholeRankBtn = document.querySelectorAll(".whole-btn");
var Rank20Btn = document.querySelectorAll(".btn-20");
var Rank30Btn = document.querySelectorAll(".btn-30");
var Rank40Btn = document.querySelectorAll(".btn-40");

var wholeRankWrap = document.querySelector("#whole-ranking");
var Rank20Wrap = document.querySelector("#ranking-20");
var Rank30Wrap = document.querySelector("#ranking-30");
var Rank40Wrap = document.querySelector("#ranking-40");

var wholeBtnGroup = document.querySelectorAll(".whole-btn");
var Rank20Group = document.querySelectorAll(".btn-20");
var Rank30Group = document.querySelectorAll(".btn-30");
var Rank40Group = document.querySelectorAll(".btn-40");

console.log(carGroupBtn, accGroupBtn);

var itemAgroup = document.querySelectorAll(".itemA");

wholeBtnGroup[0].classList.add("btn-active");

function wholeBtnActive() {
  for (var i = 0; i < wholeBtnGroup.length; i++) {
    wholeBtnGroup[i].classList.add("btn-active");
    Rank20Group[i].classList.remove("btn-active");
    Rank30Group[i].classList.remove("btn-active");
    Rank40Group[i].classList.remove("btn-active");
  }
}

function Rank20BtnActive() {
  for (var i = 0; i < Rank20Group.length; i++) {
    Rank20Group[i].classList.add("btn-active");
    Rank30Group[i].classList.remove("btn-active");
    Rank40Group[i].classList.remove("btn-active");
    wholeBtnGroup[i].classList.remove("btn-active");
  }
}

function Rank30BtnActive() {
  for (var i = 0; i < Rank30Group.length; i++) {
    Rank30Group[i].classList.add("btn-active");
    Rank20Group[i].classList.remove("btn-active");
    Rank40Group[i].classList.remove("btn-active");
    wholeBtnGroup[i].classList.remove("btn-active");
  }
}

function Rank40BtnActive() {
  for (var i = 0; i < Rank40Group.length; i++) {
    Rank40Group[i].classList.add("btn-active");
    Rank20Group[i].classList.remove("btn-active");
    Rank30Group[i].classList.remove("btn-active");
    wholeBtnGroup[i].classList.remove("btn-active");
  }
}

wholeRankBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    wholeBtnActive();
    Rank20Wrap.style.display = "none";
    Rank30Wrap.style.display = "none";
    Rank40Wrap.style.display = "none";

    wholeRankWrap.style.display = "block";
  });
});

Rank20Btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    Rank20BtnActive();
    wholeRankWrap.style.display = "none";
    Rank30Wrap.style.display = "none";
    Rank40Wrap.style.display = "none";

    Rank20Wrap.style.display = "block";
  });
});

Rank30Btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    Rank30BtnActive();

    wholeRankWrap.style.display = "none";
    Rank20Wrap.style.display = "none";
    Rank40Wrap.style.display = "none";

    Rank30Wrap.style.display = "block";
  });
});

Rank40Btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    Rank40BtnActive();

    wholeRankWrap.style.display = "none";
    Rank20Wrap.style.display = "none";
    Rank30Wrap.style.display = "none";

    Rank40Wrap.style.display = "block";
  });
});

var yeartitle1 = $(".table-year").eq(0);
var yeartitle2 = $(".table-year").eq(1);
var yeartitle3 = $(".table-year").eq(2);

var scrollTopValue1 = yeartitle1.scrollTop();
var scrollTopValue2 = yeartitle2.scrollTop();
var scrollTopValue3 = yeartitle3.scrollTop();

var parentPosition = $(".table-flex").offset();

///////////////////

var carGroup = document.querySelector(".catalog-select");
var accGroup = document.querySelector(".acceso-select");
var carGroupBtn = document.querySelectorAll(".car-btn");
var accGroupBtn = document.querySelectorAll(".accesori-btn");

function carGroupBtnActive() {
  for (var i = 0; i < carGroupBtn.length; i++) {
    carGroupBtn[i].classList.add("btn-active");
    accGroupBtn[i].classList.remove("btn-active");
  }
}

function accGroupBtnActive() {
  for (var i = 0; i < accGroupBtn.length; i++) {
    accGroupBtn[i].classList.add("btn-active");
    carGroupBtn[i].classList.remove("btn-active");
  }
}

carGroupBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    carGroupBtnActive();
    carGroup.style.display = "block";
    accGroup.style.display = "none";
  });
});

accGroupBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    accGroupBtnActive();
    accGroup.style.display = "block";
    carGroup.style.display = "none";
  });
});

/* 오늘의 구현 
  1. index의 checkbox를 addeventListener (change)를 통해 변경될때마다 로컬스토리지에 저장
  2. 그리고 각 HTML 로드 시 checkbox 상태 확인 
  3. 로컬 스토리지 get Item 활용 후 Json 으로 상태 반환해서 Boolean 값 전달
*/

/* 
  ajax = 페이지 새로고침 없이 동기식으로 동적 페이지를 구현해주는 것
*/
