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

  // Animation 1 scroll fixed animations
const observeSlideUp2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
      if(entry.isIntersecting){
        entry.target.classList.add('defaultPosition');
      }
    });
  });
  
  const slideUpSections2 = document.querySelectorAll(".scrollAnimationFixed");
  slideUpSections2.forEach((ele) => observeSlideUp2.observe(ele));