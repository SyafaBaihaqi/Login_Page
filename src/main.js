document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    
    // Reset messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    successMessage.style.display = 'none';
    
    let valid = true;
    
    if (username.trim() === '') {
        usernameError.textContent = 'Username or Email is required';
        usernameError.style.display = 'block';
        valid = false;
    }
    
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        valid = false;
    }
    
    if (valid) {
        // Simulate login success
        successMessage.style.display = 'block';
        // Here you would typically send the data to a server
        console.log('Login attempt:', { username, password });
    }
});

// Add focus animations to inputs
const inputs = document.querySelectorAll('.input-group input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});