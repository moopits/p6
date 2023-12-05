import { gallery } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";

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

