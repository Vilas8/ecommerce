// random javascript code

let count = 1;
const initial = "Legendary flannels and classical shirts - built from responsibe materials, designed to take on fall, winter and whatever else you throw at them";
function changeContent(){
    if(count == 1){
        document.querySelector(".para").innerHTML =
        "Comfortable & Funclothing for people who value ournatural resources";
    }
    else{
        document.querySelector(".para").innerHTML = initial;
    }
    count = (count == 1) ? 0:1;
    
}

let dis = 0;

// adding background color to navbar while scrolling.

window.addEventListener("scroll", function(){
    let scrHeight = window.scrollY;
    let header = document.querySelector('.header')
    let logo = this.document.querySelector('#logo').querySelector('h3');
    
    if (scrHeight > 200){
        header.style.background="rgb(41,41,41)";
        logo.classList.add('gradient-color');
        
    }
    else {
        header.style.background="initial";
        logo.classList.remove("gradient-color");
    }
 
});

const mobileNav = document.querySelector('.mobile-navigation');
const search = mobileNav.querySelector('.search');
const searchSym = search.children[0];
const searchBox = search.children[1];
const shop = mobileNav.querySelector('.shop');
const collections = mobileNav.querySelector('.collections');
const arrowMark = mobileNav.querySelector('svg');
const navBar = document.querySelector(".navbar");
const mainContainer = document.querySelector(".main-container");


searchBox.addEventListener('click', (e) => {
    searchSym.classList.add("move-right");
    search.classList.add("border-effect");
})

shop.addEventListener("click", (e) => {
    if(count == 1){
        collections.style.display = "block";
        shop.nextElementSibling.style.display = "none";
        shop.nextElementSibling.nextElementSibling.style.display = "none";
        arrowMark.style.transform = "rotate(180deg)";
    }
    else {
        collections.style.display = "none";
        shop.nextElementSibling.style.display = "initial";
        shop.nextElementSibling.nextElementSibling.style.display = "initial";
        arrowMark.style.transform = "rotate(0deg)";

    }   
    count = (count == 1) ? 0:1;
})

navBar.addEventListener("click", (e) => {
    mobileNav.style.right = "0px";
    mainContainer.classList.add("blur");

    let sections = document.querySelectorAll('section:not(.mobile-navigation)');
    sections.forEach(section => {
        section.addEventListener("click", (e) => {
            mobileNav.style.right = "-500px";
            mainContainer.classList.remove("blur");
            searchSym.classList.remove("move-right");
            search.classList.remove("border-effect");
        })
    })


})





