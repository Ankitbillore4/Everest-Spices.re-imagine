
var tl= gsap.timeline({scrollTrigger:{
    trigger:".footer",
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


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.mainparent'),
//     smooth: true
// });