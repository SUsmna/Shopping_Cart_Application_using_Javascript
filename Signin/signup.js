document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // let confirmPassword = document.getElementById('confirmpassword').value;

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('Username already exists');
    } else {
        localStorage.setItem(username, password);
        alert('Signup successful');
        window.location.href = '../login/login.html'; // Redirect to login page
    }
});