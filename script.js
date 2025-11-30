"use strict";

// global variables //
const dropdownCheckbox = document.getElementById('dropdown');


function checkMediaQuery() {
    if (window.innerWidth > 991) {
        dropdownCheckbox.checked = false;
    }
}

window.addEventListener('resize', checkMediaQuery);