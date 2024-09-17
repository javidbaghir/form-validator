const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const repeatPass = document.getElementById('repeat-password');

form.addEventListener('submit', function (e) {

    e.preventDefault()


    validateInputs()
})

function setError (element, message) {
    const inputControl = element.closest(".input-control")
    // const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success');
}

function setSuccess (element) {
    const inputControl = element.closest(".input-control")
    // const inputControl = element.parentElement;

    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = ""
    inputControl.classList.remove('error')
    inputControl.classList.add('success');
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      );
};

function validateInputs() {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const repeatPassValue = repeatPass.value.trim();

    if(name.dataset.required === "true") {
        setError(name, "Adınızı daxil edin!")
    } else {
        setSuccess(name)
    }

    if (surname.dataset.required === "true") {
        setError(surname, "Soyadınızı daxil edin!")
    } else {
        setSuccess(surname)
    }

    if (phoneValue === "" && phone.dataset.required === "true") {
        setError(phone, "Nömrənizi daxil edin!")
    } else {
        setSuccess(phone)
    }

    if (emailValue === "" && email.dataset.required === "true") {
        setError(email, "Emailinizi daxil edin!")
    } else if (!validateEmail(emailValue)) {
        setError(email, "Emaili düzgün formatda qeyd edin!")
    } else {
        setSuccess(email)
    }

    if (passValue === "" && pass.dataset.required === "true") {
        setError(pass, "Parolunuzu daxil edin!")
    } else if (passValue.length < 8) {
        setError(pass, "Parolunuz 8 simvoldan az ola bilməz!")
    } else {
        setSuccess(pass)
    }

    if(repeatPassValue === "" && repeatPass.dataset.required === "true") {
        setError(repeatPass, "Parolunuzu təkrar daxil edin!")
    }
    else if(repeatPassValue !== passValue) {
        setError(repeatPass, "Parolunuz eyni deyil!")
    } else {
        setSuccess(repeatPass)
    }
}