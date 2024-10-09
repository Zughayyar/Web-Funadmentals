function remove_entry_1() {
    let entry_1 = document.getElementById("req-entry-1");
    entry_1.remove();

    let new_notif = document.getElementById("notif-num");
    new_notif.textContent--;
}

function remove_entry_2() {
    let entry_2 = document.getElementById("req-entry-2");
    entry_2.remove();

    let new_notif = document.getElementById("notif-num");
    new_notif.textContent--;

}

function add_conn() {
    let new_conn_num = document.getElementById("conn-num");
    new_conn_num.textContent++;
}

function change_name() {
    let name_profile = document.getElementById("profile_name");
    console.log(name_profile.textContent);
    
    if (name_profile.textContent == "Anas Zughayyar") {
            name_profile.textContent = "Joe Doe";
            console.log(name_profile.textContent);
    }

    else {
            name_profile.textContent = "Anas Zughayyar";
            console.log(name_profile.textContent);
    }

}

function change_sign() {
    let sign_button_value = document.getElementById("sign_button");
    let x = sign_button_value.textContent;
    console.log(x)

    if (sign_button_value.textContent == "Sign Out") {
        sign_button_value.textContent = "Sign In"
    }
}
