const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
})

function validate() {
    const emailval = email.value.trim();
    const passwordval = password.value.trim();


    // email
    if (emailval == "") {
        setErrorMsg(email, '**please fill the email field.');
    }
    else if ((emailval.length <= 6) || (emailval.length > 30)) {
        setErrorMsg(email, '**email length must be between 6 and 30.');
    }
    else if ((emailval.charAt(emailval.length - 4) != '.') && (emailval.charAt(emailval.length - 3) != '.')) {
        setErrorMsg(email, '**invalid position.');
    }
    else {
        setSuccessMsg(email);
    }

    // password
    if (passwordval == "") {
        setErrorMsg(password, '**please fill the password field.');
    }
    else if ((passwordval.length < 8) || (passwordval.length > 8)) {
        setErrorMsg(password, '**password length min 8.');
    }
    else {
        setSuccessMsg(password);
    }


    if ( ((emailval.length <= 6) || (emailval.length > 30)) ||
        ((passwordval.length < 8) || (passwordval.length > 8))) { }
    else {
        window.location.href = "index.html"
    }

}

function setErrorMsg(input, errormsg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control error";
    small.innerText = errormsg;
}

function setSuccessMsg(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}
