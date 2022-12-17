import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')

const SUBMIT_VALUE = "feedback-form-state";


form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInput, 500))

autoFill()

function onInput(){
    
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }

    return localStorage.setItem(SUBMIT_VALUE, JSON.stringify(formData))
}

function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

    if (form.elements.email.value === '' || form.elements.message.value == '') {
                return alert('Всі поля повинні бути заповнені')
            };

        formData.forEach((value, name) => {
            

            return console.log(name, value);
        })   
        localStorage.removeItem(SUBMIT_VALUE)
        return form.reset();
    }

function autoFill() {
    const values = JSON.parse(localStorage.getItem(SUBMIT_VALUE))
    const {email, message} = values;

    if (!localStorage.getItem(SUBMIT_VALUE)) {
        return
    }
        form.elements.email.value = email;
        form.elements.message.value = message;
}
