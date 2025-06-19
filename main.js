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

  $(".box-history").mouseenter(function(){
      $(".inner-cursor").addClass("active");
  });
  
  $(".box-history").mouseleave(function(){
      $(".inner-cursor").removeClass("active");
  });

  $(".contact_us").mouseenter(function(){
      $(".inner-cursor").addClass("active");
  });
  
  $(".contact_us").mouseleave(function(){
      $(".inner-cursor").removeClass("active");
  });
});




// typed js
 const typed = new Typed('#text_type', {
  strings: ['Student.', 'Newbie','Begginer Web Developer','Front-End Developer'],
  typeSpeed: 80,
  startDelay: 500,
  loop: true,
  backSpeed: 50,

});

// lenis scroll
document.addEventListener('touchstart', () => {}, { passive: true });

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


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


// my project slid horizontal
// Register GSAP ScrollTrigger
        
        // Set current year
        document.getElementById('now-date-history').textContent = new Date().getFullYear();

        // Calculate dimensions
        function calculateDimensions() {
            const boxHistory = document.querySelector('.box-history');
            const boxHistoryCount = document.querySelectorAll('.box-history').length;
            const screenWidth = window.innerWidth;
            
            if (!boxHistory) return { moveDistance: 0 };
            
            const boxWidth = boxHistory.offsetWidth;
            const gap = 50; // Gap between boxes
            const padding = 100; // Total padding (50px each side)
            
            // Calculate total width of all boxes including gaps
            const totalWidth = (boxWidth * boxHistoryCount) + (gap * (boxHistoryCount - 1)) + padding;
            
            // Distance to move = total width minus screen width
            const moveDistance = totalWidth - screenWidth;
            
            return { moveDistance: Math.max(0, moveDistance) };
        }

        // Update timeline progress
        function updateTimelineProgress(progress) {
            const fgLine = document.querySelector('.fg-line-history');
            const timeLine = document.querySelector('.inner-time-line');
            
            // Update progress line width
            if (fgLine) {
                fgLine.style.width = `${progress * 100}%`;
            }
            
            // Add active class when progress > 0
            if (timeLine) {
                if (progress > 0.1) {
                    timeLine.classList.add('active');
                } else {
                    timeLine.classList.remove('active');
                }
            }
        }

        // Initialize animation
        function initScrollAnimation() {
            const { moveDistance } = calculateDimensions();
            
            // Kill existing ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            
            // Horizontal scroll animation
            gsap.to(".inner-history", {
                x: -moveDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: ".area-history",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    pin: ".outer-history",
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        // Update timeline progress
                        updateTimelineProgress(self.progress);
                    }
                }
            });

            // Animate boxes on scroll
            gsap.utils.toArray(".box-history").forEach((box, index) => {
                gsap.fromTo(box, 
                    {
                        opacity: 0.7,
                        y: 50,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".area-history",
                            start: `${index * 20}% top`,
                            end: `${(index + 1) * 20}% top`,
                            scrub: 1
                        }
                    }
                );
            });
        }

        // Initialize on load
        window.addEventListener('load', () => {
            initScrollAnimation();
        });

        // Reinitialize on resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initScrollAnimation();
            }, 250);
        });

        // Add hover effects
        document.querySelectorAll('.box-history').forEach(box => {
            box.addEventListener('mouseenter', () => {
                gsap.to(box, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            box.addEventListener('mouseleave', () => {
                gsap.to(box, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Add loading animation
        gsap.from("h2", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".inner-time-line", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.8,
            ease: "power3.out"
        });