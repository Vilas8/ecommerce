const account = document.querySelector('.account');
const cancel = document.querySelector('.cancel');
const loginSection = document.querySelector('.user-reg');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.register-form');
const productSection = document.querySelector('.products-options-list')
const productsOption = document.querySelector('.collections-name');
const productList = document.querySelector(".product-list-items") ;


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

// making the product options fixed
function makeCollectionsFixed(e){
        let asideList = ["fixed", "top-16"];
        const topDistance = productSection.getBoundingClientRect().top;
        const optionWidth = productsOption.clientWidth;
        console.log(optionWidth);
        if(!hasRun && topDistance <= 64){
            console.log(topDistance);
            for (let className of asideList){
                console.log(className);
                productsOption.classList.add(className);
            }
            console.log(productsOption);
            
            productList.style.margin = `0 0 0 ${optionWidth+5}px`;
            hasRun = true;
        }
        // console.log(topDistance)
        if(topDistance > 64){
            for (let className of asideList){
                productsOption.classList.remove(className);
            }
            productList.style.margin = "0";
            hasRun = false;
        }


    
}


// Execution
account.addEventListener("click", showLog);
cancel.addEventListener("click", hideLog);

login.addEventListener("click", showLogin);
register.addEventListener("click", showLogin);

let hasRun = false;
window.addEventListener('scroll', makeCollectionsFixed);


