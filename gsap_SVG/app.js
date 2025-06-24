//sgv is container


var path="M 10 100 Q 500 100 990 100"

var final="M 10 100 Q 500 100 990 100"

var string=document.querySelector("#string")

string.addEventListener("mousemove",function(event){
    path=`M 10 100 Q ${event.x} ${event.y} 990 100`
  
    gsap.to("svg path",{
        attr:{d:path},
        ease:"elastic.out(1,0.2)",
        duration:0.3
    })

})
string.addEventListener("mouseleave",function(event){
    
    gsap.to("svg path",{
        attr:{d:final},
        ease:"elastic.out(1,0.2)",
        duration:0.3
    })

})