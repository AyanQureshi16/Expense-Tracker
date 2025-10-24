var allUsers = []; // Empty array to store all users
var users = localStorage.getItem('users'); // Get users from browser storage

if (users !== null) {
    allUsers = JSON.parse(users)  // Convert string back to array
}
//  Signup Function
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
//  Loop se check kiya ke email pehle se registered to nahi
var user = {
   name: name.value,
   email: email.value,
   password: password.value,
   transactions: []  // Add transactions array
}

//  Naya user object banaya with empty transactions array
allUsers.push(user)  // Add user to array
localStorage.setItem('users', JSON.stringify(allUsers)) // Save to browser
alert('Signup successful! Please login.');
location.href = "./login.html"   // Redirect to login page

}

// Login Function
function login() {
 var email = document.getElementById('email');
 var password = document.getElementById('password');

// Email aur password input se values nikali
var filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);

// Agar user mila to array length > 0 hogi
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