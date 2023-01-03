// random javascript code

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

// Function to display log-in  section on click

function userAuth(){
    document.querySelector('.user-signup').style.display="block";
    document.body.style.opacity='.8';
    document.body.style.overflow='hidden';
}

function loginClose(){
    document.querySelector('.user-signup').style.display="none";
    document.body.style.opacity='initial';
    document.body.style.overflow='initial';
}

// Fuctions to display navigation-links on mobile and tablet;
let dis = 0;
document.querySelector('.navbar').addEventListener('click', showNav);
let navbar = document.querySelector('.navigation-tablets-mobile')
function showNav(){
    console.log(dis)
    navbar.style.display='flex';
    dis = 1;
    document.body.style.opacity='.8';
    document.body.style.overflow='hidden';
}

let sections = document.querySelectorAll('section:not(.navigation-tablets-mobile');


sections.forEach(section => {
    section.addEventListener('click', hideNav);
});
 



function hideNav(){
    if(dis == 1){
        console.log(dis);
        navbar.style.display="none";
        document.body.style.opacity='1';
        document.body.style.overflow='initial';
        dis = 0;
    }
}



// adding background color to navbar while scrolling.

const nav = this.document.querySelector('.nav');
const header = document.querySelector('.header');


window.addEventListener("scroll", function(){
    let scrHeight = window.scrollY;

    console.log(scrHeight);
    
    if (scrHeight > 200){
        header.style.background="rgb(41,41,41)";
        header.style.color="rgb(158,195,224)";
    }
    else {
        header.style.background="initial";
        header.style.color="white";
    }
 
});




