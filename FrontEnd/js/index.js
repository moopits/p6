import { gallery, filterContainer } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";
import { getCategories } from "./components/api.js";

// import createButtonJobs from './components/filters.js';


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

    const buttonAll = document.createElement("button")
    buttonAll.classList.add("styleFont")
    buttonAll.classList.add("styleShape")
    buttonAll.classList.add("filter-active")
    buttonAll.innerText = "Tous";
    //buttonAll.addEventListener('click', () => getWorks().then(data => createGallery(data)))
    
    buttonAll.addEventListener('click', () => {
        const buttonBkgRemove = document.querySelectorAll('.containerButtons button')
        console.log(buttonBkgRemove)
        buttonBkgRemove.forEach(dot => dot.classList.remove("filter-active"));
        buttonBkgRemove[0].classList.add("filter-active")

        return getWorks().then(worksTous => { // bouton # 1 ONLY
            const filteredData = worksTous
            console.log(worksTous)
            createGallery(worksTous)
        })
    })
    
    filterContainer.appendChild(buttonAll)

    for (let i = 0; i < data.length; i++) {
        const button = document.createElement("button")
        button.classList.add("button" + i)
        button.classList.add("styleFont")
        button.classList.add("styleShape")

        button.innerText = data[i].name;

        button.addEventListener('click', () => { // bouton # 1 -> # infini
            const buttonBkgRemove = document.querySelectorAll('.containerButtons button')
            console.log(buttonBkgRemove)
            buttonBkgRemove.forEach(dot => dot.classList.remove("filter-active"));
            buttonBkgRemove[1 + i].classList.add("filter-active")
                
            return getWorks().then(works_dataLength => {
                const filteredData = works_dataLength.filter(item => item.categoryId === data[i].id)
                console.log(filteredData)
                createGallery(filteredData)
            })
        })

        filterContainer.appendChild(button)
    }
}

/* build gallery */
getWorks().then(data => createGallery(data))
/* build categories */
getCategories().then(data => createCategories(data))

/* build buttons filter */
// createButtonJobs()






// const k = [1,2,3]
// console.log('cat: ' + k[0])

// // make array button
// const containerButtons_filter = document.querySelectorAll('.containerButtons button')
// console.log(typeof(containerButtons_filter))
// console.log(containerButtons_filter[0])
// console.log(containerButtons_filter.length)

// let categoryId = null

// fetch('http://localhost:5678/api/works')
//     .then((response) => response.json())
//     .then((data) => {

//         for (let index = 0; index < containerButtons_filter.length; index++) {

//             containerButtons_filter[index].addEventListener('click', (event) => { /*conserver event*/

//                 if (index === 0) {
//                     categoryId = data
//                 } else {
//                     categoryId = data.filter((item) => item.categoryId === index)
//                 }
//                 console.log('button:  ' + index + '  -  categoryId:  ' + index)
//                 console.log(categoryId)
//             })
//         }
//     })



