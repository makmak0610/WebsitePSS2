// const SVGs = document.querySelectorAll('#support path');
// SVGs.forEach(path => {
//   console.log(path.getTotalLength());
// });

function locomotiveJs() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "..main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

};

locomotiveJs();

function navBarAnimation() {
  gsap.to("nav", {
    // color: red,
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: ".main",
      start: "top 0%",
      end: "top -5%",
      scrub: true,
    }
  });

  // gsap.to(".links", {
  //   // color: red,
  //   transform: "translateY(-100%)",
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     scroller: ".main",
  //     start: "top 0%",
  //     end: "top -5%",
  //     scrub: true,
  //   }
  // });
  // gsap.to(".nav-icon", {
  //   // color: red,
  //   transform: "translateY(-100%)",
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     scroller: ".main",
  //     start: "top 0%",
  //     end: "top -5%",
  //     scrub: true,
  //   }
  // });
}

navBarAnimation();


function pageTitleAnimation() {

  // Home Page
  gsap.from("#page1 .h1-first", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.4,
  })
  
  gsap.from("#page1 .h1-second", {
    y: 100,
    opacity: 0,
    delay: 0.8,
    duration: 0.8,
    stagger: 0.4,
  })

  
  gsap.from("#page2", {
    y: 100,
    opacity: 0,
    delay: 1.2,
    duration: 0.8,
    stagger: 0.4,
  })
}

pageTitleAnimation();


function navDrawertoggle() {

  const showMenu = document.querySelector(".ri-menu-line");
  const hideMenu = document.querySelector(".ri-close-line");
  const navDrawer = document.querySelector(".nav-drawer");
  const nav = document.querySelector('.nav-icon');

  showMenu.addEventListener('click', function () {
    // navDrawer.style.transform = 'translateX()0 1s ease-in-out';
    // transition: right 0.3s ease;
    showMenu.style.transform = 'translateX(-100px)';
    hideMenu.style.transform = 'translateX(0)';
    navDrawer.style.right = '0';

    // gsap.to(".nav-icon", {
    //   // color: red,
    //   // transform: "translateY(0)",
    //   opacity: 1,
    //   scrollTrigger: {
    //     // trigger: "",
    //     scroller: ".main",
    //     start: "top 0%",
    //     end: "top -5%",
    //     scrub: false,
    //   }
    // });
    // nav.style.position = 'fixed';

    // for click on div in one line no need two variables
    // navDrawer.style.right = navDrawer.style.right === '0px' ? '-275px' : '0px';

  });

  hideMenu.addEventListener('click', function () {
    hideMenu.style.transform = 'translateX(100px)';
    showMenu.style.transform = 'translateX(0)';
    navDrawer.style.right = '-500px'

    // gsap.to(".nav-icon", {
    //   // color: red,
    //   transform: "translateY(-100px)",
    //   opacity: 0,

    //   scrollTrigger: {
    //     trigger: "#page1",
    //     scroller: ".main",
    //     start: "top 0%",
    //     end: "top -5%",
    //     scrub: true,
    //   }

    // });

  });

}

navDrawertoggle();



function jumpTo(pageName) {
  window.location.href = pageName;
}