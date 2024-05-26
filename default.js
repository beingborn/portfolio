/* intro */

TweenMax.staggerFrom(
    ".titles > div",
    0.8,
    {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);

TweenMax.staggerTo(
    ".titles > div",
    0.8,
    {
        x: "60",
        ease: Power3.easeInOut,
        delay: 0.8,
        opacity: "0",
    },
    2
);
TweenMax.staggerFrom(
    ".blocks > li",
    3,
    {
        scale: "0",
        delay: 5.2,
    
    },
    0.16
);

TweenMax.staggerTo(
    ".blocks > li",
    2.6,
    {
        scale: "0",
        delay: 6.2,
        
    },
    0.2
);




const body_ = document.querySelector("body");
const intro = document.querySelector(".intro");
const header_ = document.querySelector("#header");
const home = document.querySelector("#wrapper");

intro.style.transition="1s";

setTimeout(function(){

    intro.style.opacity="0";
    body_.style.overflow="auto";
    header_.style.opacity="1";
    wrapper.style.opacity="1";

    setTimeout(function(){
        intro.style.display="none";
    },1000);


},9000);


//works  scroll

class CardFlipOnScroll {
constructor(wrapper, sticky) {
this.wrapper = wrapper
this.sticky = sticky
this.cards = sticky.querySelectorAll('.card')
this.length = this.cards.length

this.start = 0
this.end = 0
this.step = 0
}

init() {
this.start = this.wrapper.offsetTop + 100
this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
this.step = (this.end - this.start) / (this.length * 2)
}

animate() {
this.cards.forEach((card, i) => {
const s = this.start + this.step * i
const e = s + this.step * (this.length + 1)

if (scrollY <= s) {
card.style.transform = `
  perspective(100vw)
  translateX(100vw) 
 `
} else if (scrollY > s && scrollY <= e - this.step) {
card.style.transform = `
  perspective(100vw)
  translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
 
`
} else if (scrollY > e - this.step && scrollY <= e) {
card.style.transform = `
  perspective(100vw)
  translateX(${100 + (scrollY - s) / (e - s) * -100}vw)

`
} else if (scrollY > e) {
card.style.transform = `
  perspective(100vw)
  translateX(0vw) 
  rotateY(0deg)
`
}
})
}
}


const sticky = document.querySelector('.sticky')
const cardFlipOnScroll = new CardFlipOnScroll(works, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
cardFlipOnScroll.init()
})

	///////////// 작품 클릭했을때 팝업(모달) ///////////////
	const menu = document.querySelectorAll(".card");
	const pop = document.querySelectorAll(".pop");
	const close = document.querySelectorAll(".close");
	const body = document.querySelector("body");


	menu.forEach(function(menu){

		menu.addEventListener("click",function(){ //각각의 menu클릭했을때

			this.nextElementSibling.style.display="block";
			//클릭한 이 menu의 다음형제인 pop을 보이게함

			body.style.overflow="hidden"; //body스크롤없앰
		});	

	});


	close.forEach(function(close){ 

			close.addEventListener("click",function(e){// 각각의 close클릭했을때
				e.preventDefault();

				pop.forEach(function(pop){
					pop.style.display="none"; //팝업 다 안보이게함
				})

				body.style.overflow="auto"; //body스크롤 생김
			});

	})

    // 퀵메뉴

    const quick_menu = document.querySelector(".quick_menu");
    const header = document.querySelector( "#header" );
    const gnb = document.querySelectorAll(".gnb li a");
    const quick = document.querySelectorAll ( ".quick_menu li a" )
    
    //각 영역이 보이게될 스크롤값 구하기
    const t1 = document.querySelector("#works").offsetTop;
    const t2 = document.querySelector("#about").offsetTop;
    const t3 = document.querySelector("#contact").offsetTop;


        ///////// 스크롤 하는동안(스크롤할때마다) //////////
        window.addEventListener("scroll",function(){
        
            let sc = window.scrollY; //얼마만큼 스크롤했는지의 값
          
        
            
            if ( sc>= 100 ) { 
                header.style.opacity = "0";
    
               }   else { 
                header.style.opacity = "1";
                
            }
    
        
            if ( sc>= 100 ) { 
                quick_menu.style.top="20px";
        
            } else { //works외 구간
             
                quick_menu.style.top="-150px";
                
            }
        });