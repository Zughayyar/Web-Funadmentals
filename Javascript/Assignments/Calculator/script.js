/*
Title: Calculator Assignment.
Type: CSS file.
Date: 07/10/2024
Developer: Anas Zughayyar
*/

// Load page 
console.log("Page loaded...")

let display_variable = document.querySelector("#display")     // The main variable displayed
let operation = "none"                                       // Only four operations
let first_input                                               // This calculator is perfect for only two variables
let check_if_operation_assigned = false                    
display_variable.textContent = "..."                          // This to manipluate the Calc

// Added this to show the operation assigned
let display_operation = document.querySelector("#display-operation")


function reset_cal() {                                       // This function reset the calculator
    first_input = undefined
    operation = "none"
    display_variable.textContent = "..."
    check_if_operation_assigned = false
    display_operation.textContent = undefined
}

function set_operation(element) {                           // Choose the operation
    operation = element.value
    first_input = parseFloat(display_variable.textContent)

    let operations_value = ["+" , "-" , "x" , "÷"]
    let operations_name = ["sum" , "substract" , "multiply" , "division"]
    display_operation.textContent = operations_value[operations_name.indexOf(operation)]

}

function press(num) {                                       // Input from user
    if (check_if_operation_assigned) {
        display_variable.textContent += num
    }
    else if (operation == "none") {
        if (display_variable.textContent == "...") {
            display_variable.textContent = num
        }
        else {
            display_variable.textContent += num
        }
    }
    else {
        display_variable.textContent = num
        check_if_operation_assigned = true
    }
}

function calculate() {                                      // The main function to make the calculation
    display_operation.textContent = undefined
    let second_value = parseFloat(display_variable.textContent)
    check_if_operation_assigned = false
    if (operation == "sum") {
        var result = first_input + second_value
        display_variable.textContent = result
    }
    if (operation == "substract") {
        var result = first_input - second_value
        display_variable.textContent = result
    }
    if (operation == "multiply") {
        var result = first_input * second_value
        display_variable.textContent = result
    }
    if (operation == "division") {
        var result = first_input / second_value
        display_variable.textContent = result
    }
}