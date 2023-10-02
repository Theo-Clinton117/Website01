function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const form = document.getElementById('signup-form');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username.index() === '' || email.index() === '' || password.index() === '') {
        showMessage('Please fill in all fields.', 'red');
    } else {
        showMessage('Sign-up successful!', 'green');
        // You can add code here to submit the form data to your server.
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
