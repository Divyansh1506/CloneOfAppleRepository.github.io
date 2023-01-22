// tl = gsap.timeline()
// t2 = gsap.timeline()

// tl.from(".aa",{
//     x :-1200,
//     duration :1,
// })
// tl.from(".bb",{
//     x :-1200,
//     duration: 1,
// })
// t2.from(".cc",{
//     x :1200,
//     duration :1,
// })
// t2.from(".dd",{
//     x :1200,
//     duration :1,
// })




// gsap.from("footer",{
//     y : 1000,
//     duration : 2
// })







document.querySelector("#Mac").addEventListener("click",function(dets){
    document.querySelector("#index1").style.display="none"  
})

document.querySelector("#Mac").addEventListener("click",function(dets){
    document.querySelector("#index2").style.display="block"  
})

document.querySelector("#AppleIcon").addEventListener("click",function(dets){
    document.querySelector("#index1").style.display="block"  
})
document.querySelector("#AppleIcon").addEventListener("click",function(dets){
    document.querySelector("#index2").style.display="none"  
})