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
    if(e.target === login){
        loginForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        login.classList.remove("text-black");
        login.classList.add("text-slate");   
        register.classList.add('text-black');
        register.classList.remove("text-slate")
    }
    if (e.target === register){
        signUpForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        register.classList.remove('text-black');
        register.classList.add("text-slate");
        login.classList.add("text-black");
        login.classList.remove("text-slate"); 
       
    }
}



account.addEventListener("click", showLog);
cancel.addEventListener("click", hideLog);
login.addEventListener("click", showLogin);
register.addEventListener("click", showLogin);