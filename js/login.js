document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate credentials
    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        // Redirect to another webpage
        window.location.href = 'index.html'; // Change to your desired page
    } else {
        // Show error message
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
        // Clear form inputs
        usernameInput.value = '';
        passwordInput.value = '';
    }
});
