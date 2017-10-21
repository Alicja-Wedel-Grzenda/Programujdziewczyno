console.log('It works!')

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    
    var forDropdown = document.querySelector('.for-dropdown'); //how do JavaScript know, which CSS file to use??
    var dropdownMenu = document.querySelector('.dropdown'); //how do JavaScript know, which CSS file to use??
    
    console.log(forDropdown, dropdownMenu);
    console.log(dropdownMenu.style);
    
    forDropdown.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });
    
    forDropdown.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });
})