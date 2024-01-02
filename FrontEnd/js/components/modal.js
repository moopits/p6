import { modal, modalBtnClose } from "./domLinker.js"

export const displayModal = () => modal.style.display = "block"
const hideModal = () => modal.style.display = "none"

modalBtnClose.addEventListener('click', () => hideModal())

