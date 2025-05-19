// nav js

document.addEventListener("DOMContentLoaded", function () {
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", {y: 225});

  const timeline = gsap.timeline({paused: true});

  timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut"
  });

  timeline.to(".menu-item p", {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out"
  }, "-=1");

  timeline.to(activeItemIndicator, {
      width: "100%",
      duration: 0,
      ease: "power4.out",
      delay: 0.5
  }, "<");

  toggleButton.addEventListener("click", function(){
      if (isOpen) {
          timeline.reverse();
      } else {
          timeline.play();
      }
      isOpen = !isOpen;
  });
});



// following cursor
$(document).ready(function() {
  let cursor = $("#cursor");
  let wind = window.innerWidth;
  let innerCursor = $(".inner-cursor");
      
  function movecursor(e) {
      let widthcursor = $("#cursor").width()/2;
      wind = window.innerWidth;

      if(e.clientX > wind / 2){
          gsap.to(cursor, {
          duration: 0.3,
          delay:0.1,
          x: e.clientX - widthcursor,
          y: e.clientY -  widthcursor,
          ease: "power2.out"
      });
      }else{
          gsap.to(cursor, {
          duration: 0.3,
          delay:0.1,
          x: e.clientX - widthcursor,
          y: e.clientY -  widthcursor,
          ease: "power2.out"
      });
      }
  }

  $(window).on('mousemove', movecursor);
  $(window).resize(movecursor);

  $(".category").mouseenter(function(){
      $(".inner-cursor").addClass("active");
  });
  
  $(".category").mouseleave(function(){
      $(".inner-cursor").removeClass("active");
  });
  $(".overlay").mouseenter(function(){
      $(".inner-cursor").addClass("active");
  });
  
  $(".overlay").mouseleave(function(){
      $(".inner-cursor").removeClass("active");
  });
});




// typed js
 const typed = new Typed('#text_type', {
  strings: ['Student.', 'Newbie','Begginer Web Developer','Front-End Developer'],
  typeSpeed: 80,
  startDelay: 7500,
  loop: true,
  backSpeed: 50,

});

// lenis scroll
const lenis = new Lenis({
  lerp: 0.04, 
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



// js couters 
const counters = document.querySelectorAll(".counter");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
  const triggerPoint = container.offsetTop - container.offsetHeight - 200;

  if (window.pageYOffset > triggerPoint && !activated) {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count);
      
      // Deteksi apakah simbol khusus seperti % atau +
      const originalText = counter.textContent.trim();
      const hasPlus = originalText.includes("+");
      const hasPercent = originalText.includes("%");

      let count = 0;

      function updateCount() {
        if (count < target) {
          count++;
          counter.innerText = count + (hasPlus ? "+" : hasPercent ? "%" : "");
          setTimeout(updateCount, 20); // ⏱ ubah angka ini untuk delay
        } else {
          counter.innerText = target + (hasPlus ? "+" : hasPercent ? "%" : "");
        }
      }

      updateCount();
    });

    activated = true;
  }

  // Optional: Reset ke 0 saat discroll ke atas
  const resetPoint = container.offsetTop - container.offsetHeight - 500;
  if ((window.pageYOffset < resetPoint || window.pageYOffset === 0) && activated) {
    counters.forEach(counter => {
      const originalText = counter.textContent.trim();
      const hasPlus = originalText.includes("+");
      const hasPercent = originalText.includes("%");

      counter.innerText = "0" + (hasPlus ? "+" : hasPercent ? "%" : "");
    });
    activated = false;
  }
});






// preloader
setTimeout(() => {
    $(".overflow-preloader h1").addClass("active");
    setTimeout(() => {
      $(".icon-persen").addClass("active");
      $(".screen-preloader").addClass("active");
      setTimeout(() => {
        $(".preloader").addClass("nonactive");
      }, 6100);
      animate(counter3, 5);
      animate(document.querySelector(".counter-2"), 6);
      animate(document.querySelector(".counter-1"), 2, 4);
    }, 500);
  }, 200);

  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("h1");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("h1");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      counter.querySelectorAll(".num").length * numHeight;
    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }