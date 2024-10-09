/*
Title: Calculator Assignment.
Type: CSS file.
Date: 07/10/2024
Developer: Anas Zughayyar
*/

// Load page 
console.log("Page loaded...")

let display_variable = document.querySelector("#display")
let place_holder = ""

function press(num) { 
    display_variable.textContent += num
}


function reset_cal() {
    place_holder = ""
    display_variable.textContent = ""
}

function calculate() {
    display_variable.textContent = eval(display_variable.textContent)
}