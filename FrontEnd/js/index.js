import { gallery, filterContainer, loginA, galleryModal } from "./components/domLinker.js";
import { getWorks } from "./components/api.js";
import { getCategories } from "./components/api.js";
import { displayModal } from "./components/modal.js";
import { deleteById } from "./components/api.js"


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
        console.log('clickOn')
        displayModal()
    })

    // getion logOut ( retour page acceuil - index.html)
    const l_logOut = document.querySelector('.clic_l_logOut')
    console.log(l_logOut)
    l_logOut.addEventListener("click", () => {
        console.log('clickOn')
        // changer nom lien
        loginA.innerHTML = 'logIn'
        //localStorage.removeItem("token")
        localStorage.removeItem("token")
    })
}

/**
 * Create Gallery in function of data received from API
 * @param {Array} data - Array of object data get works
 * @param {HTMLElement} container - container gallery from home page or modal
 */
const createGallery = (data, ag, container = gallery) => {
    container.innerHTML = ''
    console.log(ag)

    data.forEach(item => {
        const figure = document.createElement('figure')
        figure.className = 'setRelative'
        const img = document.createElement('img')
        img.src = item.imageUrl
        img.alt = item.title
        figure.appendChild(img)
        //const figCaption = document.createElement('figcaption')
        // CONTROL AFFICH texte ONLY INDEX.html
        // &&
        if(ag) {
            console.log('modal')
            const div = document.createElement('div')
            // click ON for delete -GET id categorie
            div.addEventListener('click', () => {
                console.log('click ON  ' + 'item.id= ' + item.id + ' item.catId= ' + item.categoryId)
                
                // modal CONFIRM supp pic Modal WORKS
                //if (localStorage.("token")) {
                    const token = localStorage.getItem("token");
                  //}
                confirm(item.id, token)
                /********if (result) {
                  // Supprimer l'élément
                  console.log('supprimé !!')
                  //deleteById(item.id)
                } else {
                  // Ne pas supprimer l'élément
                  console.log('NON supprimé !!')
                }    ************////            

            })
            div.className = 'div-absolute'

            /*const span = document.createElement('span')
            span.classList = 'center'
            div.appendChild(span) */

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
    for (let i = 0; i < data.length; i++) {
        const buttonOthers = document.createElement("button")
        buttonOthers.classList.add("button" + i)
        buttonOthers.classList.add("styleFont")
        buttonOthers.classList.add("styleShape")
        //buttonOthers.classList.add("displayButtonLogOut")


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
    /*   if (localStorage.token) {
           console.log("token EXISTE")
           const showON = document.querySelector('.containerButtons')
           showON.classList.remove("showOn")
           console.log(showON)
       }*/
    console.log(document.querySelectorAll('.containerButtons button'))
    console.log(document.querySelector('.containerButtons').children.length + ' enfant')
}

/* build gallery */
getWorks().then(data => {
    createGallery(data, 0)
    createGallery(data, 1, galleryModal)
})
/* build categories */
if (!localStorage.token) { // hide en logOut
    getCategories().then(data => createCategories(data))
}


function confirm(item, token) {
    console.log(item)
    console.log(token)
    // Supprimer l'élément
    //console.log(document.getElementById("abcdef"))
    document.getElementById("abcdef").show()
    const oui = document.querySelector('.oui')
    oui.addEventListener('click', () => {
        document.getElementById("abcdef").close()
        //console.log(oui)
        //console.log('oui')
        console.log('supprimé !!')
        deleteById(item, token)
    })

    // Ne pas supprimer l'élément
    const non = document.querySelector('.non')
    non.addEventListener('click', () => {
        document.getElementById("abcdef").close()
        //console.log(non)
        //console.log('non')
        console.log('NON supprimé !!')
    })


    
  /*
    const yesButton = modal.querySelector(".btn-primary");
    yesButton.addEventListener("click", () => {
      modal.remove();
      return true;
    });
  
    const noButton = modal.querySelector(".btn-secondary");
    noButton.addEventListener("click", () => {
      modal.remove();
      return false;
    });*/
  }


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

/*
var data1 = {
    username: "johndoe",
    password: "password123"
};
console.log(JSON.stringify(data1))


// Vérifiez si la `div` `containerButtons` existe dans le DOM
if (!document.querySelector('.containerButtons')) {
    // La `div` `containerButtons` n'existe pas
    console.log('La div containerButtons existe pas')
  } else {
    console.log('La div containerButtons existe')

  }*/







