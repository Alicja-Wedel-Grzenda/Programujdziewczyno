//console.log('It works!')

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    
    var forDropdown = document.querySelector('.for-dropdown'); //how do JavaScript know, which CSS file to use??
    var dropdownMenu = document.querySelector('.dropdown'); //how do JavaScript know, which CSS file to use??
    
    //console.log(forDropdown, dropdownMenu);
    //console.log(dropdownMenu.style);
 
    forDropdown.addEventListener('mouseover', myVeryBigFunc);
    /*kierownik, czyli Ty, programisto,
    daje Stachowi, czyli funkcji addEventListener,
    funkcję do wykonania, czyli myFunc.
    */
     function myVeryBigFunc() {
        dropdownMenu.style.display = 'block';
     }
    
    forDropdown.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });
    
    var buttons = document.querySelectorAll('.read-more'); // creates a variable with all three buttons "More:
    //console.log(buttons);
    
    //console.log(buttons[0].previousElementSibling); //shows the paragraph, which has 'more' class (because button & paragraph are in one SECTION - mom, so they are two children - siblings :)
    
    
  
    function buttonUnwrap() {
        console.log(this);
        var textArea = this.previousElementSibling;
       // console.log(textArea);
        if (textArea.style.display === 'none' || textArea.style.display === '') 
            {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            } 
        else 
            {
             textArea.style.display = 'none';
             this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            }
    }
    
   /* buttons[0].addEventListener('click', buttonUnwrap() { //reaction - what happens when I click the button
        console.log(this); 
        
    });*/
var i;
for (i=0; i<buttons.length; i++) // for all three buttons   
   buttons[i].addEventListener('click', buttonUnwrap); // I order functio to WORK, NOT to return something
});