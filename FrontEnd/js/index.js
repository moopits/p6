import { gallery, filterContainer, loginA, galleryModal, modal, selectCategory } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";
import { getCategories } from "./components/api.js";
import { displayModal } from "./components/modal.js";
import { deleteById, fetch_response } from "./components/api.js"


let testModalFunction = 0
let testModalEvenOui = 0
let testModalEvenNon = 0
let testModal = 0
let modifierWorksItemId = 0
const keepCategoriesName = []

/**
 * Create Gallery in function of data received from API
 * @param {Array} data - Array of object data get works
 * @param {HTMLElement} container - container gallery from home page or modal
 */
export const createGallery = (data, isModal = false, container = gallery) => {
    container.innerHTML = ''
    if (isModal) {

        console.log("if(!isModal)")
    }

    data.forEach(item => {
        const figure = document.createElement('figure')
        figure.className = 'setRelative'
        const img = document.createElement('img')
        img.src = item.imageUrl
        img.alt = item.title
        figure.appendChild(img)

        if (isModal) {
            console.log('modal false/true = ' + isModal)
            const div = document.createElement('div')
            // click ON for delete -GET id categorie
            div.addEventListener('click', () => {
                console.log('click ON  ' + 'item.id= ' + item.id + ' item.catId= ' + item.categoryId)
                console.log(`testModal = ${testModal = testModal + 1}`)
                // modal CONFIRM supp pic Modal WORKS
                modifierWorks(item.id)
            })
            div.className = 'div-absolute'

            const icon = document.createElement('i')
            icon.classList = 'fa-solid fa-trash-can'
            /*span.appendChild(icon)    */
            div.appendChild(icon)
            figure.appendChild(div)
        } else {
            console.log('non modal')
            const figCaption = document.createElement('figcaption')
            figCaption.innerHTML = item.title
            figure.appendChild(figCaption)
        }

        container.appendChild(figure)
    });

}

const createCategories = data => {

    const buttonTous = document.createElement("button")
    buttonTous.classList.add("styleFont")
    buttonTous.classList.add("styleShape")
    buttonTous.classList.add("filter-active")
    //buttonOthers.classList.add("displayButtonLogOut")
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
    // save data name: pour utiliser dans le select de la modal
    // ajouter photo
    for (let i = 0; i < data.length; i++) {
        // save name: des categories pour modal
        // Ajoute la string à la fin du tableau strings (21/01)
        keepCategoriesName.push(data[i].name)

        // creation des buttons
        const buttonOthers = document.createElement("button")
        buttonOthers.classList.add("button" + i)
        buttonOthers.classList.add("styleFont")
        buttonOthers.classList.add("styleShape")
        //buttonOthers.classList.add("displayButtonLogOut")

        buttonOthers.innerText = data[i].name
        // AFFICHE NOMS CATEGORIES CONTROLE 
        //console.log(data) // control ONLY
        console.log(data[i].name) // control ONLY original
        console.log(keepCategoriesName[i]) // control ONLY compare

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

// get categories name for formulaire modal 2
const createSelectCategories = () => {
    selectCategory.innerHTML = ''
    getCategories().then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            const opt = document.createElement('option')
            opt.setAttribute("value", `${data[i].id}`)
            opt.innerText = data[i].name
            selectCategory.appendChild(opt)
        }
    })
}

/* build gallery index.html & modal */
getWorks().then(data => {
    createGallery(data)
    createGallery(data, true, galleryModal)
})


/* build categories */
getCategories().then(data => {
    if (!localStorage.token) { // hide en logOut
        createCategories(data)
    }
    createSelectCategories()
})

// condition IF sur login page OK
if (localStorage.token) {
    loginA.innerHTML = 'logout'
    console.log("token EXISTE")
    console.log(localStorage.getItem('token'))
    // changer href immediatement
    const getA = document.querySelector('#loginA')
    console.log(getA)
    getA.setAttribute('href', './index.html')

    // Show (mode edition) & (modifier)
    const showON = document.querySelector('.setBlackAdmin')
    showON.classList.remove("showOn")
    const showON2 = document.querySelector('.containerProjets span')
    showON2.classList.remove("showOn")
    console.log(showON)


    // gestion bouton modifier (modal)
    const b_modifier = document.querySelector('#clic_b_modifier')
    console.log(b_modifier)
    b_modifier.addEventListener("click", () => {
        console.log('modifier -> click ON -> modal show()')
        displayModal()
    })

    // getion logOut ( retour page acceuil - index.html)
    const l_logOut = document.querySelector('.clic_l_logOut')
    console.log(l_logOut)
    l_logOut.addEventListener("click", () => {
        console.log('click OUT')
        // changer nom lien
        loginA.innerHTML = 'logIn'
        //localStorage.removeItem("token")
        localStorage.removeItem("token")
    })
}



// GESTION DELETE PIC MODAL
function modifierWorks(id) {
    //////////////// console.log(id)
    document.getElementById("modalDialogBkgGrey").show()
    modifierWorksItemId = id
}


function event_oui_non() {
    // OUI
    const oui = document.querySelector('#oui')
    oui.addEventListener('click', () => {
        testModalEvenOui = testModalEvenOui + 1
        console.log(`testModalEvenOui= ${testModalEvenOui}`)
        console.log(`modifierWorksItemId index.js = ` + modifierWorksItemId)


        // CLOSE modal
        document.getElementById("modalDialogBkgGrey").close()

        /////////////console.log('fetch_response = ' + fetch_response)
        deleteById(modifierWorksItemId)
            .then(() => console.log('4 - fetch_response .then apres deletByid index.js = ' + fetch_response))
            .then(() => getWorks())
            .then(data => {
                createGallery(data)
                createGallery(data, true, galleryModal)
            })
    })

    // NON
    const non = document.querySelector('#non')
    non.addEventListener('click', (event) => {
        //event.preventDefault()
        testModalEvenNon = testModalEvenNon + 1
        console.log(`testModalEvenNon = ${testModalEvenNon}`)
        // Close modal
        document.getElementById("modalDialogBkgGrey").close()
        console.log('photo NON supprimé !!')
    })
    testModalFunction = testModalFunction + 1
    console.log(`testModalFunction =` + testModalFunction)
}

// appel fonction 1 seul fois (imperatif) id dans var global
event_oui_non()
