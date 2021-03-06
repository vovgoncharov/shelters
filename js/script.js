'use strict';
    let menuBurger = document.querySelectorAll('.menu-burger');
    let span1 = document.querySelector('.menu-burger__span1');
    let span2 = document.querySelector('.menu-burger__span2');
    let span = document.querySelector('.menu-burger__span');
    let list = document.querySelector('.navigation__list');
    menuBurger[0].addEventListener('click', function(){
        this.classList.toggle('anim-to-burger')
        span1.classList.toggle('transform1')
        span2.classList.toggle('transform2')
        span.classList.toggle('span-none')
        list.classList.toggle('list-block')
    });

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll:1,
        speed: 500,
        easing: 'linear',
        Infinity: true,
        responsive:[
            {
                breakpoint: 700,
                settings:{
                    slidesToShow:2
                },
                breakpoint: 550,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
});