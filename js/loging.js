document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    // user password

    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    // check email & password

    if (userEmail == "sontan@gmail.com" && userPassword == "secret") {
        console.log("Valid user")
        window.location.href = "banking.html"
    }
});