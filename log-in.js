function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.index() === '' || password.index() === '') {
        showMessage('Please fill in all fields.', 'red');
    } else if (!isValidEmail(email)) {
        showMessage('Invalid email format.', 'red');
    } else {
        showMessage('Login successful!', 'green');
        // You can add code here to submit the login data to your server.
    }
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.display = 'block';

    setTimeout(function () {
        message.style.display = 'none';
    }, 3000);
}

function isValidEmail(email) {
    // Basic email validation regex (you can use a more robust one)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
