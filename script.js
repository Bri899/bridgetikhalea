// SMOOTH SCROLL JS

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



// CUSTOM CURSOR

var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to (cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
    })
})




// ACCENT ANIMATIONS - SELECTED WORKS

gsap.to(".box",{
    x:70,
    y:60,
    duration:2.5,
    repeat:-1,
    yoyo:true,
    opacity:0.25,

})


gsap.to(".blue",{
    x:30,
    y:-60,
    duration:2,
    repeat:-1,
    yoyo:true,

})



// ABOUT SPLIT TEXT ANIMATION


gsap.registerPlugin(SplitText)

const spliit = new SplitText(".text", {
  type: "words,lines,chars",
  linesClass: 'line',
      tag: "div"
});

const tweeen = gsap.from(spliit.chars, {
    duration: 1,
    y: 200,
    autoAlpha: 1,
    ease: "power3",
    stagger: 0.01,
    duration:0.5,


      scrollTrigger: {
        trigger: '.about_img_descr',
        start: "top 10%",
        // end: "top 20%",
        // markers: true,

    }

});



// ABOUT TEXT BACKGROUND MOVE

gsap.from(".moveabt",{
    y:600,
    duration:0.5,
    ease: "power2.out",

    scrollTrigger: {
        trigger: '.abt_descr',
        start: "top 30%",
    }


})





// ABOUT IMAGE MOVE

gsap.from(".imgmove",{
    delay:0,
    y:500,
    duration:1.5,
    ease: "power2.out",

    scrollTrigger: {
        trigger: '.about_img_descr',
        start: "top 20%",
    }
})



// HERO LINE GROW

gsap.to(".linegrow",{
    // y:600,
    width: 5000,
    duration:5,
    yoyo:true,
    // ease: "power2.out",

    scrollTrigger: {
        trigger: '.hero_main',
        start: "top 100%",
    }


})


gsap.to(".hmove",{
    x:-600,
    // width: 5000,
    duration:2,
    transform: "translateX(-100%)",
    yoyo:true,
    // ease: "power2.out",

    // scrollTrigger: {
    //     trigger: '.hero_main',
    //     start: "top 100%",
    // }


})













// ANIM3 - testing

gsap.from(".anim3",{
    // y:600,
    duration:2,
    repeat:5,
    // transform: "translateY(100%)",
    yPercent:130,


    scrollTrigger:{
        trigger:".anim3",
        // scroller:".anim",
        start:"top 50%",
        end:"top 100%",
        // markers:true,
        // scrub:2,
        // pin:true,
    }

})


// ABOUT IMGAGE-TEXT SECTION STAGGER MOVE ANIMATION - stagger not working

// gsap.from(".abtmove",{
//     // x:70,
//     delay:0,
//     y:600,
//     duration:1.5,
//     stagger:0.5,
    
//     repeat:-1,
//     // yoyo:true,
//     // opacity:0.25,

//     scrollTrigger: {
//         trigger: '.about_wrapper',
//         start: "top 20%",
//     }


// })
