'use strict';

/**
 * Add Event on Elements
 */

const addEventOnElme = function (elem, type, callback) {
    if (elem.length > 1) {
        elem.forEach((item)=>{
            item.addEventListener(type, callback);
        });
    } else {
        elem.addEventListener(type, callback);
    }
};


/**
 * Navbar Btn Toggle
 */

const overlay = document.querySelector('[data-overlay]');
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navbarLinks =document.querySelectorAll('[data-nav-link]');
 
const toggleNavbar = function (){
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
};

const closeNavbar = function () {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
}

addEventOnElme(navTogglers, 'click', toggleNavbar);
addEventOnElme(navbarLinks, 'click', closeNavbar);


/**
 * Header & back top btn active when scroll down to 100px 
 */

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

const headerActive = function () {
    if(window.scrollY > 80) {
        header.classList.add('active');
        backTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        backTopBtn.classList.remove('active');
    }
}

addEventOnElme(window, 'scroll', headerActive);