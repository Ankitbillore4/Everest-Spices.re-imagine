
var tl= gsap.timeline({scrollTrigger:{
    trigger:".mainparent",
    start:"55% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true,

}})

tl.to(".top",{
    top:"-50%"
},"a")

tl.to(".bottom",{
    bottom:"-50%",
},"a")

tl.to(".top-h1",{
    top:"100%",
},"a")

tl.to(".bottom-h1",{
    top:"-80%",
},"a")

tl.to(".content ",{
    marginTop:"0%",
},"a")



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












// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.mainparent'),
//     smooth: true
// });


// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".mainparent"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".mainparent" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".mainparent", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".mainparent").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();







// MASALA SCROLLING...

gsap.to(".tandurimasalaimage",{
    scrollTrigger:{
        trigger:".tandurimasalaimage",
        scroller:"body",
        markers:true,
        start:"top 12%",
        end:"top -320%",
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


