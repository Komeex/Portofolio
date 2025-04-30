
 // Menu toggle functionality
 const menuToggle = document.getElementById('menu-toggle');
 const menuOverlay = document.getElementById('menu-overlay');
 const hamburgerTop = document.getElementById('hamburger-top');
 const hamburgerMiddle = document.getElementById('hamburger-middle');
 const hamburgerBottom = document.getElementById('hamburger-bottom');
 const menuItems = document.querySelectorAll('.menu-item');
 
 let isMenuOpen = false;
 
 function toggleMenu() {
     isMenuOpen = !isMenuOpen;
     
     // Transform hamburger to X
     if (isMenuOpen) {
         // Show the menu
         menuOverlay.classList.remove('-translate-x-full');
         menuOverlay.classList.add('translate-x-0');
         
         // Animate hamburger to X
         hamburgerTop.classList.add('rotate-45');
         hamburgerTop.classList.add('translate-y-3');
         hamburgerMiddle.classList.add('opacity-0');
         hamburgerBottom.classList.add('-rotate-45');
         hamburgerBottom.classList.add('-translate-y-1');
     } else {
         // Hide the menu
         menuOverlay.classList.remove('translate-x-0');
         menuOverlay.classList.add('-translate-x-full');
         
         // Animate X back to hamburger
         hamburgerTop.classList.remove('rotate-45');
         hamburgerTop.classList.remove('translate-y-3');
         hamburgerMiddle.classList.remove('opacity-0');
         hamburgerBottom.classList.remove('-rotate-45');
         hamburgerBottom.classList.remove('-translate-y-1');
     }
 }
 
 menuToggle.addEventListener('click', toggleMenu);
 
 // Close menu when menu item is clicked
 menuItems.forEach(item => {
     item.addEventListener('click', () => {
         if (isMenuOpen) {
             toggleMenu();
         }
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


// setTimeout(() => {
//     $(".overflow-preloader h1").addClass("active");
//     setTimeout(() => {
//       $(".icon-persen").addClass("active");
//       $(".screen-preloader").addClass("active");
//       setTimeout(() => {
//         $(".preloader").addClass("nonactive");
//       }, 6100);
//       animate(counter3, 5);
//       animate(document.querySelector(".counter-2"), 6);
//       animate(document.querySelector(".counter-1"), 2, 4);
//     }, 500);
//   }, 200);

//   const counter3 = document.querySelector(".counter-3");

//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 10; j++) {
//       const div = document.createElement("h1");
//       div.className = "num";
//       div.textContent = j;
//       counter3.appendChild(div);
//     }
//   }

//   const finalDiv = document.createElement("h1");
//   finalDiv.className = "num";
//   finalDiv.textContent = "0";
//   counter3.appendChild(finalDiv);

//   function animate(counter, duration, delay = 0) {
//     const numHeight = counter.querySelector(".num").clientHeight;
//     const totalDistance =
//       counter.querySelectorAll(".num").length * numHeight;
//     gsap.to(counter, {
//       y: -totalDistance,
//       duration: duration,
//       delay: delay,
//       ease: "power2.inOut",
//     });
//   }