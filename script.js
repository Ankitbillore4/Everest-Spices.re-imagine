
var tl= gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"55% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true,
    markers:true
}})

tl.to(".top",{
    top:"-50%"
},"a")

tl.to(".bottom",{
    bottom:"-50%"
},"a")

tl.to(".top-h1",{
    top:"70%",
},"a")

tl.to(".bottom-h1",{
    top:"-80%",
},"a")

tl.to(".contant ",{
    marginTop:"0%",
},"a")