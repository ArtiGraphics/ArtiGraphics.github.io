'use strict'; 

var button = document.querySelector('.nav__button'); 
var navigationLinks = document.querySelectorAll('.nav-list__link'); 

button.addEventListener('click', function () { 
    navigationLinks.forEach((link) => { 
        if (link.classList.contains('nav-list--active')) { 
           link.classList.remove('nav-list--active'); 
        } else { 
           link.classList.add('nav-list--active'); 
        } 
    }); 
});