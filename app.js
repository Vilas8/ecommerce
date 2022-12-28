function changeContent(){
    const a = document.querySelector(".para").innerHTML =
    "Comfortable & Funclothing for people who value ournatural resources"
    console.log(a)
}


// functions to show log-in and signup part when user clicks on it.

function func1(){
    document.querySelector('.log-in').style.display="initial";
    document.querySelector('.signup').style.display="none";
}

function func2(){
    document.querySelector('.signup').style.display="initial";
    document.querySelector(".log-in").style.display="none";
}