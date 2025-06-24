gsap.to("#box1",{
   x:500,
   duration :1.7,
   rotate:360,
   backgroundColor:"black",
   borderRadius:"50%",                      //% is spacial character so "" is require
   color:"white",
   transition:"ease-in",
   
    
    
})


gsap.to("#box2",{
    borderRadius:"50%",                      //% is spacial character so "" is require
    color:"white",
    transition:"ease-in",
  
    duration:1.7,
    rotation:360,
    transition:"ease-in",
    y:-200
})
gsap.to("img",{
  
    zoom:1.4,
    duration:2,
    delay:1.7
    
   
   

    
})

