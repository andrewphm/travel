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
    if(window.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
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
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

const playPause = () => {
    if(videoFile.paused){
        // Play video
        videoFile.play()

        // Change the icon from play to pause
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause()
        // Change icons back to idle state
        videoIcon.classList.add('ri-play-line');
        videoIcon.classList.remove('ri-pause-line');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// When the video ends, reset button icon
videoFile.addEventListener('ended', finalVideo);


/*==================== SHOW SCROLL UP ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL REVEAL ANIMATION ====================*/

/*==================== DARK LIGHT THEME ====================*/
