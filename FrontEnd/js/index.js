import { gallery } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";
import { getCategories } from "./components/api.js";

import createButtonJobs from './components/filters.js';


/**
 * Create Gallery in function of data received from API
 * @param {Array} data - Array of object data get works
 */
const createGallery = data => {
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


/* build gallery */
getWorks().then(data => createGallery(data))


/* build buttons filter */
createButtonJobs()






const k = [1,2,3]
console.log('cat: ' + k[0])

// make array button
const containerButtons_filter = document.querySelectorAll('.containerButtons button')
console.log(typeof(containerButtons_filter))
console.log(containerButtons_filter[0])
console.log(containerButtons_filter.length)

let categoryId = null

fetch('http://localhost:5678/api/works')
.then((response) => response.json())
.then((data) => {

for (let index = 0; index < containerButtons_filter.length; index++) {

        containerButtons_filter[index].addEventListener('click', (event) => { /*conserver event*/

                if(index === 0) {
                    categoryId = data
                } else {
                    categoryId = data.filter((item) => item.categoryId === index)
                }
            console.log('button:  ' + index + '  -  categoryId:  ' + index)
            console.log(categoryId)        
        })
    }
})



