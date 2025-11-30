"use strict";

// global variables //
const dropdownCheckbox = document.getElementById('dropdown');

//FUNCTIONS//
function checkMediaQuery() {
    if (window.innerWidth > 991) {
        dropdownCheckbox.checked = false;
    }
}

// Event Listeners //
window.addEventListener('resize', checkMediaQuery);