
const CATEGORIES_URL_get = 'http://localhost:5678/api/categories'
const WORK_URL_get = 'http://localhost:5678/api/works'
//const LOGIN_URL_post = 'http://localhost:5678/api/users/login'
//const WORK_URL_post = 'http://localhost:5678/api/works'
const WORK_URL_deleteId = 'http://localhost:5678/api/works'


// WORK_URL_get)
export const getWorks = () => fetch(WORK_URL_get).then((response) => {//.then(data => data.json())
  if (response.status === 200) {
    // Code 200 : succès
    const data = response.json();
    console.log("Réponse reçue avec succès WORK_URL");
    console.log(data);
    return data
  } 
  else if (response.status === 500) {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour WORK_URL");
    error.status = response.status;
    error.message = response.statusText;

    // Ouvre une petite fenêtre avec le code d'erreur et sa définition
    alert(error);
  }
  })
// CATEGORIES_URL_get
export const getCategories = () => fetch(CATEGORIES_URL_get).then((response) => {//.then(data => data.json())
  if (response.status === 200) {
    // Code 200 : succès
    const data = response.json();
    console.log("Réponse reçue avec succès pour CATEGORIES_URL");
    console.log(data);
    return data
  } 
  else if (response.status === 500) {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour CATEGORIES_URL");
    error.status = response.status;
    error.message = response.statusText;

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

// delete WORKS by Id (on modal ONLY withn modifier button)
export const deleteById = (getModalId, token) => fetch(WORK_URL_deleteId + '/' + getModalId, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then((response) => {
  console.log(getModalId)
  console.log(response.status)
  if (response.status === 200) {
    console.log("La ressource a été supprimée avec succès.");
  } else {
    console.log("La suppression de la ressource a échoué.");
  }
  //console.log('Code ${reponse.status} ${response.statusText}')
})
  /*else {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour CATEGORIES_URL");
    error.status = response.status;
    error.message = response.statusText;
    // Ouvre une petite fenêtre avec le code d'erreur et sa définition
    alert(error);
  }*/


  // LOGIN_URL_post
/*export const postLogin = () => fetch(LOGIN_URL_post).then((response) => {//.then(data => data.json())
  if (response.status === 200) {
    // Code 200 : succès
    const data = response.json();
    console.log("Réponse reçue avec succès WORK_URL");
    console.log(data);
    return data
  } 
  else if (data.status === 401) {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour LOGIN_URL_pos");
    error.status = response.status;
    error.message = response.statusText;

    // Ouvre une petite fenêtre avec le code d'erreur et sa définition
    alert(error);
  }
  else if (data.status === 404) {
    // Code 500 : erreur interne du serveur
    // cré une instance Error
    const error = new Error("Erreur interne du serveur pour LOGIN_URL_pos");
    error.status = response.status;
    error.message = response.statusText;

    // Ouvre une petite fenêtre avec le code d'erreur et sa définition
    alert(error);
  }

})*/


/*  CODE DE TEST */


/*fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))*/

  // fetch(CATEGORIES_URL) /* url */
  // .then((response) => {
  //   if (response.status === 200) {
  //     return response.json();
  //   } else {
  //     throw new Error("Erreur de requête");
  //   }
  // })
  // .then((data) => console.log(data));


// fetch(WORK_URL) /* url */
// .then((response) => {
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     throw new Error("Erreur de requête");
//   }
// })
// .then((data) => console.log(data));

// console.log()

// /* extraction des categoryId de la BD works(WORK_URL) */
// fetch(WORK_URL)
//   .then((response) => response.json())
//   .then((data) => {
//     // Méthode filter() (recuperer length bd CATEGORY)
//     /* CREER un index category.lentgh ->  categoryId[category.lentgh] */
//     /* creer tableau length BD category*/
    
//     const categoryId_1 = data.filter((item) => item.categoryId === 1);
//     const categoryId_2 = data.filter((item) => item.categoryId === 2);
//     const categoryId_3 = data.filter((item) => item.categoryId === 3);

//     console.log(categoryId_1); // [ { id: 2, name: 'Appartements' } ]
//     console.log(categoryId_2); // [ { id: 2, name: 'Appartements' } ]
//     console.log(categoryId_3); // [ { id: 2, name: 'Appartements' } ]

//   });





/*const url = 'https://example.com/api/data';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Méthode d'indexation
    const data2 = data[1];
    console.log(data2); // { id: 2, name: 'Appartements' }

    // Méthode find()
    const data2 = data.find((item) => item.id === 2);
    console.log(data2); // { id: 2, name: 'Appartements' }

    // Méthode filter()
    const data2 = data.filter((item) => item.id === 2);
    console.log(data2); // [ { id: 2, name: 'Appartements' } ]

    // Méthode slice()
    const data2 = data.slice(1, 2);
    console.log(data2); // { id: 2, name: 'Appartements' }
  });
  */
