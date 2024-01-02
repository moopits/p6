import { modal, modalBtnClose } from "./domLinker.js"

export const displayModal = () => modal.style.display = "block"
const hideModal = () => modal.style.display = "none"

// HIDE fenetre modal
modalBtnClose.addEventListener('click', () => hideModal())

// AJOUTE image -> change le contenu de la MEME fenetre modal





