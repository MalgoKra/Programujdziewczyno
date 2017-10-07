'use strict';   
document.addEventListener('DOMContentLoaded', function() {
    console.log("działa");
    
    //Zadanie 1    
    var forDropdown = document.querySelector('.for-dropdown');
    console.log(forDropdown);
    var dropdown = document.querySelector('.dropdown');
    console.log(dropdown);
    
    forDropdown.addEventListener('mouseover', function() {
    dropdown.style.display = 'block';
    });
    
    forDropdown.addEventListener('mouseout', function() {
    dropdown.style.display = 'none';
    });
    
    //Zadanie 2
    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    
    console.log(buttons[0].previousElementSibling);
    
    buttons[0].addEventListener('click', function() {
    console.log('działa'); 
    });
    buttons[0].addEventListener('click', function() {
    console.log(this); 
    });
    buttons[0].addEventListener('click', function() {
    var textArea = this.previousElementSibling;
    textArea.style.display = 'block';
    console.log(textArea); 
    console.log(this.innerHTML); 
    });
    
});


