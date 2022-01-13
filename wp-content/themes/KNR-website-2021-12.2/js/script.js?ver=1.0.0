const $= jQuery.noConflict();
$(function() {

    let backgroundBrake= $('.projects__background-brake');
    let headerNav = $('.header__nav');
    let headerNavTabList = $('.header__nav-tab--list');

    $(window).scroll(function(event){
        let scroll = $(this).scrollTop();
        if (scroll > 400){
            $('.header__logo-img').addClass('header__logo-img--scroll');
            $('.header__list').addClass('header__list--scroll');
            $('.header').addClass('header__scroll');
        }else{
            $('.header').removeClass('header__scroll');
            $('.header__logo-img').removeClass('header__logo-img--scroll');
            $('.header__list').removeClass('header__list--scroll');
        }
    });
    $(window).scroll(function(event){
        let scroll = $(this).scrollTop();
        if (scroll > 500){
            $('.about-us__title').addClass('about-us__title--show');
        }
        if (scroll > 1050){
            $('.projects__title').addClass('projects__title--show')
        }
        if (scroll > 1150){
            $('.projects__titles').eq(0).addClass('projects__titles--show')
        }
        if (scroll > 1550){
            $('.projects__titles').eq(1).addClass('projects__titles--show')
        }
        if (scroll > 2050){
            $('.projects__titles').eq(2).addClass('projects__titles--show')
        }
        if (scroll > 2750){
            $('.projects__titles').eq(3).addClass('projects__titles--show')
        }
        // if (scroll > 3650){
        if (scroll > 3250){
            $('.contact__title').addClass('contact__title--show')
        }
        // if (scroll > 4000){
        if (scroll > 3650){
            $('.contact__titles').addClass('contact__titles--show')
        }
        // if (scroll > 4500){
        if (scroll > 4100){
            $('.sponsors__info').addClass('sponsors__info--show')
        }
    });

    (function scroll(){
        headerNav.on('click',".header__list:eq(0)",function () {
            $('html, body').animate({
                scrollTop: $('.start__container').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('click',".header__list:eq(1)",function () {
            $('html, body').animate({
                scrollTop: $('.about-us').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('click',".header__list:eq(2)",function () {
            $('html, body').animate({
                scrollTop: $('.projects').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('click',".header__list:eq(3)",function () {
            $('html, body').animate({
                scrollTop: $('.contact').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('click',".header__list:eq(4)",function () {
            $('html, body').animate({
                scrollTop: $('.sponsors').offset().top
            }, 1000, 'swing');
        });

        $('.header__logo').click(function () {
            $('html, body').animate({
                scrollTop: $('.start__container').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(0).click(function () {
            $('html, body').animate({
                scrollTop: $('.start__container').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(1).click(function () {
            $('html, body').animate({
                scrollTop: $('.about-us').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(2).click(function () {
            $('html, body').animate({
                scrollTop: $('.projects').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(3).click(function () {
            $('html, body').animate({
                scrollTop: $('.contact').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(4).click(function () {
            $('html, body').animate({
                scrollTop: $('.sponsors').offset().top
            }, 1000, 'swing');
        });
    })();

    (function onClick() {
        headerNav.on('tap',".header__list:eq(0)",function () {
            $('html, body').animate({
                scrollTop: $('.start__container').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('tap',".header__list:eq(1)",function () {
            $('html, body').animate({
                scrollTop: $('.about-us').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('tap',".header__list:eq(2)",function () {
            $('html, body').animate({
                scrollTop: $('.projects').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('tap',".header__list:eq(3)",function () {
            $('html, body').animate({
                scrollTop: $('.contact').offset().top
            }, 1000, 'swing');
        });

        headerNav.on('tap',".header__list:eq(4)",function () {
            $('html, body').animate({
                scrollTop: $('.sponsors').offset().top
            }, 1000, 'swing');
        });

        $('.header__logo').on('tap',function () {
            $('html, body').animate({
                scrollTop: $('.start__container').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(0).on('tap',function () {
            $('html, body').animate({
                scrollTop: $('.start__container').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(1).on('tap',function () {
            $('html, body').animate({
                scrollTop: $('.about-us').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(2).on('tap',function () {
            $('html, body').animate({
                scrollTop: $('.projects').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(3).on('tap',function () {
            $('html, body').animate({
                scrollTop: $('.contact').offset().top
            }, 1000, 'swing');
        });

        headerNavTabList.eq(4).on('tap',function () {
            $('html, body').animate({
                scrollTop: $('.sponsors').offset().top
            }, 1000, 'swing');
        });
    })();


    (function resize() {
        $(window).resize(function() {
            let width = $(this).width();

            if (width < 576) {
                // $('.start__video').empty();
            }

            if (width >= 576) {
                // if($('.start__video').length==0){
                //     $('.start__video').append(`
                // <video autoplay loop muted poster="css/KNR_pion_2.png" class="start__video-item">
                //     <source src="https://youtu.be/S2h1vym-xJI" type="video/mp4">
                // </video>`)
                // }
            }

            if (width < 768) {
                $('.icon-bar__delete').empty();
                headerNav.empty();
                headerNav.append(`
   <a href="https://www.facebook.com/kolo.naukowe.robotykow.knr/" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab facebook-tab"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/knr_pw/?hl=pl" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab instagram-tab"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/students-robotics-association-ko%C5%82o-naukowe-robotyk%C3%B3w-knr/about/" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab linkedin-tab"><i class="fa fa-linkedin"></i></a>
            <a href="https://m.youtube.com/user/KoloNaukoweRobotykow" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab youtube-tab"><i class="fa fa-youtube"></i></a>

<div class="header__nav-tab--button"><i class="fa fa-bars header__nav-tab--button-item" aria-hidden="true"></i></div>

                     `)
            }
            if (width >= 768) {
                $('.header__nav-tab').hide();
                $('.icon-bar__delete').append(`
        <div class="icon-bar">
            <a href="https://www.facebook.com/kolo.naukowe.robotykow.knr/" target="_blank" rel="noopener noreferrer" class="icon-bar__link facebook"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/knr_pw/?hl=pl" target="_blank" rel="noopener noreferrer" class="icon-bar__link instagram"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/students-robotics-association-ko%C5%82o-naukowe-robotyk%C3%B3w-knr/about/" target="_blank" rel="noopener noreferrer" class="icon-bar__link linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="https://m.youtube.com/user/KoloNaukoweRobotykow" target="_blank" rel="noopener noreferrer" class="icon-bar__link youtube"><i class="fa fa-youtube"></i></a>
        </div>`);

                headerNav.empty();
                headerNav.append(`
                        <li class="header__list"><div class="header__link">START</div></li>
                        <li class="header__list"><div class="header__link">O NAS</div></li>
                        <li class="header__list"><div class="header__link">PROJEKTY</div></li>
                        <li class="header__list"><div class="header__link">KONTAKT</div></li>
                        <li class="header__list"><div class="header__link">WSPIERAJĄ NAS</div>
                        </li>`);
            }
            if (width < 992) {
                $('.contact').find('.row').eq(3).addClass('center');
                backgroundBrake.find('.row').eq(0).addClass('projects__row');
                backgroundBrake.find('.row').eq(1).addClass('projects__row');
                backgroundBrake.find('.row').eq(2).addClass('projects__row');
            }
            if (width >= 992) {
                $('.contact').find('.row').eq(3).removeClass('center');
                backgroundBrake.find('.row').eq(0).removeClass('projects__row');
                backgroundBrake.find('.row').eq(1).removeClass('projects__row');
                backgroundBrake.find('.row').eq(2).removeClass('projects__row');
            }
        });
    })();


    (function ready(){
        $(window).ready(function() {
            let width = $(this).width();

            if (width < 576) {
                // $('.start__video').empty();
            }

            if (width >= 576) {
                // if($('.start__video').length==0){
                //     $('.start__video').append(`
                // <video autoplay loop muted poster="css/KNR_pion_2.png" class="start__video-item">
                //     <source src="https://youtu.be/S2h1vym-xJI" type="video/mp4">
                // </video>`)
                // }
            }

            if (width <= 768) {
                $('.icon-bar__delete').empty();
                headerNav.empty();
                headerNav.append(`
<a href="https://www.facebook.com/kolo.naukowe.robotykow.knr/" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab facebook-tab"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/knr_pw/?hl=pl" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab instagram-tab"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/students-robotics-association-ko%C5%82o-naukowe-robotyk%C3%B3w-knr/about/" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab linkedin-tab"><i class="fa fa-linkedin"></i></a>
            <a href="https://m.youtube.com/user/KoloNaukoweRobotykow" target="_blank" rel="noopener noreferrer" class="icon-bar__link-tab youtube-tab"><i class="fa fa-youtube"></i></a>

<div class="header__nav-tab--button"><i class="fa fa-bars header__nav-tab--button-item" aria-hidden="true"></i></div>
                     `)
            }
            if (width > 768) {
                $('.icon-bar__delete').append(`
        <div class="icon-bar">
            <a href="https://www.facebook.com/kolo.naukowe.robotykow.knr/" target="_blank" rel="noopener noreferrer" class="icon-bar__link facebook"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/knr_pw/?hl=pl" target="_blank" rel="noopener noreferrer" class="icon-bar__link instagram"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/students-robotics-association-ko%C5%82o-naukowe-robotyk%C3%B3w-knr/about/" target="_blank" rel="noopener noreferrer" class="icon-bar__link linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="https://m.youtube.com/user/KoloNaukoweRobotykow" target="_blank" rel="noopener noreferrer" class="icon-bar__link youtube"><i class="fa fa-youtube"></i></a>
        </div>`);
                headerNav.empty();
                headerNav.append(`
                        <li class="header__list"><div class="header__link">START</div></li>
                        <li class="header__list"><div class="header__link">O NAS</div></li>
                        <li class="header__list"><div class="header__link">PROJEKTY</div></li>
                        <li class="header__list"><div class="header__link">KONTAKT</div></li>
                        <li class="header__list"><div class="header__link">WSPIERAJĄ NAS</div>
                        </li>`);
            }
            if (width < 992) {
                $('.contact').find('.row').eq(3).addClass('center');
                backgroundBrake.find('.row').eq(0).addClass('projects__row');
                backgroundBrake.find('.row').eq(1).addClass('projects__row');
                backgroundBrake.find('.row').eq(2).addClass('projects__row');
            }
            if (width >= 992) {
                $('.contact').find('.row').eq(3).removeClass('center');
                backgroundBrake.find('.row').eq(0).removeClass('projects__row');
                backgroundBrake.find('.row').eq(1).removeClass('projects__row');
                backgroundBrake.find('.row').eq(2).removeClass('projects__row');
            }
        });
    })();

    (function menu() {
        headerNav.on('click', '.header__nav-tab--button-item', function () {
            $('.header__nav-tab').slideToggle('slow');
        });
        headerNav.on('click', '.header__nav-tab--button-item', function () {
            $('.header').toggleClass('header__scroll-tab');
        })
        $('article').click(function () {
            $('.header__nav-tab').slideUp('slow');
        })
        $('main').click(function () {
            $('.header__nav-tab').slideUp('slow');
        })
        $('footer').click(function () {
            $('.header__nav-tab').slideUp('slow');
        })

        headerNav.on('touch', '.header__nav-tab--button-item', function () {
            $('.header__nav-tab').slideToggle('slow');
        });
        headerNav.on('touch', '.header__nav-tab--button-item', function () {
            $('.header').toggleClass('header__scroll-tab');
        })
        $('article').on('tap',function () {
            $('.header__nav-tab').slideUp('slow');
        })
        $('main').on('tap', function () {
            $('.header__nav-tab').slideUp('slow');
        })
        $('footer').on('tap', function () {
            $('.header__nav-tab').slideUp('slow');
        })

    })();
});
