gsap.to("#page2 h1",{
    transform:"translateX(-80%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
       start:"top 0%",
       end:"top -150%",
       scrub:2,
       pin:true

    }

})



// gsap.to("#page2 h1", {
//    transform:"translateX(-150%)",
//    scrollTrigger: {
//        trigger: "#page2", // The trigger should be the parent container
//        scroller:"body",
//         start: "top 0", // Adjust start position
//         end: "top -100%", // Adjust end position
//         scrub: 2, // Smooth animation with scrolling
//         pin: true, // Disable pinning unless required
//         markers: true, // Debug markers
//     }
// });

// // pin the trigger the parent which is #page2 in this case


