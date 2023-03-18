import { hideNav } from "./app.js"

const collectionsList = document.querySelectorAll(".collections")
const headerCollections = collectionsList[0]
const pageCollections = collectionsList[1]

let headerImageLink, headerProduct, itemList
let imageSrc, imageHoverSrc, title, subtitle, price

// json file input
let file = "/product.json"


const showNewPage = async (e) => {
    let item = e.target.innerText.toLowerCase()
    
    // waiting for data from json file
    let response = await fetch(file)
    let data = await response.json()

    // assigning all the dynamic content
    headerImageLink = data.products[item].headerImageLink
    headerProduct = data.products[item].headerProduct
    itemList = data.products[item].itemList
    // console.log(headerImageLink, headerProduct)

    // for (let product of itemList){
    //     imageSrc = product.src
    //     imageHoverSrc = product.src2
    //     title = product.title
    //     subtitle = product.subtitle
    //     price = product.price
    //     console.log(`${imageSrc}\n${imageHoverSrc}\n${title}\n${subtitle}\n${price}`)
    // }

    // update header
    updateHeader(headerImageLink, headerProduct)
    
}

const updateHeader = (link, name) => {
    const headerImage = document.querySelector(".header-image")
    const heading = headerImage.nextElementSibling
    headerImage.setAttribute("src", link)
    heading.innerHTML = name
}



// main execution 
collectionsList.forEach((collection) => {
        let items = collection.querySelectorAll('li')
        items.forEach((item) => {
            item.addEventListener("click", showNewPage)
            item.addEventListener("click", hideNav)
        })
})


export {showNewPage}