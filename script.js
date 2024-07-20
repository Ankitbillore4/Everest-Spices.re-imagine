
// var tl= gsap.timeline({scrollTrigger:{
//     trigger:"body",
//     start:"55% 50%",
//     end:"100% 50%",
//     scrub:2,
//     pin:true,

// }})

// tl.to(".top",{
//     top:"-50%"
// },"a")

// tl.to(".bottom",{
//     bottom:"-50%",
// },"a")

// tl.to(".top-h1",{
//     top:"100%",
// },"a")

// tl.to(".bottom-h1",{
//     top:"-80%",
// },"a")

// tl.to(".content ",{
//     marginTop:"0%",
// },"a")


// images mouse hover slide continous start...
var elems = document.querySelectorAll(".elem")
var hoverimagespage = document.querySelector(".hoverimagespage")
elems.forEach(function(e){
    e.addEventListener('mouseenter',function(){
     var bgimg  =   e.getAttribute("data-img")
      hoverimagespage.style.backgroundImage =`url(${bgimg})`
    })
    e.addEventListener('mouseleave',function(){
        var bgimg  =   e.getAttribute("data-img")
         hoverimagespage.style.backgroundImage =``
       })
})

// images mouse hover slide continous end...








// // MASALA SCROLLING start...

gsap.to(".tandurimasalaimage",{
    scale:"0.9",
    scrollTrigger:{
        trigger:".tandurimasalaimage",
        scroller:"body",
        markers:true,
        start:"top 15%",
        end:"top -200%",
        scrub:2,
        pin:true,
    }
})



gsap.to(".tandurimasalaimage",{
    
    scrollTrigger:{
        trigger:".page5 h1",
        scroller:"body",
        markers:true,
        start:"top 316%",
        end:"top -316%",
        scrub:2,
        pin:true,
    }
})

// // MASALA SCROLLING end...







function run(){
    
}
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
run()



















function mouseimagemove(){
  document.addEventListener("mousemove",function(details){
    document.querySelectorAll(".imgg").forEach((elem)=>{
      const position = elem.getAttribute("value")
      const X = (window.innerWidth - details.clientX * position)/50;
      const Y = (window.innerHeight - details.clientY * position)/50;
  
       elem.style.transform = `translateX(${X}px) translateY(${Y}px)`
    })
  })
   
}

mouseimagemove()





