const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    if(firstname === ''){
        addError('firstname', 'First Name cannot be empty')
    }else{
        removeError('firstname')
    }

    if(lastname === ''){
        addError('lastname', 'Last Name cannot be empty')
    }else{
        removeError('lastname')
    }

    if(email === ''){
        addError('email', 'Email cannot be empty')
    } else if(!isValid(email)){
        addError('email', 'Email is not valid')
    } else {
        removeError('email')
    }

    if(password === ''){
        addError('password', 'Password cannot be empty')
    }else{
        removeError('password')
    }
})

function addError(field, message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
}

function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}