// Toggle between Login and Sign Up Forms
function toggleForm() {
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementById("signup-form");
    let formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        formTitle.textContent = "Login";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.textContent = "Sign Up";
    }
}

// Sign Up Function
function signUp() {
    let username = document.getElementById("signup-username").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let errorMessage = document.getElementById("signup-error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields!";
        errorMessage.style.display = "block";
        return;
    }

    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Username already exists!";
        errorMessage.style.display = "block";
        return;
    }

    // Save the user in localStorage
    localStorage.setItem(username, password);
    alert("Account created successfully! You can now log in.");
    toggleForm(); // Switch to Login Form
}

// Login Function
function login() {
    let username = document.getElementById("login-username").value.trim();
    let password = document.getElementById("login-password").value.trim();
    let errorMessage = document.getElementById("login-error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter username and password!";
        errorMessage.style.display = "block";
        return;
    }

    // Check credentials in localStorage
    let storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "email.html"; // Redirect to dashboard
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
}
