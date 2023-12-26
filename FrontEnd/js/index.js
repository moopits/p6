import { gallery, filterContainer } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";
import { getCategories } from "./components/api.js";

/**
 * Create Gallery in function of data received from API
 * @param {Array} data - Array of object data get works
 */
const createGallery = data => {
    gallery.innerHTML = ''

    data.forEach(item => {
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.src = item.imageUrl
        img.alt = item.title
        figure.appendChild(img)
        const figCaption = document.createElement('figcaption')
        figCaption.innerHTML = item.title
        figure.appendChild(figCaption)
        gallery.appendChild(figure)
    });
}

const createCategories = data => {

    const buttonTous = document.createElement("button")
    buttonTous.classList.add("styleFont")
    buttonTous.classList.add("styleShape")
    buttonTous.classList.add("filter-active")
    buttonTous.innerText = "Tous";
    //buttonTous.addEventListener('click', () => getWorks().then(data => createGallery(data)))
    
    // add event on button
    buttonTous.addEventListener('click', () => {
        //remove class="filter-active" toall bkg color button
        const buttonBkgRemove = document.querySelectorAll('.containerButtons button')
        console.log(buttonBkgRemove)
        buttonBkgRemove.forEach(element => element.classList.remove("filter-active"));
        // add bkg to button
        buttonBkgRemove[0].classList.add("filter-active")

        return getWorks().then(worksTous => {
            console.log(worksTous)
            const filteredData = worksTous
            console.log(filteredData)
            createGallery(filteredData)
        })
    })
    // add <button> 'Tous' in <div class="containerButtons">
    filterContainer.appendChild(buttonTous)

    // create buttons loop with 'name from categories db' with categories.length
    for (let i = 0; i < data.length; i++) {
        const buttonOthers = document.createElement("button")
        buttonOthers.classList.add("button" + i)
        buttonOthers.classList.add("styleFont")
        buttonOthers.classList.add("styleShape")

        buttonOthers.innerText = data[i].name;

        // add event on button
        buttonOthers.addEventListener('click', () => {
            //remove class="filter-active" toall bkg color button
            const buttonBkgRemove = document.querySelectorAll('.containerButtons button')
            console.log(buttonBkgRemove)
            buttonBkgRemove.forEach(element => element.classList.remove("filter-active"));
            // add bkg to button
            buttonBkgRemove[1 + i].classList.add("filter-active")
                
            return getWorks().then(works_dataLength => {
                console.log(works_dataLength)
                const filteredData = works_dataLength.filter(item => item.categoryId === data[i].id)
                console.log(filteredData)
                createGallery(filteredData)
            })
        })
        // add <button> 'name from categories db' in <div class="containerButtons">
        filterContainer.appendChild(buttonOthers)
    }
}

/* build gallery */
getWorks().then(data => createGallery(data))
/* build categories */
getCategories().then(data => createCategories(data))


// SET tuto test
//const nombres = [2, 3, 4, 4, 2, 2, 2, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
//console.log([...new Set(nombres)]);
// concatenation tuto test
// const k = [1,2,3]
// console.log('cat: ' + k[0])

// // make array button
// const containerButtons_filter = document.querySelectorAll('.containerButtons button')
// console.log(typeof(containerButtons_filter))
// console.log(containerButtons_filter[0])
// console.log(containerButtons_filter.length)


var data1 = {
    username: "johndoe",
    password: "password123"
  };
console.log(JSON.stringify(data1))


