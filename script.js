const loginForm = document.getElementById('loginForm')

function validateFields() {

    const emailValid = isEmailValid();
    form.recoverPasswordBtn().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.btnLogin().disabled = !emailValid || !passwordValid
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isEmailValid() {
    const email = form.email().value;

    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;

    if (!password) {
        return false;
    }
    return true
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    recoverPasswordBtn: () => document.getElementById('recover-password-btn'),
    btnLogin: () => document.getElementById('btn-login')
}

function login() {
    console.log("Iniciando login...");
    signInWithEmailAndPassword(auth, form.email().value, form.password().value)
        .then(response => {
            console.log("Login bem-sucedido", response);
            window.location.href = 'home.html';
        })
        .catch(error => {
            console.error("Erro ao fazer login:", error.message);
            alert('Email ou senha inválidos!');
        });
}


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
    login();
});