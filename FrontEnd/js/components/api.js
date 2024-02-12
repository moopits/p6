
const CATEGORIES_URL_get = 'http://localhost:5678/api/categories'
const WORK_URL_get = 'http://localhost:5678/api/works'
const WORK_URL_deleteId = 'http://localhost:5678/api/works'

// varible de test count # count réalisé
let testInfo_deleteById = 0
export let fetch_response = 0

// WORK_URL_get)
export const getWorks = () => fetch(WORK_URL_get).then((response) => {//.then(data => data.json())
  if (response.status === 200) {
    // Code 200 : succès
    const data = response.json()
    console.log("5 - actualisation -> fonction getWorks Réponse reçue avec succès WORK_URL api.js")
    console.log(data)
    return data
  }
  else if (response.status === 500) {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour WORK_URL");
    error.status = response.status;
    error.message = response.statusText

    // Ouvre une petite fenêtre avec le code d'erreur et sa définition
    alert(error);
  }
})
// CATEGORIES_URL_get
export const getCategories = () => fetch(CATEGORIES_URL_get).then((response) => {//.then(data => data.json())
  if (response.status === 200) {
    // Code 200 : succès
    const data = response.json()
    console.log("Réponse reçue avec succès pour CATEGORIES_URL");
    console.log(data)
    return data
  }
  else if (response.status === 500) {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour CATEGORIES_URL");
    error.status = response.status;
    error.message = response.statusText

    // Ouvre une petite fenêtre avec le code d'erreur et sa définition
    alert(error);
  }
})

export const postLogin = data => fetch('http://localhost:5678/api/users/login', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
  .then(data => {
    if (!data.token) {
      throw 'Erreur dans l’identifiant ou le mot de passe'
    }
    return data
  })


// MODIFIED delete WORKS by Id (on modal ONLY withn modifier button)
export const deleteById = async (id) => {
  console.log(`1 - modifierWorksItemId api.js = ` + id)
  await fetch(WORK_URL_deleteId + '/' + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((response) => {
      console.log(`2 - reponse server function deleteById api.js = ${response.status}`)
      //return(fetch_response = response.status)
      fetch_response = response.status
    })
}

export const postWork = data => fetch(WORK_URL_get, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
  body: data,
});