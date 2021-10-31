function configFieds() {


    let name = document.getElementById("Name");
    let email = document.getElementById("Email");
    let tel = document.getElementById("Tel");

    let obrigatorioNome = document.getElementById("obrigatorioNome")
    let obrigatorioEmail = document.getElementById("obrigatorioEmail")
    let obrigatorioTel = document.getElementById("obrigatorioTel")


    name.addEventListener("keyup", function() {
        if (Name.value === "") {

            obrigatorioNome.innerText = "Campo obrigatório*"
            Name.classList.remove('successField');
            Name.classList.add('errorField');

        } else {
            obrigatorioNome.innerText = ""
            Name.classList.add('successField');
            Name.classList.remove('errorField');
        }

    });

    tel.addEventListener("keyup", function() {
        let isValidTel = validateTel(this);
        if (isValidTel) {
            obrigatorioTel.innerText = "Telefone válido";
            Tel.classList.add('successField');
            Tel.classList.remove('errorField');
        } else {
            obrigatorioTel.innerText = "Telefone inválido."
            Tel.classList.remove('successField');
            Tel.classList.add('errorField');

        }
    });

    email.addEventListener("keyup", function() {
        let isValidEmail = validateEmail(this);
        if (isValidEmail) {
            obrigatorioEmail.innerText = "E-mail válido";
            Email.classList.add('successField');
            Email.classList.remove('errorField');
        } else {
            obrigatorioEmail.innerText = "E-mail inválido."
            Email.classList.remove('successField');
            Email.classList.add('errorField');

        }
    })

    function validateEmail(inputText) {
        var mailFormat = /\S+@\S+\.\S+/;
        if (inputText.value.match(mailFormat)) {
            return true;
        } else {
            return false
        }
    }

    function validateTel(inputText) {
        var telFormat = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
        if (inputText.value.match(telFormat)) {
            return true;
        } else {
            return false
        }
    }

}

function validate() {
    if (document.myForm.Name.value == "") {
        alert("Por favor informe o seu nome!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.EMail.value == "") {
        alert("Por favor informe o seu E-mail!");
        document.myForm.EMail.focus();
        return false;
    }
    if (document.myForm.Tel.value == "" || isNaN(document.myForm.Tel.value) || document.myForm.Tel.value.length != 11) {
        alert("Por favor informe um número de telefone válido!");
        document.myForm.Tel.focus();
        return false;
    }
    return (true);
}