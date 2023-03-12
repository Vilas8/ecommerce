const account = document.querySelector('.account');
const cancel = document.querySelector('.cancel');
const loginSection = document.querySelector('.user-reg');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.register-form');

const showLog = (e) =>{
    loginSection.classList.remove('-right-80');
    loginSection.classList.add("right-0");
}

const hideLog = (e) => {
    loginSection.classList.remove("right-0");
    loginSection.classList.add("-right-80");
}

const showLogin = (e) => {
    e.target.classList.add("text-slate");
    if(e.target === login){
        loginForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
    }
    if (e.target === register){
        signUpForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}



account.addEventListener("click", showLog);
cancel.addEventListener("click", hideLog);
login.addEventListener("click", showLogin);
register.addEventListener("click", showLogin);