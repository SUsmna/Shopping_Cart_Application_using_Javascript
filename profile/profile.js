// document.addEventListener('DOMContentLoaded', function() {
//     let loggedInUser = localStorage.getItem('loggedInUser');
//     console.log(loggedInUser)
//     if (loggedInUser) {
//         alert('You need to log in first');
//         window.location.href = '../login/login.html';
//         return;
//     }
//     let userData = JSON.parse(localStorage.getItem(loggedInUser));
//     document.getElementById('profileUsername').value = userData.username;
//     document.getElementById('profilePassword').value = userData.password;

//     document.getElementById('profileForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         let newPassword = document.getElementById('profilePassword').value;
//         userData.password = newPassword;
//         localStorage.setItem(loggedInUser, JSON.stringify(userData));
//         alert('Profile updated successfully');
//     });

//     document.getElementById('logoutButton').addEventListener('click', function() {
//         localStorage.removeItem('loggedInUser');
//         window.location.href = '../login/login.htmll';
//     });

// });


document.addEventListener('DOMContentLoaded', function() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        alert('You need to log in first');
        window.location.href = "../login/login.html";
        return;
    }

    let userData = JSON.parse(localStorage.getItem(loggedInUser));
    if (userData) {
        alert('User data not found');
        return;
    }

    document.getElementById('profileUsername').value = userData.username;
    document.getElementById('profilePassword').value = userData.password;

    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let newPassword = document.getElementById('profilePassword').value;
        userData.password = newPassword;
        localStorage.setItem(loggedInUser, JSON.stringify(userData));
        alert('Profile updated successfully');
    });

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        window.location.href = '../login/login.html';
    });
});




