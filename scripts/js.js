'use strict'

let burgerBtn = document.getElementById('burger_btn');
let burgerSpan = document.getElementById('span_burger');
let burgerMenu = document.getElementById('burger_menu')
let body = document.body;
let header = document.getElementById('header');


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active'),
    burgerMenu.classList.toggle('active')
    if(burgerMenu.classList.contains('active')){
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
})
console.log(header)


AOS.init();
