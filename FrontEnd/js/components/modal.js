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
    selectCategory
} from "./domLinker.js"
import { postWork, getWorks } from "./api.js"

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
modalBtnClose.addEventListener('click', () => hideModal())

// modal 2 ARROW retour modal 1 (to delete work)
modalBtnArrow.addEventListener('click', () => {
    console.log('click Arrow')
    galleryModal.style.display = "grid"
    modalSection2.style.display = "none"
    modalBtnArrow.style.display = "none"
    containerBtnAdd.style.display = "block"
})

inputFile.addEventListener('change', () => {
    const [file] = inputFile.files
    fileUpload = file

    iconImg.style.display = 'none'
    labelInputFile.style.display = 'none'
    textSpanBtnGrey.style.display = 'none'

    if (fileUploadIsValid()) {
        preview.src = URL.createObjectURL(file)
        preview.style.height = "176px"
    } else {
        alert("Le format de fichier est invalide ou l'image est trop volumineuse")
    }

    formIsValid()

})

titleInput.addEventListener('input', () => {
    titleIsValid()
    formIsValid()
})

// cré contenu modal 2
modalBtnAjouter.addEventListener('click', () => {
    galleryModal.style.display = "none"
    modalSection2.style.display = "block"
    modalBtnArrow.style.display = "block"
    containerBtnAdd.style.display = "none"
})

formAddPhoto.addEventListener('submit', e => addWork(e))

const fileUploadIsValid = () => inputFile.size <= 4 * 1024 * 1024 && ["image/jpeg", "image/png"].includes(inputFile.type)

const titleIsValid = () => {
    title = titleInput.value
    return title.length > 0
}

const formIsValid = () => {
    if (fileUploadIsValid() && titleIsValid()) {
        btnValidateAddPhoto.removeAttribute('disabled')
        btnValidateAddPhoto.style.backgroundColor = '#1D6154';
    } else {
        btnValidateAddPhoto.setAttribute('disabled', true)
        btnValidateAddPhoto.style.backgroundColor = '#CBD6DC';
    }
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
