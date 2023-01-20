function FormValidation() {
    // alert("Alert")
    var name = document.custom_form.name;
    var email = document.custom_form.email;
    var password = document.custom_form.password;
    var confirmpassword = document.custom_form.confirmpassword;


    //Name FormValidation
    if (name.value == "") {
        name.nextElementSibling.style.display = "block";
        name.style.border = "1px solid #f00";
        return false
    } else {
        name.nextElementSibling.style.display = "none";
        name.style.border = "1px solid transparent"
    }

    //email validation
    if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == "") {
        email.nextElementSibling.style.display = "block";
        email.style.border = "1px solid #f00";
        return false
    } else {
        email.nextElementSibling.style.display = "none";
        email.style.border = "1px solid transparent";
    }

    // password validation
    
    if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/) || password.value == ""){
        password.nextElementSibling.style.display = "block";
        password.style.border = "1px solid #f00"
        return false
    }else{
        password.nextElementSibling.style.display = "none";
        password.style.border = "1px solid transparent"
    }

    // password validation
    if(confirmpassword.value != password.value){
        confirmpassword.nextElementSibling.style.display = "block";
        confirmpassword.style.border = "1px solid #f00"
        return false
    }else{
        confirmpassword.nextElementSibling.style.display = "none";
        confirmpassword.style.border = "1px solid transparent"
    }
}

