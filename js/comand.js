
$(document).ready(function () {

    // ? Слайдер
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // ? Меняется шапка при скролле, появляется кнопка назад.
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.btn-scroll-top').addClass('visible');
            if ($(window).width() > 550) {
                $('.header').addClass('header_scroll');
                $('.header__grid').addClass('header__grid_scroll');
                $('.header__logo-img').addClass('header__logo-img_none');
                $('.header__logo-img-scroll_none').addClass('header__logo-img-scroll_inline');
                $('.header__menu-button-line').addClass('header__menu-button-line_scroll');
                $('.header__menu-item-link').addClass('header__menu-item-link-scroll');
                $('.drop-down-menu').addClass('drop-down-menu_scroll');
            }
        } if ($(window).scrollTop() <= 0) {
            $('.header').removeClass('header_scroll');
            $('.header__grid').removeClass('header__grid_scroll');
            $('.header__logo-img').removeClass('header__logo-img_none');
            $('.header__logo-img-scroll_none').removeClass('header__logo-img-scroll_inline');
            $('.header__menu-button-line').removeClass('header__menu-button-line_scroll');
            $('.header__menu-item-link').removeClass('header__menu-item-link-scroll');
            $('.drop-down-menu').removeClass('drop-down-menu_scroll');
            $('.btn-scroll-top').removeClass('visible');
        }
    });

    // ? Выпадающее менюб с адаптацией
    let btn = document.querySelector('.header__menu-item-button-none');
    let btnClose = document.querySelector('.header__menu-item_close');
    let blackout = document.querySelector('.blackout');
    let dropDown = document.querySelector('.drop-down-menu');
    let border = document.querySelector('.header__grid_border');
    let shadow = document.querySelector('.header');
    let btnActive = document.querySelector('.header__menu-item_two-active-close');
    let body = document.querySelector('body');

    function myFunct() {
        if ($(window).width() < 550) {
            $('.header').addClass('header_adaptive');

            if (btn.style.display == 'none') {
                btnClose.style.display = 'none';
                btnActive.style.display = 'inline';
            } else {
                btnClose.style.display = 'none';
                btnActive.style.display = 'none';
            }
        } else if ($(window).width() > 550) {

            if (btn.style.display == 'none') {
                btnActive.style.display = 'none';
                btnClose.style.display = 'inline';
            } else {
                btnActive.style.display = 'none';
                btnClose.style.display = 'none';
            }
        }
    }
    myFunct();
    $(window).resize(function () {
        myFunct();
    });

    function myFunc() {
        if ($(window).width() > 550) {
            btn.addEventListener('click', function () {
                btnActive.style.display = 'none';
                btn.style.display = 'none';
                btnClose.style.display = 'inline';
                dropDown.classList.add('drop-down-menu-active');
                blackout.classList.add('blackout_active');
                blackout.classList.remove('blackout');
                shadow.classList.add('header_scroll_box-shadow-none');
                border.classList.add('header__grid_border-view');
                body.style.overflow = 'hidden';

            })
            btnClose.addEventListener('click', function () {
                btnActive.style.display = 'none';
                btn.style.display = 'inline';
                btnClose.style.display = 'none';
                dropDown.classList.remove('drop-down-menu-active');
                blackout.classList.remove('blackout_active');
                blackout.classList.add('blackout');
                shadow.classList.remove('header_scroll_box-shadow-none');
                border.classList.remove('header__grid_border-view');
                body.style.overflow = 'auto';
            })
        } else {
            btn.addEventListener('click', function () {
                btnClose.style.display = 'none';
                btn.style.display = 'none';
                btnActive.style.display = 'inline';
                dropDown.classList.add('drop-down-menu-active');
                blackout.classList.add('blackout_active');
                blackout.classList.remove('blackout');
                body.style.overflow = 'hidden';
            });
            btnActive.addEventListener('click', function () {
                btnClose.style.display = 'none';
                btn.style.display = 'inline';
                btnActive.style.display = 'none';
                dropDown.classList.remove('drop-down-menu-active');
                blackout.classList.remove('blackout_active');
                blackout.classList.add('blackout');
                body.style.overflow = 'auto';
            });
        }
    }
    myFunc();
    $(window).resize(function () {
        myFunc();
    });




    // ? Модальное окно - оставить заявку.
    let openModal = document.querySelector('.open-modal');
    let modal = document.querySelector('.application-form');
    let closeModal = document.querySelector('.application-form__close-modal-block');

    openModal.addEventListener('click', function () {
        modal.style.display = 'inline';
        blackout.classList.add('blackout_active');
        blackout.classList.remove('blackout');
    })
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        blackout.classList.remove('blackout_active');
        blackout.classList.add('blackout');
    })
});



// ?Footer адаптив
let el = document.querySelectorAll('.footer__nav-title');
let i;

for (i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function () {

        this.classList.toggle("active");

        let block = this.nextElementSibling;
        let down = this.previousElementSibling;
        if (block.style.display == "block") {
            block.style.display = "none";
            down.style.transform = "rotate(-90deg)";
        } else {
            block.style.display = "block";
            down.style.transform = "rotate(0)";
        }
    });
}