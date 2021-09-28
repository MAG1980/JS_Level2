class Form{
    constructor(container, inputs){
        this.$container = document.getElementById(container);
        this.inputs = inputs;
        this.$inputs = [];
        this.addListener(this.$inputs);
    }
    createHTML(){
        this.inputs.forEach(element => {
            let $input = this.$container.insertAdjacentElement('beforeend', element.create());
            this.$inputs.push($input);
        });
        console.log(this.$inputs);
        this.$container.insertAdjacentHTML('beforeend', `<button class="button" type="submit">Отправить</button>`);
    }
    addListener(){
        this.$container.addEventListener('submit',(event)=>{
            let errorCounter = 0;
            this.$inputs.forEach(element =>{
                let $el = element.querySelector('input');
                console.log($el.value);
                console.log($el.value);
                let regexp = `${$el.dataset.regexp}`;
                let $warning = element.querySelector(`.input-warning_${$el.placeholder}`);
                if (!$el.value.match(`${regexp}`)){
                    errorCounter++;
                    $el.classList.add('error');
                    $warning.classList.add('warning');
                } else if ($warning.classList.contains('warning')){
                    $warning.classList.remove('warning');
                }
            })
            if (errorCounter !== 0){
                event.preventDefault();
                return;
            }
            document.forms['form'].submit();
        })
    }
}
class Input{
    constructor(type, placeholder, label, regExp, message){
        this.type = type;
        this.placeholder = placeholder;
        this.label = label;
        this.regExp = regExp;
        this.message = message;
    }
    create(){
        let element = document.createElement('fieldset');
        element.className ='fieldset';
        element.insertAdjacentHTML('afterbegin',
            `<div class="input-wrapper">
      <input type="${this.type}" data-regexp="${this.regExp}" name="${this.placeholder}" class="input input-${this.placeholder}" id="input-${this.placeholder}" placeholder="${this.placeholder}">
      <label for="input-${this.placeholder}">${this.label}</label>
    </div>
      <p class="input-warning_${this.placeholder}">${this.message}</p>
    `
        );
        this.addListener(element);
        return element;
    }
    addListener(element){
        element.addEventListener('input', (event) => {
            this.setErrorClass(event);
            this.removeErrorClass(event);
        })
    }
    matchRegexp(event){
        return event.target.value.match(this.regExp);
    }
    setErrorClass(event){
        if (!this.matchRegexp(event)){
            event.target.classList.add('error');
        }
    }
    removeErrorClass(event){
        if ((this.matchRegexp(event) || event.target.value === "")
            && event.target.classList.contains('error')) {
            event.target.classList.remove(('error'));
            document.querySelector(`.input-warning_${this.placeholder}`)
                .classList.remove('warning');
        }
    }
}
let inputName = new Input("text", "name", "Имя", "^([A-ZА-Я])+([A-Za-zА-Яа-яЁё])*$", 'Введённое имя не соответствует требованиям!');
//let nameElem = inputName.create();
let inputPhone = new Input("tel", "phone", "Номер телефона", "^\\+7\\(\\d{3}\\)\\d{3}-\\d{4}$", 'Введённый номер телефона не соответствует требованиям!');
//let phoneElem = inputPhone.create();
let inputEmail = new Input("email", "email", "Адрес электронной почты", "[\\w|\\.|-]+@[\\w|\\.|-]+\\.(ru)$", 'Введённый адрес электронной почты не соответствует требованиям!');
//let emailElem = inputEmail.create();
// let form = new Form("form-container", [nameElem, phoneElem, emailElem]).addInputs();
let form = new Form("form-container", [inputName, inputPhone, inputEmail]).createHTML();