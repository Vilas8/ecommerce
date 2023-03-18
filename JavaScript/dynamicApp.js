const collectionsList = document.querySelectorAll(".collections")
const headerCollections = collectionsList[0]
const pageCollections = collectionsList[1]


const showNewPage = (e) => {
    console.log(e.target)
}










collectionsList.forEach((collection) => {
        items = collection.querySelectorAll('li')
        items.forEach((item) => {
            item.addEventListener("click", showNewPage)
        })
})