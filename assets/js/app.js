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


const container = document.querySelectorAll('.container');
const titleMainTitle = document.querySelectorAll('.title main-title');
const sparkle = document.querySelectorAll('.inline-image has-sparkles has-sparkles-alt');


for(let i = 0; i < container.length; i++) {
  container[i].addEventListener('mousemove', (e) => {
   titleMainTitle[i].style.opacity = 1;
   titleMainTitle[i].style.transform = `transition(-100%, -50% ) rotate(5deg)`;
    sparkle[i].style.transform = 'scale(1, 1)';
   titleMainTitle[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
   titleMainTitle[i].style.opacity = 0;
   titleMainTitle[i].style.transform = `transition(-50%, -50%) rotate(-5deg)`;
    sparkle[i].style.transform = 'scale(0.8, 0.8)';
  })
}
