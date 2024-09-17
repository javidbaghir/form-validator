const form = document.getElementById('form');
const passOpen = document.getElementById('pass-open')


form.addEventListener('submit', function (e) {

    e.preventDefault()

    for (let el of e.target.elements) {
       if(el.tagName !== "BUTTON") {
        
        const value = el.value;
        const required = el.dataset.required;
        const min = el.dataset.min
        const email = el.dataset.email
        const some = el.dataset.some
        const someElement = form.querySelector(`[name="${some}"]`)

        if (!value.trim() && required) {
            setError(el, "Inputu bos buraxma")
        } else if(min && value.trim().length < min){
            setError(el, `Minimum ${min} simvol olmalıdır`)
        } else if (email && !validateEmail(value)) {
            setError(el, "Email formatını düzgün qeyd edin!")
        } else if (someElement && someElement.value !== value) {
            setError(el, "Şifrələr eyni deyil!")
        }
        else {
            setSuccess(el, "")
        }
       }
    }
})

function setError (element, message) {
    const inputControl = element.closest(".input-control")
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.textContent = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success');
}

function setSuccess (element) {
    const inputControl = element.closest(".input-control")

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


passOpen.addEventListener('click', function (e) {
    const obj = e.target.closest('.input-control')

    const input = obj.querySelector('input')

    if(input.type === "password") {
        input.type = 'text'
        obj.querySelector('i').classList.remove('fa-eye')
        obj.querySelector('i').classList.add('fa-eye-slash')
    } else {
        input.type = 'password'
        obj.querySelector('i').classList.add('fa-eye')
        obj.querySelector('i').classList.remove('fa-eye-slash')
    }
})