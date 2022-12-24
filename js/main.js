const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navUpperBarShow = document.querySelector('.upper-bar-open')

console.log(navMenu)
console.log(navToggle)
console.log(navClose)
console.log(navUpperBarShow)


//================= MENU SHOW ======================
/* Validate if constant exists */

if(navToggle){
  navToggle.addEventListener('click',() =>{
    navMenu.classList.add('show-menu')
    navUpperBarShow.style.display='none'
  })
}

//================= MENU HIDDEN ======================
/* Validate if constant exists */

if(navClose){
  navClose.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')
    navUpperBarShow.style.display='flex'
  }
  )}
