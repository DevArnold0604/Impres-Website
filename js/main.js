
const btnMenu=document.getElementById("menu-btn");
const menu=document.getElementById("menu");
const container=document.getElementById("container");

const submenu=document.getElementById('submenu');
const menuList=document.getElementById('menu-list');

btnMenu.addEventListener('mouseout',()=>{
  menu.classList.remove('show');
})
btnMenu.addEventListener('click',()=>{
  menu.classList.toggle('show');
})

menuList.addEventListener('mouseover',()=>{
  if(innerWidth>450) submenu.classList.add('visible');
})
menuList.addEventListener('mouseout',()=>{
  if(innerWidth>450) submenu.classList.remove('visible');
})


//Carousel with Glider.js
addEventListener('load',()=>{
    const list = document.querySelector('.carousel-list');
    new Glider(list,{
        slidesToShow : 1,
        dots: '.carousel-indicator',
        arrows: {
            prev: '.carousel-prev',
            next: '.carousel-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                }
              }
        ]
    });
})

window.sr = ScrollReveal();
sr.reveal('.nav',{
  duration: 2000
});

sr.reveal('.carousel',{
  duration:2000,
  origin: 'left',
  distance: '150px'
})

sr.reveal('.content',{
  duration:2000,
  origin: 'left',
  distance: '100px'
})
sr.reveal('.text',{
  duration:2000,
  scale: 0.85
})

sr.reveal('.cards',{
  duration:2000,
  origin: 'bottom',
  distance: '150px'
})

sr.reveal('.wsp-btn',{
  duration:3000,
  origin: 'rigth',
  distance: '200px'
})

/*Contact page */
sr.reveal('.cover-page',{
  duration:3000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.contact',{
  duration:3000,
  delay: 0.5,
  origin: 'bottom',
  distance: '150px'
});

/*About page */
const clases = ['.title','.logo-img','.text','.subtitle','.profile-container'];
let d = 100;
for (const clase of clases) {
  sr.reveal(clase,{
    duration:2000,
    delay: d,
    origin: 'bottom',
    distance: '150px'
  });
  d+=100
}

/*Services*/
sr.reveal('.categories',{
  duration:2000,
});
sr.reveal('.breadhumb-container',{
  duration:2000,
  origin: 'left',
  distance: '150px'
});
sr.reveal('.content-text-main',{
  duration:2000,
  origin: 'bottom',
  distance: '100px'
});
sr.reveal('.img-container-main',{
  duration:2000,
  origin: 'bottom',
  distance: '150px'
});
sr.reveal('.img-item',{
  duration:2000,
  origin: 'bottom',
  distance: '100px'
});