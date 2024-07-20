

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
      
        start:"top 15%",
        end:"top -193%",
        scrub:2,
        pin:true,
    }
})



gsap.to(".tandurimasalaimage",{
    
    scrollTrigger:{
        trigger:".page5 h1",
        scroller:"body",
       
        start:"top 316%",
        end:"top -316%",
        scrub:2,
        pin:true,
    }
})

// // MASALA SCROLLING end...



// swiper...

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


// mousemove imageee...

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



// navvvv...


// const navbar = document.querySelector(".navbar")
// const body = document.querySelector("body")

// body.addEventListener("wheel",function(dets){
//     if(dets.deltaY < 0){
//      navbar.classList.add("fixed")
//       console.log("ulta");
//     }else{
//         navbar.classList.remove("fixed")
//         console.log("sidda");
//     }
// })



// gsap animation no holee...




const tl= gsap.timeline()

tl.from(".navbar",{
  y:-200,
  duration:1.5
})
tl.from(".navbar h1",{
  y:-200,
  duration:2,
  opacity:-1,
  stagger:0.2,
},"-=1.6")

tl.from(".h1span",{
  y:400,
  duration:2,
  opacity:-1,
  stagger:0.1
},"-=3")


tl.from(".datauppervideo .maincontainer",{
  x:-300,
  duration:2,
  opacity:-1,
  stagger:0.2,
},"-=3")



gsap.from(".swiper",{
  y:300,
  duration:1.2,
  opacity:-1,
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    markers:true,
    start:"top 65%"
  }
})


const t = gsap.timeline({
  scrollTrigger:{
    trigger:".cholemasala",
    scroller:"body",
    markers:true,
    scrub:2
  }
})


t.from(".cholemasala",{
  x:-250,
  rotate:15,
  duration:2,
},"a")

t.from(".pavbhaji",{
  x:250,
  rotate:-15,
  duration:2,
},"a")


t.from(".page2 p",{
  y:250,
  opacity:-1,
  duration:2,
},"a")



const a = gsap.timeline({
  scrollTrigger:{
    scroller:"body",
    trigger:".boxx",
    markers:true,
   start:"top 70%",
    
  }
})
a.from(".boxx1",{
  x:300,
  duration:2,
  opacity:0,
  stagger:0.2,
  start:"top 80%"
},"a")
a.from(".boxline1",{
  duration:2,
  rotate:15,
  opacity:-1,
},"a")



const c = gsap.timeline({
  scrollTrigger:{
    scroller:"body",
    trigger:".page5",
   
   start:"top 70%",
    
  }
})

c.from(".page5 .box1",{
  x:-200,
  opacity:0,
  duration:2,
},"a")
c.from(".page5 .box3",{
  x:200,
  opacity:0,
  duration:2,
},"a")


const d = gsap.timeline({
  scrollTrigger:{
    scroller:"body",
    trigger:".hoverimagespage",
    markers:true,
    start:"top 70%"
  }
})

d.from(".elem h1",{
  x:400,
  duration:2,
  opacity:-1,
  stagger:0.2,
})



const e = gsap.timeline({
  scrollTrigger:{
    scroller:"body",
    trigger:".imageslide",
    start:"top 70%",

  }
})

e.from(".imageslide .leftbox",{
  x:-400,
  duration:3,
  opacity:-1
},"a")
e.from(".imageslide .rightbox",{
  x:400,
  duration:3,
  opacity:-1
},"a")

e.from(".rightbox h1",{
  x:400,
  duration:3,
  opacity:0
},"a")
