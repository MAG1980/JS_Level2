'use strict';
let nameRegExp = /^([A-ZА-Я])+([A-Za-zА-Яа-яЁё])*$/;
let $name = document.querySelector('.input-name');
let $nameWarning = document.querySelector('.input-warning_name');
$name.addEventListener('input', (event) => {
    console.log(event.target.value);
    if (!event.target.value.match(nameRegExp)){
        event.target.classList.add('error');
    }
    if ((event.target.value.match(nameRegExp) || event.target.value === "")
        && event.target.classList.contains('error')) {
        $name.classList.remove(('error'));
        $nameWarning.classList.remove('warning');
    }
})
let phoneRegExp = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
let $phone = document.querySelector('.input-phone');
let $phoneWarning = document.querySelector('.input-warning_phone');
$phone.addEventListener('input', (event) => {
    console.log(event.target.value);
    if (!event.target.value.match(phoneRegExp)){
        event.target.classList.add('error');
    }
    if ((event.target.value.match(phoneRegExp) || event.target.value === "")
        && event.target.classList.contains('error')) {
        $phone.classList.remove(('error'));
        $phoneWarning.classList.remove('warning');
    }
})
let emailRegExp = /[\w|\.|-]+@[\w|\.|-]+\.(ru)$/;
let $email = document.querySelector('.input-email');
let $emailWarning = document.querySelector('.input-warning_email');
$email.addEventListener('input', (event) => {
    console.log(event.target.value);
    if (!event.target.value.match(emailRegExp)){
        event.target.classList.add('error');
    }
    if ((event.target.value.match(emailRegExp) || event.target.value === "")
        && event.target.classList.contains('error')) {
        $email.classList.remove(('error'));
        $emailWarning.classList.remove('warning');
    }
})
document.querySelector('form').addEventListener('submit',(event)=>{
    console.log($name.value);
    if (!$name.value.match(nameRegExp)){
        event.preventDefault();
        $nameWarning.classList.add('warning');
    }
    if (!$phone.value.match(phoneRegExp)){
        event.preventDefault();
        $phoneWarning.classList.add('warning');
    }
    if (!$email.value.match(emailRegExp)){
        event.preventDefault();
        $emailWarning.classList.add('warning');
    }
    document.forms['form'].submit();
})