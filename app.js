let count = 1;
const inival = "Legendary flannels and classical shirts - built from responsibe materials, designed to take on fall, winter and whatever else you throw at them";
function changeContent(){
    if(count == 1){
        document.querySelector(".para").innerHTML =
        "Comfortable & Funclothing for people who value ournatural resources";
    }
    else{
        document.querySelector(".para").innerHTML = inival;
    }
    count = (count == 1) ? 0:1;
    
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

// Function to display log-in section on click

function userAuth(){
    document.querySelector('.user-signup').style.display="block";
}

function loginClose(){
    document.querySelector('.user-signup').style.display="none";
}