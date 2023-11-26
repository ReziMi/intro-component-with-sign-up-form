const firstNameInput = document.getElementById('firstError');
const lastNameInput = document.getElementById('lastError');
const emailInput = document.getElementById('emailError');
const passwordInput = document.getElementById('passwordError');

const firstNameError = document.querySelector('.errorMessage:nth-of-type(1)');
const lastNameError = document.querySelector('.errorMessage:nth-of-type(2)');
const emailFormatError = document.querySelector('.errorMessage:nth-of-type(3)');
const emailError = document.querySelector('.errorMessage:nth-of-type(4)');
const passwordError = document.querySelector('.errorMessage:nth-of-type(5)');
const passwordWrongFormat = document.querySelector('.errorMessage:nth-of-type(6)');
const successLogIn = document.querySelector('.success');

const claimTrialButton = document.querySelector('.claimTrial');

// Regular expression for basic email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


claimTrialButton.addEventListener('click', function(event) {
    if (firstNameInput.value === '') {
        firstNameError.style.display = 'block';
    } else {
        firstNameError.style.display = 'none'; 
    }

    if (lastNameInput.value === '') {
        lastNameError.style.display = 'block';
    } else {
        lastNameError.style.display = 'none'; 
    }

    if (!emailRegex.test(emailInput.value) && emailInput.value !== '') {
        emailFormatError.style.display = 'block';
        emailError.style.display = 'none';
    } else {
        emailFormatError.style.display = 'none';
    }
    
    if (emailInput.value === '') {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
    

    const passwordValue = passwordInput.value;
    if (passwordValue === '') {
        passwordError.style.display = 'block';
        passwordWrongFormat.style.display = 'none'; // Hide wrong format message
    } else if (!/^[a-zA-Z]\w{6,15}$/.test(passwordValue)) {
        passwordError.style.display = 'none'; // Hide the regular error message
        passwordWrongFormat.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
        passwordWrongFormat.style.display = 'none';
    }

    if (
        firstNameInput.value === '' ||
        lastNameInput.value === '' ||
        !emailRegex.test(emailInput.value) ||
        passwordInput.value === '' ||
        !/^[a-zA-Z]\w{6,15}$/.test(passwordValue)
    ) {
        event.preventDefault(); // Prevent form submission
    } else {
        successLogIn.style.display='block'
    }
});
