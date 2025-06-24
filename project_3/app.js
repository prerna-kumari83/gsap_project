function breakText(){
    var h1=document.querySelector("h1");        //tag full tag

var h1Text=h1.textContent               //TEXT IN H1

var splittedText=h1Text.split("")

var half=Math.floor(splittedText.length/2);

var clutter=""

splittedText.forEach((e,idx)=>{
    if(idx<half){
        clutter+=`<span class='a'>${e}</span>`
    }
    else{
        clutter+=`<span class='b'>${e}</span>`
    }
})
h1.innerHTML=clutter

}


breakText();

gsap.from("h1 .a",{
    y:70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.1

})
gsap.from("h1 .b",{
    y:70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.1

})

