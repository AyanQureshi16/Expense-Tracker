var allUsers = [];

var users = localStorage.getItem('users');

if (users !== null) {
    allUsers = JSON.parse(users)
}

function signup() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // Check if email already exists
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === email.value) {
            alert('Email already registered! Please login.');
            location.href = "./login.html";
            return;
        }
    }

    var user = {
        name: name.value,
        email: email.value,
        password: password.value,
        transactions: []  // Add transactions array
    }

    allUsers.push(user)
    localStorage.setItem('users', JSON.stringify(allUsers))
    alert('Signup successful! Please login.');
    location.href = "./login.html"
}

function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);

    if (filterUser.length) {
        // SET LOGIN FLAG
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email.value);
        alert("user login successful")
        location.href = "./index.html"
    } else {
        alert("email/password incorrect")
    }
}