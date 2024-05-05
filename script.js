// function locomotiveAnimation(){
// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
  




//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();
// }


// locomotiveAnimation()

// gsap.from('#page1 h1',{
//     y:600,
//     // opacity:0,
//     duration:1,
//     dealy:0.5,
//     stagger:0.2,
//     // scrub:5
// })

function page1Text() {
var allText = document.querySelectorAll('.page1-text h1')

allText.forEach(function(elem){
var text = elem.textContent
var splittedText = text.split("")

clutter ="";
splittedText.forEach(function(val){
clutter += `<span>${val}</span>`

})
elem.innerHTML =clutter
})

gsap.from('.page1-text h1 span',{
opacity:0,
y:400,
stagger:0.1,
delay:0.5,
duration:0.3
})
}

page1Text()

function mouseFollower(){
    var crsr = document.querySelector('#cursor')
    
    document.addEventListener('mousemove',function(dets){
    // crsr.style.top = dets.y + 'px'
    // crsr.style.left = dets.x + 'px'
    
    gsap.to(crsr,{
        x:dets.x,
        y:dets.y
    })
    })
}  
mouseFollower()


function crsrAnimation(){
    var allimg = document.querySelectorAll('.image-div')
    var crsr = document.querySelector('#cursor')
     
    var text ="";
    allimg.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
    text = elem.getAttribute("data-text")
    // crsr.style.width = '200px'
    gsap.to(crsr,{
        width:'200px'
    })
    gsap.from('#cursor h5',{
        opacity:0,
        delay:0.2,
    })
    crsr.innerHTML = `<h5>${text}</h5><h5>${text}</h5><h5>${text}</h5>`
    })
    
    elem.addEventListener('mouseleave',function(){
        // crsr.style.width = '40px'
        gsap.to(crsr,{
            width:'40px'
        })
        crsr.innerHTML = "<h5></h5>";
    })

    })
}

crsrAnimation()


function page3Text() {
    var allText = document.querySelectorAll('.page3-text h3')
    
    allText.forEach(function(elem){
    var text = elem.textContent
    var splittedText = text.split("  ")
    
    clutter ="";
    splittedText.forEach(function(val){
    clutter += `<span>${val}</span>`
    
    })
    elem.innerHTML =clutter ;
    })
    
    gsap.from('.page3-text h3 span',{
    opacity:0,
    rotate:3,
    y:100,
    stagger:0.1,
    delay:0.5,
    duration:1
    })
    }
    
    page3Text()



    var elementConatainer = document.querySelector('.element-container')

    elementConatainer.addEventListener('mouseenter',function(){
        gsap.to('#moving-image',{
            opacity:1,
        })
    })

    elementConatainer.addEventListener('mouseleave',function(){
        gsap.to('#moving-image',{
            opacity:0,
        })
    })



    var allElements = document.querySelectorAll('.element')
  var movingImgDiv = document.querySelector('#moving-image')
var moveImg = document.querySelector('#moving-image img')

    allElements.forEach(function(elem){
        // console.log(elem);
      elem.addEventListener('mouseenter',function(){
       var image = elem.getAttribute('data-image')
         moveImg.setAttribute("src",image)
    })

    elem.addEventListener('mousemove',function(dets){
    movingImgDiv.style.left = dets.x +"px"
    movingImgDiv.style.top = dets.y +"px"
    
    })

    })



    