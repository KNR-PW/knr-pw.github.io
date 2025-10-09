const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");
const navMobileSection = document.querySelectorAll('.navbar-link');

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});


navMobileSection.forEach((link) => {
    link.addEventListener('click', () => {
        if (link.hasAttribute('href')) {
            nav.classList.remove("open");
        };
    });
});

window.addEventListener(
  "resize", () => {
    if (document.body.clientWidth > 870) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);

function addActiveNav(navItemsSelector, activeSelector){
    const nav = document.querySelectorAll(navItemsSelector);
    nav.forEach(nav_item => {
        nav_item.addEventListener('click', (e)=>{
            if(!e.target.querySelector("i") && !e.target.classList.contains("fas")){
                nav.forEach(i => {
                    if(i.classList.contains(activeSelector)){
                        i.classList.remove(activeSelector);
                    }
                });
                e.target.classList.add(activeSelector);
            }
        });
    });
}


function clickBars(navSelector, navItemsSelector, barsSelector){
    const nav = document.querySelector(navSelector),
    menuItem = document.querySelectorAll(navItemsSelector),
    hamburger = document.querySelector(barsSelector);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('navbar-mobile');
        hamburger.children[0].classList.toggle('fa-bars');
        hamburger.children[0].classList.toggle('fa-times');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            nav.classList.remove('navbar-mobile');
            hamburger.children[0].classList.toggle('fa-bars');
            hamburger.children[0].classList.toggle('fa-times');
        });
    });
}

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggle = document.querySelector('.dropdown-toggle');
//     const dropdownMenu = document.querySelector('.dropdown-menu');
//     let timeout;

//     dropdownToggle.addEventListener('click', function(){
//         dropdownMenu.classList.toggle('dropdown-menu-shown')
//     });

//     function hideDropdownMenu(){
//         dropdownMenu.classList.remove('dropdown-menu-shown')
//     };

//     dropdownMenu.addEventListener('mouseenter', () => {
//         clearTimeout(timeout);
//     });

//     dropdownMenu.addEventListener('mouseleave', () => {
//         timeout = setTimeout(hideDropdownMenu, 500);
//     });
// });

// function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
//     let offset = 0;
//     let slideIndex = 1;

//     const slides = document.querySelectorAll(slide),
//         slider = document.querySelector(container),
//         prev = document.querySelector(prevArrow),
//         next = document.querySelector(nextArrow),
//         slidesWrapper = document.querySelector(wrapper),
//         width = window.getComputedStyle(slidesWrapper).width,
//         slidesField = document.querySelector(field);


//     slidesField.style.width = 100 * slides.length + '%';
//     slidesField.style.display = 'flex';
//     slidesField.style.transition = '0.5s all';

//     slidesWrapper.style.overflow = 'hidden';

//     slides.forEach(slide => {
//         slide.style.width = width;
//     });

//     slider.style.position = 'relative';

//     const indicators = document.createElement('ol'),
//           dots = [];
//     indicators.classList.add('carousel-indicators');
//     indicators.style.cssText = `
//         position: absolute;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         z-index: 15;
//         display: flex;
//         justify-content: center;
//         margin-right: 15%;
//         margin-left: 15%;
//         list-style: none;
//         margin-bottom: 30px;
//     `;
//     slider.append(indicators);

//     for (let i = 0; i < slides.length; i++) {
//         const dot = document.createElement('li');
//         dot.setAttribute('data-slide-to', i + 1);
//         dot.style.cssText = `
//             box-sizing: content-box;
//             flex: 0 1 auto;
//             width: 40px;
//             height: 6px;
//             margin-right: 5px;
//             margin-left: 5px;
//             cursor: pointer;
//             background-color: #fff;
//             background-clip: padding-box;
//             border-top: 10px solid transparent;
//             border-bottom: 10px solid transparent;
//             opacity: .5;
//             transition: opacity .6s ease;
//         `;
//         if (i == 0) {
//             dot.style.opacity = 1;
//         }
//         indicators.append(dot);
//         dots.push(dot);
//     }

//     next.addEventListener('click', () => {
//         if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
//             offset = 0;
//         } else {
//             offset += deleteNotDigits(width);
//         }
//         console.log(deleteNotDigits(width));
//         console.log(offset);

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == slides.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");
//         dots[slideIndex-1].style.opacity = 1;
//     });

//     prev.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = deleteNotDigits(width) * (slides.length - 1);
//         } else {
//             offset -= deleteNotDigits(width);
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1) {
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");
//         dots[slideIndex-1].style.opacity = 1;
//     });

//     dots.forEach(dot => {
//         dot.addEventListener('click', (e) => {
//             const slideTo = e.target.getAttribute('data-slide-to');

//             slideIndex = slideTo;
//             offset = deleteNotDigits(width) * (slideTo - 1);

//             slidesField.style.transform = `translateX(-${offset}px)`;

//             dots.forEach(dot => dot.style.opacity = ".5");
//             dots[slideIndex-1].style.opacity = 1;
//         });
//     });

//     function deleteNotDigits(str) {
//         return parseFloat(str);
//         // return +str.replace(/\D/g, '');
//     }
// }

window.addEventListener('DOMContentLoaded', function() {
    // addActiveNav('.navbar-link', 'active');
    // clickBars('.navbar', '.navbar-link', '.mobile-nav-bars');
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    // slider({
    //     container: '.project-start__slider',
    //     slide: '.project-start__item',
    //     nextArrow: '.project-start__slider-next',
    //     prevArrow: '.project-start__slider-prev',
    //     wrapper: '.project-start__wrapper',
    //     field: '.project-start__inner'
    // });
});



$(document).ready(function(){
    $('.projects__item-slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });
    $('.sponsors__slider').slick({
        dots: true, // Włącza kropki nawigacyjne
        arrows: false, // Wyłącza strzałki
        infinite: true, // Nieskończone przewijanie
        slidesToShow: 4, // Liczba widocznych slajdów
        slidesToScroll: 4, // Liczba przewijanych slajdów na raz
        autoplay: true, // Automatyczne przewijanie
        autoplaySpeed: 3000, // Czas między przewijaniem (w ms)
        responsive: [
          {
            breakpoint: 1000, // Dla ekranów poniżej 1000px
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3, // Liczba widocznych slajdów
            },
          },
          {
            breakpoint: 480, // Dla ekranów poniżej 480px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, // Liczba widocznych slajdów
            },
          },
        ],
      });
    $('.project-start__slider').slick({
        arrows: false,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true
    });
});
