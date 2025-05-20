const form = document.getElementById("subscription-form");
// const outputDiv = document.getElementById("output");
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

    // validasi 1 : misalnya valuenya kosong
    if(!name || !email || !password || !confirmPassword || !age || !termsChecked){
        alert("All fields must be filled out.");
        return;
    }

    // validasi 2 : minimal lengthnya
    if(name.length<3){
        alert("Name must be at least 3 characters.");
        return;
    }

    // validasi 3 : apakah ada "@", ".", dan ".com"?
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

    // validasi 4 : apakah yang diketik umur> kalau iya, apakah antara 18 dan 99 tahun?
    const ageNum = Number(age); // Number() buat convert string ke angka
    // isNaN = Is not a number
    if(isNaN(ageNum) || ageNum < 18 || ageNum > 99){
        alert("Age must be between 18 and 99");
        return;
    } 

    if(!termsChecked){
        alert("You must agree to the terms and conditions");
        return;
    }

    // formContainer.innerHTML = ''
    // successMessage.className = 'success-message'
    // successMessage.innerHTML = `
    //     <h3>Thank you for subscribing!</h3>
    //     <p>Hello ${name}, we've sent a confirmation email to ${email}.</p>
    //     <p>You'll start receiving updates from ShipDecKK shortly.</p>
    // `;
    // // form.style.display = 'none';
    // formContainer.innerHTML = '';
    // formContainer.appendChild(successMessage);
});

    /* <h3>Submitted Data:</h3>
        <p><strong>Name: ${name}</strong></p>
        <p><strong>Email: ${email}</strong></p>
        <p><strong>Age: ${age}</strong></p>
        <p><strong>Gender: ${gender}</strong></p>
        <p><strong>Course: ${course}</strong></p>
        <p><strong>Bio: ${bio}</strong></p>
        <p><strong>Terms Accepted: ${termsChecked}</strong></p> */}