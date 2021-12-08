'use strict';

// DOM
const menu = document.querySelector('.top span');

const nav = document.querySelector('nav');

const styleNav = getComputedStyle(nav);

menu.addEventListener('click',()=>{

    if(styleNav.display == 'none'){

        nav.style.display = 'block';

        menu.innerText = 'close';
    }
    else
    {
        nav.style.display = 'none'

        menu.innerText = 'menu';
    }

});