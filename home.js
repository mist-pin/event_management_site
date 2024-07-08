// document.addEventListener("DOMContentLoaded", (event) => {});
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)

//overall scroll snap
// gsap.to(window, {
//     scrollTrigger: {
//         snap: .5
//     }
// })

//nav-link
document.querySelectorAll(".nav-link").forEach(
    link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("href");
            gsap.to(window, {
                duration: 1,
                scrollTo: target
            })
        })
    }
)

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

// info-holder horizontal scroll
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
        snap: 0.5,
        onEnter: () => {
            gsap.to(".intro-section", { backgroundColor: "black" }),
                gsap.to("nav", { backgroundColor: "white" })
        },
        onLeaveBack: () => {
            gsap.to(".intro-section", { backgroundColor: "#d3f0e2" }),
                gsap.to("nav", { backgroundColor: "white" })
        },
    },
    x: -horizontalScrollLength,
    ease: "none"
});
