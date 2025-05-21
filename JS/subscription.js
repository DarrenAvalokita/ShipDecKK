const form = document.getElementById("subscription-form");
const formContainer = document.querySelector('.form-container');
const successMessage = document.createElement('div');

form.addEventListener("submit", function(event){
    event.preventDefault();

    console.log("form disubmit");

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const age = form.age.value;
    const termsChecked = form.terms.checked;

    if(!name || !email || !password || !confirmPassword || !age || !termsChecked){
        alert("All fields must be filled out.");
        return;
    }

    if(name.length<3){
        alert("Name must be at least 3 characters.");
        return;
    }

    if(!email.includes("@") || !email.includes(".") || !email.includes(".com")){
        alert("Please enter a valid email (must include '@', '.', '.com')." )
        return;
    }

    if(password.length<8){
        alert("Password must be at least 8 characters long")
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    const ageNum = Number(age);
    if(isNaN(ageNum) || ageNum < 18 || ageNum > 99){
        alert("Age must be between 18 and 99");
        return;
    } 

    if(!termsChecked){
        alert("You must agree to the terms and conditions");
        return;
    }

    successMessage.className = 'success-message'
    successMessage.innerHTML = `
        <h3>Thank you for subscribing!</h3>
        <p>Hello ${name}, we've sent a confirmation email to ${email}.</p>
        <p>You'll start receiving updates from ShipDecKK shortly.</p>
    `;
    formContainer.innerHTML = '';
    formContainer.appendChild(successMessage);
});