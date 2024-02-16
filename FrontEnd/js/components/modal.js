import {
    modal,
    modalBtnClose,
    modalBtnAjouter,
    modalBtnArrow,
    modalBody,
    modalSection2,
    galleryModal,
    containerBtnAdd,
    inputFile,
    iconImg,
    labelInputFile,
    textSpanBtnGrey,
    preview,
    titleInput,
    btnValidateAddPhoto,
    formAddPhoto,
    selectCategory,
    modalMainH2
} from "./domLinker.js"
import { postWork, getWorks } from "./api.js"
import { createGallery } from "../index.js"

let fileUpload, title


export const displayModal = () => {
    modal.style.display = "block"
    galleryModal.style.display = "grid"
    modalBtnArrow.style.display = "none"
    modalSection2.style.display = "none"
    containerBtnAdd.style.display = "block"
}
const hideModal = () => modal.style.display = "none"

// HIDE fenetre modal
modalBtnClose.addEventListener('click', () => {
    modalMainH2.innerHTML = 'Galerie photo'
    hideModal()
})

// modal 2 ARROW retour modal 1 (to delete work)
modalBtnArrow.addEventListener('click', () => {
    console.log('click Arrow')
    console.log(fileUpload)
    modalMainH2.innerHTML = 'Galerie photo'
    galleryModal.style.display = "grid"
    modalSection2.style.display = "none"
    modalBtnArrow.style.display = "none"
    containerBtnAdd.style.display = "block"
})

inputFile.addEventListener('change', () => {
    console.log(fileUpload)
    const [file] = inputFile.files
    fileUpload = file

    iconImg.style.display = 'none'
    labelInputFile.style.display = 'none'
    textSpanBtnGrey.style.display = 'none'

    if (fileUploadIsValid()) {
        preview.style.display = "flex"
        preview.src = URL.createObjectURL(file)
        preview.style.height = "176px"
    } else {
        alert("Le format de fichier est invalide ou l'image est trop volumineuse")
    }

    formIsValid()

})

titleInput.addEventListener('input', () => {
    console.log('titleInput = ', titleInput.value)
    titleIsValid()
    formIsValid()
})

// cré contenu modal 2
modalBtnAjouter.addEventListener('click', () => {
    galleryModal.style.display = "none"
    modalSection2.style.display = "block"
    modalBtnArrow.style.display = "block"
    containerBtnAdd.style.display = "none"
    preview.style.display = "none"
    iconImg.style.display = 'block'
    labelInputFile.style.display = 'block'
    textSpanBtnGrey.style.display = 'block'
    title = null
    fileUpload = null
    titleInput.value = ''
    modalMainH2.innerHTML = 'Ajout Photo'
    formIsValid()
})

formAddPhoto.addEventListener('submit', e => addWork(e))

const fileUploadIsValid = () => fileUpload?.size <= 4 * 1024 * 1024 && ["image/jpeg", "image/png"].includes(fileUpload?.type)

const titleIsValid = () => {
    title = titleInput.value
    return title.length > 0
}

const formIsValid = () => {
    if (fileUploadIsValid() && titleIsValid()) {
        btnValidateAddPhoto.removeAttribute('disabled')
        btnValidateAddPhoto.style.backgroundColor = '#1D6154'
        btnValidateAddPhoto.style.border = '1px solid #1D6154'       
    } else {
        btnValidateAddPhoto.setAttribute('disabled', true)
        btnValidateAddPhoto.style.backgroundColor = '#A7A7A7'
        btnValidateAddPhoto.style.border = '1px solid #A7A7A7'
    }
    console.log('formIsValid = ', fileUploadIsValid() && titleIsValid())
}


// Ajouter un projet
const addWork = event => {
    event.preventDefault();

    const image = inputFile.files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", selectCategory.value);
    formData.append("image", image);

    postWork(formData)
        .then(() => getWorks())
        .then(data => {
            createGallery(data)
            createGallery(data, true, galleryModal)
            hideModal()
        })
}
