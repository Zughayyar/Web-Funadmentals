console.log("Page loaded ....");

function display_loading() {
    alert("The Weather is loading ...")
}

function remove_cookie() {
    var cookie_window = document.getElementById("cookie-window")
    cookie_window.remove()
}

function convert_temp(temp) {
    console.log(temp)
    if (temp == "c") {
        convert_f_to_c()
    }
    else if (temp == "f") {
        convert_c_to_f()
    }
}

function convert_c_to_f() {
    var temp_value = document.querySelectorAll(".temp-value")
    for (var i=0;i<temp_value.length;i++) {
        
        var val = temp_value[i].textContent
        var new_val = (val*(9/5)) + 32
        var rounded_new_temp = Math.round(new_val)
        temp_value[i].textContent = rounded_new_temp

    }
}

function convert_f_to_c() {
    var temp_value = document.querySelectorAll(".temp-value")
    for (var i=0;i<temp_value.length;i++) {
        
        var val = temp_value[i].textContent
        var new_val = (val - 32)*(5/9)
        var rounded_new_temp = Math.round(new_val)
        temp_value[i].textContent = rounded_new_temp
    }
}