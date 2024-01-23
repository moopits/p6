
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
    // display: inline-block ARROW modal 2 (show)
    modalBtnArrow.style.display = "inline-block"

    // 
    console.log('click Ajouter -> go modal 2')
    const modalSectionDiv1 = document.getElementById("modal-section-div-1")
    modalSectionDiv1.innerHTML = ""
    console.log(modalSectionDiv1)
    modalSectionDiv1.classList.remove('gallery')
    //console.log(modalSection.classList.value)
    //console.log(modalSection.getAttribute('classList'))
    modalSectionDiv1.classList.add('modal-style')

    //cré div pour icon, btn, text modal 2 (modalSectionDiv1)
    const div1 = document.createElement("div") // container
    div1.className = "modal-style-2"
    const iconImg = document.createElement("i") // ele
    iconImg.classList.add("fa-regular")
    iconImg.classList.add("fa-image")
    iconImg.classList.add("icon-img-size")
    div1.appendChild(iconImg)
    const btnImg1 = document.createElement("button") // ele
    btnImg1.textContent = "+ Ajouter photo"
    btnImg1.classList.add( "styleFontShape2")
    //btnImg1.classList.add("btn-color-grey-modal-2")
    div1.appendChild(btnImg1)
    const textSpanBtnGrey = document.createElement("span") // ele
    textSpanBtnGrey.className = "textSpanBtnGrey"
    textSpanBtnGrey.innerText = "jpg, png : 4mo max"
    div1.appendChild(textSpanBtnGrey)

    modalSectionDiv1.appendChild(div1)


    //cré le formulaire modal 2
    /*const section = document.querySelector("#modal-section-div-1")
    const div = document.createElement("div")
    div.textContent = "Nouvelle div"
    section.appendChild(div)************/

    // modif titre H2 modal 2
    const modal2h2 = document.querySelector(".modal-main h2")
    modal2h2.innerText = "Ajout photo"
    // modif texte btn vert bottom
    const modal2btnTitle = document.querySelector("#modal-section-div-2  button")
    modal2btnTitle.innerText = "Valider"

    //modif hover button bottom GREY et NO click
    // tant que pas cat et photo (champs rempli et validé !!)
   
    
    
    
    
    
    
    // ajoute une div
    /*********const modalDiv = document.createElement("div");
    modalDiv.textContent = "Nouvelle div";

    modalSection.appendChild(modalDiv);**********/
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






