/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    });
}

/*==================== HIDE MENU ====================*/
/* Validate if constant exists */ 
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
// Use querySelectorAll to return an array of all elements with css class selector .nav__link
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
// Add eventlistener to each nav link element
navLink.forEach(e => e.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    //check to see if window.scrollY
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SWIPER DISCOVER ====================*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    // infinite loop
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
});


/*==================== VIDEO ====================*/

/*==================== SHOW SCROLL UP ====================*/
