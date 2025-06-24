var big=document.querySelector("#big")

big.addEventListener("mouseenter",function(){
    console.log("entered");
    gsap.to(big,{
        scale:4
    })
})
big.addEventListener("mouseleave",function(){
    console.log("entered");
    gsap.to(big,{
        scale:1
    })
})