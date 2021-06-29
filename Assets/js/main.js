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
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const themeName = document.getElementById('theme-name')



// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //change theme name
    if(themeName.innerText === 'Dark mode') {
        themeName.innerText = 'Light mode'
    } else if(themeName.innerText === 'Light mode'){
        themeName.innerText = 'Dark mode'
    }
})



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2300,
    reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card, .sponsor__content, .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100, 
});

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
    origin: 'left', 
})

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
    origin: 'right',
    interval: 100, 
})