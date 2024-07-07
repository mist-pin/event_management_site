// document.addEventListener("DOMContentLoaded", (event) => {});
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)

// book-now
Draggable.create(".book-now", {
    bounds: "body",
    inertia: true
});

// intro-page
gsap.from(".brand-name", {
    opacity: .1,
    scale: 2,
    duration: 1
})
gsap.from(".arrow-down", {
    opacity: 0,
    duration: 3
})

// horizontal scroll
let pinBoxes = document.querySelectorAll(".info-container > *");
let pinWrap = document.querySelector(".info-container");
let pinWrapWidth = pinWrap.offsetWidth;
let horizontalScrollLength = pinWrapWidth - window.innerWidth;
gsap.to(".info-container", {
    scrollTrigger: {
        scrub: true,
        trigger: ".info-container",
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: pinWrapWidth,
        snap: 0.5
    },
    x: -horizontalScrollLength,
    ease: "none"
});





// ScrollTrigger.create(
//     {
//         trigger: "#about",
//         start: "center center",
//         pin: true,
//         onEnter: () => {
//             gsap.to(".intro-section", { backgroundColor: "black" }),
//                 gsap.to("nav", { backgroundColor: "white" })
//         },
//         onLeaveBack: () => gsap.to(".intro-section", { backgroundColor: "white" }),
//     }
// )