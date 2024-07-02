gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
function Movingcursor() {
  var main = document.querySelector("#main")
  var crsr = document.querySelector("#cursor")

  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
  }); 
}
function page2MovingText() {

  gsap.to("#TextContain h1", {
    transform: "translateX(-130%)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers:true,
      start: "top 0%",
      end: "top -220%",
      scrub: 1,
      delay: 0.6,
      // pin:true,
    }
  })

  gsap.from("#TextContain h2", {
    transform: "translateX(-240%)",
    scrollTrigger: {
      trigger: "page2",
      scroller: "#main",
      // markers:true,
      start: "top 0%",
      end: "top -240%",
      scrub: 1,
      delay: 0.8,
      pin: true,
    }
  })

  gsap.to("#TextContain h3", {
    transform: "translateX(-140%)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers:true,
      start: "top 0%",
      end: "top -200%",
      scrub: 1,
      delay: 0.8,
      pin: true,
    }
  })
}

function swiper() {
  var swiper = new Swiper(".mySwiper1", {
    direction: "vertical",
    effect: "fade",
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
  });
}

function videospeed() {

  let vid = document.getElementById("videoW");

  function getPlaySpeed() {
    alert(vid.playbackRate);
    vid.playbackRate = 2.5;
  }

  function setPlaySpeed() {
    vid.playbackRate = 1.5;
  }
}

function page3Textanimation(){
  gsap.from("#page4 #text-container", {
    y: 40,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4 #text-container",
      scroller: "#main",
      // markers:true,
      start: "top 70%",
      end: "bottom 10%",
      scrub: 0.2,
    }
  })
}

function laodder() {
  var tl = gsap.timeline()

  tl.from("#loader h2", {
    x: -60,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  tl.from("#loader h3", {
    x: -15,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  })

  tl.to("#loader h3 ", {
    x:30,
    duration: 1,
    opacity: 0,
  })

  tl.to("#loader h2", {
    x:30,
    duration: 0.8,
    opacity: 0,
  })

  tl.to("#loader", {
    duration: 0.5,
    opacity: 0,
  })

  tl.to("#loader", {
    display: "none"
  })
}

function Page3Swiper(){
  var swiper = new Swiper(".mySwiper2", {
   slidesPerView:"auto", 
  // centeredSlides: true,
  loop:true,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
});
}

Movingcursor();
page2MovingText();
swiper();
videospeed();
page3Textanimation();
laodder();
Page3Swiper();