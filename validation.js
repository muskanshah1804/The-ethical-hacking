// Login Form Validation
function validateLoginForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email-error").innerText = "Invalid email address.";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
    }

    if (password.length < 6) {
        document.getElementById("password-error").innerText = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    return isValid;
}

// Registration Form Validation
function validateRegistrationForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    let isValid = true;

    if (name.trim() === "") {
        document.getElementById("name-error").innerText = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("name-error").innerText = "";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email-error").innerText = "Invalid email address.";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
    }

    if (password.length < 8) {
        document.getElementById("password-error").innerText = "Password must be at least 8 characters.";
        isValid = false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").innerText = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById("confirm-password-error").innerText = "";
    }

    return isValid;
}
