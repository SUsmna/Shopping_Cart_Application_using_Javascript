document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let loginUsername = document.getElementById('loginUsername').value;
    let loginPassword = document.getElementById('loginPassword').value;

    if (!loginUsername || !loginPassword) {
        alert('Please enter both username and password');
        return;
    }

    let storedPassword = localStorage.getItem(loginUsername);

    if (storedPassword === loginPassword) {
        alert('Login successful');
        // Redirect to a welcome page or dashboard
        window.location.href = '../login/login.html';
    } else {
        alert('Invalid username or password');
    }
});


