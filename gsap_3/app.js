//scoller="body"  mostly will change if locomotive is used


gsap.from("#page1 #box",{
    rotate:360,
    scale:0,
    opacity:0,
    duration:2

    

})
gsap.from("#page2 #box",{
    rotate:360,
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 20%",
        scrub:2
         

     }

    

})
gsap.from("#page3 #box",{
    rotate:360,
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
         trigger:"#page3 #box",                                                //page3 will also se same not need to give the trigger point to page1 box
        scroller:"body",
        markers:true,
        end:"top 50%",
        scrub:2
         

     }

    

})


