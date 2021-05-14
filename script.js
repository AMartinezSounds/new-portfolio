"strict mode";

const navbarSquare = document.querySelector(".navbar__lines");
const lineMenu1 = document.querySelector(".line-1");
const lineMenu2 = document.querySelector(".line-2");
const lineMenu3 = document.querySelector(".line-3");
const navBar = document.querySelector(".navbar-links");
const navBarLinks = document.querySelectorAll(".navbar-link");

navbarSquare.addEventListener("click", () => {
  navbarSquare.classList.toggle("lines-toggle");
  lineMenu1.classList.toggle("change1");
  lineMenu2.classList.toggle("change2");
  lineMenu3.classList.toggle("change3");
  navBar.classList.toggle("showNavbar");
});
  
navbarSquare.addEventListener("click", () => {
  navbarSquare.classList.toggle("border-white");
  lineMenu1.classList.toggle("line-black");
  lineMenu3.classList.toggle("line-black");
});


const landingPage = document.querySelector('#landing-page');
const landingPageOptions = {};
const landingPageObserver = new IntersectionObserver(function(entries, landingPageObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      navbarSquare.classList.add('lines-intersection-1');
      lineMenu1.classList.add('line-intersection-1');
      lineMenu2.classList.add('line-intersection-1');
      lineMenu3.classList.add('line-intersection-1');
    } else {
      navbarSquare.classList.remove('lines-intersection-1');
      lineMenu1.classList.remove('line-intersection-1');
      lineMenu2.classList.remove('line-intersection-1');
      lineMenu3.classList.remove('line-intersection-1');
    }
  })
}, landingPageOptions);
landingPageObserver.observe(landingPage);


const aboutMe = document.querySelector('#about-me');
const aboutMeOptions = {};
const aboutMeObserver = new IntersectionObserver(function(entries, aboutMeObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      navbarSquare.classList.add('lines-intersection-2');
      lineMenu1.classList.add('line-intersection-2');
      lineMenu2.classList.add('line-intersection-2');
      lineMenu3.classList.add('line-intersection-2');
    } else {
      navbarSquare.classList.remove('lines-intersection-2');
      lineMenu1.classList.remove('line-intersection-2');
      lineMenu2.classList.remove('line-intersection-2');
      lineMenu3.classList.remove('line-intersection-2');
    } 
  })
}, aboutMeOptions);
aboutMeObserver.observe(aboutMe);

const portfolio = document.querySelector('#portfolio');
const portfolioOptions = {};
const portfolioObserver = new IntersectionObserver(function(entries, portfolioObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      navbarSquare.classList.remove('lines-intersection-2');
      lineMenu1.classList.remove('line-intersection-2');
      lineMenu2.classList.remove('line-intersection-2');
      lineMenu3.classList.remove('line-intersection-2');
    } else {
      navbarSquare.classList.add('lines-intersection-1');
      lineMenu1.classList.add('line-intersection-1');
      lineMenu2.classList.add('line-intersection-1');
      lineMenu3.classList.add('line-intersection-1');
    } 
  })
}, portfolioOptions);
portfolioObserver.observe(portfolio);


// Smooth Scroll

function smoothScroll(target, duration) {
  let targetToGo = document.querySelector(target);
  let targetPosition = targetToGo.offsetTop;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

const navbarHome = document.querySelector("#navbar-home");

navbarHome.addEventListener("click", () => {
  smoothScroll("#landing-page", 1000);
});

const navbarAbout = document.querySelector("#navbar-about");

navbarAbout.addEventListener("click", () => {
  smoothScroll("#about-me", 1000);
});

const navbarPortfolio = document.querySelector("#navbar-portfolio");

navbarPortfolio.addEventListener("click", () => {
  smoothScroll("#portfolio", 1000);
});

const navbarContact = document.querySelector("#navbar-contact");

navbarContact.addEventListener("click", function (e) {
  e.preventDefault();
  smoothScroll("#contact-section", 1000);
});

const contactButton = document.querySelector(".contact-button");

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll("#contact-section", 1000);
});

