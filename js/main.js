/*================= SHOW MENU =====================*/

const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navUpperBarShow = document.querySelector('.upper-bar-open')
const header = document.querySelector('.header')

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

  /*================= REMOVE MENU MOBILE =====================*/
 const navLink = document.querySelectorAll('.nav__link')

 console.log(navLink)

 // When we click on each link, we remove the show-menu class

 navLink.forEach((link) =>{
  link.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')
    navUpperBarShow.style.display='flex'
  })
 })

   /*================= CHANGE BACKGROUND HEADER ==================*/

    window.addEventListener('scroll',() =>{
      this.scrollY >= 50 ? header.classList.add('bg-header')
                         : header.classList.remove('bg-header')
    })


    /*================= SHOW SCROLL UP ==================*/

    window.addEventListener('scroll',() => {
      const scrollUp = document.querySelector('.scrollup')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
    })

    /*================= SHOW SECTIONS ACTIVE LINK ================*/

    const sections = document.querySelectorAll('section[id]')

    console.log(sections)

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
    })

    window.addEventListener('scroll',()=> {
      const scrollY = window.pageYOffset
    })