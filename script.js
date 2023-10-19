function videoMouseAnimate() {
    var video = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");  

    video.addEventListener('mouseenter', function() {
        gsap.to(playbtn, {
            opacity: "1",
            scale: "1",
            duration: "0.3"
        })
    })

    video.addEventListener('mouseleave', function() {
        gsap.to(playbtn, {
            opacity: "0",
            scale: "0",
            duration: "0.3"
        })
    })

    video.addEventListener('mousemove', function(dets) {
        gsap.to(playbtn, {
            left: dets.x-55,
            top: dets.y-55,
            duration: 0.1,
        })
    })

}
function headingAnimate() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: "0",
        duration: 0.6,
        delay: 0.5,
        stagger: 0.3
    })    

    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: "0",
        duration: 0.3,
        delay: 1.0,
    })    
}
videoMouseAnimate();
headingAnimate();

