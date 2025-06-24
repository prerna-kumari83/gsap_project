var tl=gsap.timeline();
// var tl=gsap.timeline({paused:true});

var icon=document.querySelector("#nav i");
tl.to("#full",{
    right:0,
    duration:0.3

   
})

var back =document.querySelector("#full i");
tl.from("#full h2",{
    x: 60,
    opacity:0,
    duration:0.4,
    stagger: 0.2
})

icon.addEventListener("click",function(){
    console.log("hello");
   
})

tl.pause();

icon.addEventListener("click",function(){
    tl.play();
})


back.addEventListener("click",function (){
    tl.reverse();

})