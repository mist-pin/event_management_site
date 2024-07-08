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
document.querySelector(".show_contact_info").addEventListener("click", function (e) {
    e.preventDefault();
    target = document.querySelector(".contact-secton ")
    if (target.style.display == "none") {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }
})

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
            gsap.to("nav", { backgroundColor: "white" })
        },
        onLeaveBack: () => {
            gsap.to("nav", { backgroundColor: "" })
        },
    },
    x: -horizontalScrollLength,
    ease: "none"
});

gsap.to(".intro-section", {
    backgroundColor: "black",
    scrollTrigger: {
        scrub: true,
        start: "top top",
        trigger: ".intro-section",
    }
})

//about section
gsap.to(".about-holder", {
    opacity: 0,
    backgroundColor: "rgb(90, 197, 179)",
    scrollTrigger: {
        trigger: ".about-holder",
        start: "center center",
        end: "center top",
        pin: true,
        scrub: true,
    }
})

//gallery
gsap.from(".img-holder", {
    height: "50%",
    scrollTrigger: {
        trigger: ".img-holder",
        scrub: true,
        start: "top 80%",
        end: "top 10%",
        markers: true,
    }
})

// reviews
