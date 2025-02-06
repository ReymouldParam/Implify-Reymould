//////////////////////////////
// Animations on scroll 
////////////////////////////

// Animation 1 scrollanimations
const observeSlideUp = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
      if(entry.isIntersecting){
        entry.target.classList.add('defaultPosition');
      }else{
        entry.target.classList.remove('defaultPosition');
      }
    });
  });
  
  const slideUpSections = document.querySelectorAll(".scrollAnimation");
  slideUpSections.forEach((ele) => observeSlideUp.observe(ele));

  // Animation 2 scroll fixed animations
const observeSlideUp2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
      if(entry.isIntersecting){
        entry.target.classList.add('defaultPosition');
      }
    });
  });
  
  const slideUpSections2 = document.querySelectorAll(".scrollAnimationFixed");
  slideUpSections2.forEach((ele) => observeSlideUp2.observe(ele));

    // Animation 3 width expand animations
const observeSlideUp3 = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if(entry.isIntersecting){
      entry.target.classList.add('defaultWidth');
    }else{
      entry.target.classList.remove('defaultWidth');
    }
  });
});

const slideUpSections3 = document.querySelectorAll(".widthAnimation");
slideUpSections3.forEach((ele) => observeSlideUp3.observe(ele));

// Mobile nav toggle

function toggleMobileNav(){
  $('.navbar .toggle-nav-list').slideToggle('fast');
}

function toggleMobileNavDropdown(){
  $('.navbar .toggle-nav-list .dropdown').slideToggle('fast');
}

// navbar highlight with active nav-item
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash
  const navLinks = document.querySelectorAll(".nav-list-container .nav-item a, .toggle-nav-list .nav-item a");

  navLinks.forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, ""); // Normalize paths

      if (linkPath === currentPath) {
          link.parentElement.classList.add("active"); // Highlight the parent nav-item
      }
  });
});

