 var main=document.querySelector("#main")

 var cursor=document.querySelector("#cursor")
 var box=document.querySelector("#box");


main.addEventListener("mousemove",function(event){
    gsap.to(cursor ,{
        x:event.x,
        y:event.y,
        duration:0.4,
        

        
    })
})


box.addEventListener("mouseenter",function(event){

    cursor.innerHTML="View More";
 
    gsap.to(cursor,{
        scale:3,
        duration:0.1,
        backgroundColor:"#2220206f"
    })
   
    
   
  

})
box.addEventListener("mouseleave",function(event){
    cursor.innerHTML="";


    gsap.to(cursor,{
        scale:1,
        duration:0.1,
        backgroundColor:"#000"
    })

    gsap.to(dom,{
        backgroundColor:""
    })
    

})