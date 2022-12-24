const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')

console.log(navMenu)
console.log(navToggle)
console.log(navClose)


//================= MENU SHOW ======================
/* Validate if constant exists */

if(navToggle){
  navToggle.addEventListener('click',() =>{
    navMenu.classList.add('show-menu')
  })
}

//================= MENU HIDDEN ======================
/* Validate if constant exists */

if(navClose){
  navClose.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')

  })
}
