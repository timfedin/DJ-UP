var passwordInput = document.getElementById("passreg");
var passwordError = document.getElementById("passwordError");
var registerButton = document.getElementById("regr");

passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;
    if (password.length < 8) {
        passwordError.style.display = "block";
        registerButton.setAttribute("disabled", "disabled"); 

    } else {
        passwordError.style.display = "none";
        registerButton.removeAttribute("disabled"); 
    }
});