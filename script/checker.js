var passwordInput = document.getElementById("passreg");
var passwordError = document.getElementById("passwordError");


passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;
    if (password.length < 8) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
});