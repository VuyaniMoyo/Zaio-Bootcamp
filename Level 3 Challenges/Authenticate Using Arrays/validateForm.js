function validatePasswords() {
    var userDetails = [];
    
    var name = document.getElementById("firstName").value;
    var surname = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    
    var ok = true;
    
    if(pass1 =="" || pass2 ==""){
        alert("Please Fill In All Fields");
    }else if (pass1 != pass2) {
        alert("Passwords Do not match");
        focus(pass1);
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
        document.getElementById('pass1').focus();
        ok = false;
    }else{
        ok = true; 
        userDetails.push(name,surname,age,email,pass1,pass2);
        alert("User Account For : " + userDetails[0] + " Successfully Created");   
        document.getElementById("registerForm").reset();
    }
    return ok; 
}