// ShipDecKK - Form Validation JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscription-form');
    
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('full-name');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            const ageInput = document.getElementById('age');
            const newsletterCheckbox = document.getElementById('newsletter');
            
            // Reset previous error states
            resetFormErrors();
            
            // Perform validations
            let isValid = true;
            
            // Validation 1: Check for empty fields
            if (!validateNotEmpty(nameInput, "Please enter your full name")) {
                isValid = false;
            }
            
            if (!validateNotEmpty(emailInput, "Please enter your email address")) {
                isValid = false;
            } else {
                // Validation 2: Email format validation
                if (!validateEmailFormat(emailInput, "Please enter a valid email (e.g., example@domain.com)")) {
                    isValid = false;
                }
            }
            
            if (!validateNotEmpty(passwordInput, "Please enter a password")) {
                isValid = false;
            } else {
                // Validation 3: Password length
                if (!validatePasswordLength(passwordInput, "Password must be at least 8 characters long")) {
                    isValid = false;
                }
            }
            
            if (!validateNotEmpty(confirmPasswordInput, "Please confirm your password")) {
                isValid = false;
            } else {
                // Validation 4: Password match
                if (!validatePasswordsMatch(passwordInput, confirmPasswordInput, "Passwords do not match")) {
                    isValid = false;
                }
            }
            
            if (!validateNotEmpty(ageInput, "Please enter your age")) {
                isValid = false;
            } else {
                // Validation 5: Age range validation
                if (!validateAgeRange(ageInput, "You must be between 18 and 80 years old", 18, 80)) {
                    isValid = false;
                }
            }
            
            // If all validations pass
            if (isValid) {
                // Show success message
                const formContainer = document.querySelector('.form-container');
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <h3>Thank you for subscribing!</h3>
                    <p>Hello ${nameInput.value}, we've sent a confirmation email to ${emailInput.value}.</p>
                    <p>You'll start receiving updates from ShipDecKK shortly.</p>
                `;
                
                // Replace form with success message
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
            }
        });
    }
});

// Validation Functions

// Validation 1: Empty field validation
function validateNotEmpty(inputElement, errorMessage) {
    if (inputElement.value.trim() === '') {
        showError(inputElement, errorMessage);
        return false;
    }
    showSuccess(inputElement);
    return true;
}

// Validation 2: Email format validation
function validateEmailFormat(inputElement, errorMessage) {
    // Simple email validation without regex
    const email = inputElement.value.trim();
    const atSymbolCount = countCharacter(email, '@');
    const dotCount = countCharacter(email, '.');
    
    // Basic email validation:
    // - Must have exactly one @
    // - Must have at least one . after the @
    // - Must have characters before and after @ and .
    if (atSymbolCount !== 1 || 
        email.indexOf('@') === 0 || 
        email.indexOf('@') === email.length - 1 || 
        dotCount < 1 ||
        email.lastIndexOf('.') < email.indexOf('@') ||
        email.lastIndexOf('.') === email.length - 1) {
        
        showError(inputElement, errorMessage);
        return false;
    }
    
    showSuccess(inputElement);
    return true;
}

// Helper function to count occurrences of a character in a string
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Validation 3: Password length validation
function validatePasswordLength(inputElement, errorMessage, minLength = 8) {
    if (inputElement.value.length < minLength) {
        showError(inputElement, errorMessage);
        return false;
    }
    showSuccess(inputElement);
    return true;
}

// Validation 4: Password match validation
function validatePasswordsMatch(passwordInput, confirmPasswordInput, errorMessage) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, errorMessage);
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

// Validation 5: Age range validation
function validateAgeRange(inputElement, errorMessage, minAge, maxAge) {
    const age = parseInt(inputElement.value);
    
    if (isNaN(age) || age < minAge || age > maxAge) {
        showError(inputElement, errorMessage);
        return false;
    }
    showSuccess(inputElement);
    return true;
}

// Helper functions for showing errors and success states
function showError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    formGroup.classList.add('error');
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function showSuccess(inputElement) {
    const formGroup = inputElement.parentElement;
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
}

function resetFormErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error');
        group.classList.remove('success');
        
        const errorElement = group.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
}
