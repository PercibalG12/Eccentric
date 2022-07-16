//!TOGGLE NAVIGATION MENU AND ICONS

const menuToggleButton = document.querySelector('.menu-toggle-button')
const menuElement = document.querySelector('.menu')

const toggleMenu = () =>{
    menuElement.classList.toggle('active')
    menuToggleButton.classList.toggle('active')
};

menuToggleButton.addEventListener('click', toggleMenu)
// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active')
        menuToggleButton.classList.remove('active')
        console.log('yeaaaaaaaaaaaaaaaaaa')
    } 
}
document.addEventListener('click', removeActiveLinkClass)

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button')
const bodyElement = document.body
const currentTheme =localStorage.getItem('darkTheme')



if(currentTheme){
    bodyElement.classList.add('dark-theme')
}

const toggleTheme = () =>{
    bodyElement.classList.toggle('dark-theme');

if (bodyElement.classList.contains('dark-theme')) {
    localStorage.setItem('darkTheme','active')
} else {
    localStorage.removeItem('darkTheme')
}
};

themeToggleButton.addEventListener('click', toggleTheme)
// !SCROLL REVEAL

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.main-title', {origin: 'top'})
sr.reveal('.teck-stack-item', {interval: 250})
sr.reveal('.logo',{origin: 'left'})
sr.reveal('.description',{origin: 'left'})
sr.reveal('.navbar-buttons',{origin: 'right'})
sr.reveal('.project-heading',{origin: 'top'})
sr.reveal('.project-filter',{origin: 'right'})
sr.reveal('.project-box',{interval: '250'})


const link2 = document.querySelectorAll('.link2');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link2.length; i++) {
  link2[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `transition(-100%, -50% ) rotate(5deg) `;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link2[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `transition(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}
