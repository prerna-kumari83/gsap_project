var tl=gsap.timeline();
tl.from("h2",{
    y:-10,
    duration:0.9,
    delay:0.3,
    opacity:0
})

tl.from("h4",{
    y:-10,
    opacity:0,
    duration:1,
   stagger:0.4

})

tl.from("#text",{
    scale:0.3,
    opacity:0,
    duration:0.6,
    

})











































// gsap.to("#box1",{
//     x:500,
//     duration:2,
//     delay:1,
//     rotation:360,
//     repeat:-1  ,    //repeat infinite   normally any number1,2,3..
//     yoyo:true


// })










// gsap.from("h1",{
//     color:"white",
//     duration:2,
//     opacity:0,
//     delay:0.7,
//     y:30,
//     stagger:-1      //reverse order(one by one)
// })