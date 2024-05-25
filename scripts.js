document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');
    const form = document.getElementById('signupForm');

    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value;
        if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
            emailError.style.display = 'none';
            emailSuccess.style.display = 'inline';
        } else {
            emailError.style.display = 'inline';
            emailSuccess.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', () => {
        const passwordValue = passwordInput.value;
        if (passwordValue.length > 8) {
            passwordError.style.display = 'none';
            passwordSuccess.style.display = 'inline';
        } else {
            passwordError.style.display = 'inline';
            passwordSuccess.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (confirm('Do you want to submit the form?')) {
            alert('Successful signup!');
        } else {
            form.reset();
            emailSuccess.style.display = 'none';
            passwordSuccess.style.display = 'none';
        }
    });
});
