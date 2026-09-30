function checkPassword() {
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;

    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    if(passWord.length < 8){
        alert("Password must be at least 8 characters long.");
        return;
    }
    if(!/[a-z]/.test(passWord)){
        alert("Password must contain at least one lowercase letter.");
        return;
    }
    if(!/[A-Z]/.test(passWord)){
        alert("Password must contain at least one uppercase letter.");
        return;
    }
    if(!/[0-9]/.test(passWord)){
        alert("Password must contain at least one number.");
        return;
    }
    if(!/[!@#$%^&*()]/.test(passWord)){
        alert("Password must contain at least one special character.");
        return;
    }
    
    alert("Password is valid!");
};