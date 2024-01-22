
import {    modal,
            modalBtnClose,
            modalBtnAjouter,
            modalBtnArrow
        } from "./domLinker.js"

export const displayModal = () => modal.style.display = "block"
const hideModal = () => modal.style.display = "none"

// HIDE fenetre modal
modalBtnClose.addEventListener('click', () => hideModal())

// modal 2 ARROW retour modal 1 (to delete work)
modalBtnArrow.addEventListener('click', () => {
    console.log('click Arrow')
})

// cré contenu modal 2
    modalBtnAjouter.addEventListener('click', () => {
    // display: inline-block ARROW modal 2
    modalBtnArrow.style.display = "inline-block"

    // 
    console.log('click Ajouter -> go modal 2')
    const modalSection = document.getElementById("modal-section")
    modalSection.innerHTML = ""
    console.log(modalSection)
    modalSection.classList.remove('gallery')
    //console.log(modalSection.classList.value)
    //console.log(modalSection.getAttribute('classList'))
    modalSection.classList.add('modal-style')
    const section = document.querySelector("#my-section");
    // ajoute une div
    const modalDiv = document.createElement("div");
    modalDiv.textContent = "Nouvelle div";

    modalSection.appendChild(modalDiv);
    //console.log(modalSection.getAttribute('class'))
    //console.log(modalSection.classList.value)
    //console.log(modalSection.getAttribute('class'))
    //modalSection.setAttribute("id", "my-new-section");
    // modalSection.setAttribute = "new-class"


})






/*const createModal2= (data, isModal = false, container = gallery) => {
    container.innerHTML = ''

}*/
// AJOUTE image -> change le contenu de la MEME fenetre modal






