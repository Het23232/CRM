function showSignup() {
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("forgot-password-form").classList.add("hidden");
}

function showLogin() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("forgot-password-form").classList.add("hidden");
}

function showForgotPassword() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("forgot-password-form").classList.remove("hidden");
}

// Signup Form Submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup Successful!");
    showLogin();
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login Successful!");
});

// Forgot Password Form Submission
document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Password Reset Link Sent!");
});
