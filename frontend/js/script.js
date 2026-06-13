const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Registration Successful");
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Login Successful");
    });
}