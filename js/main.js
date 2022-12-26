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

    /*=============================== PARALLAX ================================ */

    let parallax = new Rellax('.parallax');

    /*=============================== GSAP ANIMATION ================================ */
    gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1 } )
    gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3 } )
    gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5 } )
    gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6 } )
    gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7 } )
    gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8 } )
    gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8 } )
    gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1 } )

    /* ======================= SCROLLREVEAL =========================== */

    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400
    })

    sr.reveal(`.about__data`, {origin: 'right'})
    sr.reveal(`.about__img`, {origin: 'left'})
    sr.reveal(`.celebrate__img`, {origin: 'right'})
    sr.reveal(`.celebrate__data`, {origin: 'left'})
    sr.reveal(`.send__card`, {interval: 100})
    sr.reveal(`.footer`)