import { gallery } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";
/*import { createFilter } from "./components/filters.js";*/
/*import createButtonsFilterJobs from "./components/filters.js";*/

/*console.log("TEST : ", createFilter)*/
import createButtonJobs from './components/filters.js'
createButtonJobs()
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

getWorks()
    .then(data => createGallery(data))

    /*function createButtonsFilterJobs() {

        const createFilterJobs = document.querySelector(".containerButtons")
    
        for (let i = 0; i < 4; i++) { // repete slides.lenght fois
            const button = document.createElement("button") // cré une 'div'
            button.classList.add(".style") // ajoute une class 'dot' dans la 'div'
            createFilterJobs.appendChild(button) // ajoute le tout entre le container('div) avec la class "dots"
        }
    }

createButtonsFilterJobs()*/



