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
    // const inputControl = element.closest("input-control")
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = message
    inputControl.classList.add('error')
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
function validateInputs() {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const repeatPassValue = repeatPass.value.trim();

    if(nameValue === "") {
        setError(name, "Adınızı daxil edin!")
    } 

    if (surnameValue === "") {
        setError(surname, "Soyadınızı daxil edin!")
    }

    if (phoneValue === "") {
        setError(phone, "Nömrənizi daxil edin!")
    }

    if (emailValue === "") {
        setError(email, "Emailinizi daxil edin!")
    } else if (!validateEmail(email)) {
        setError(email, "Emaili düzgün formatda qeyd edin!")
    }

    if (passValue === "") {
        setError(pass, "Parolunuzu daxil edin!")
    } else if (passValue.length < 8) {
        setError(pass, "Parolunuz 8 simvoldan az ola bilməz!")
    }

    if(repeatPassValue === "") {
        setError(repeatPass, "Parolunuzu təkrar daxil edin!")
    }
    else if(repeatPassValue !== passValue) {
        setError(repeatPass, "Parolunuz eyni deyil!")
    }

}