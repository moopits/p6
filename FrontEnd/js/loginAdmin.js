import { email, password, formLogIn } from "./components/domLinker.js";
import { postLogin } from "./components/api.js";
//import { formLogIn } from "./components/domLinker"
//console.log(formLogIn)




// infos link http & local
console.log(import.meta.url);
// declaration de la fonction CONTROLE des champs
function validerFormulaire() { /**************** */
  // CTRL que le champ email n'est pas vide
  // const email = formLogIn.querySelector('#email').value;
  if (email.value === '') {
    alert('Le champ email ne doit pas être vide.');
    return false;
  }
  // CTRL que le champ email est un e-mail valide
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email.value)) {
    alert('Le champ email doit être un e-mail valide.');
    return false;
  }
  // CTRL que le champ mot de passe n'est pas vide
  // const password = formLogIn.querySelector('#password').value;
  if (password.value === '') {
    alert('Le champ mot de passe ne doit pas être vide.');
    return false;
  }
  // CTRL que le champ mot de passe a au moins 8 caractères
  if (password.length < 6) {
    alert('Le champ mot de passe doit avoir au moins 8 caractères.');
    return false;
  }
  // Les champs sont valides, renvoi true
  return true;
}


// gestion formulaire /*********** */
//const formLogIn = document.querySelector('#mainCenter form');
// const formLogIn = document.querySelector('#mainCenter #logInForm')
formLogIn.addEventListener('submit', (event) => {
  event.preventDefault();
  // Vérifiez les champs du formulaire
  const valid = validerFormulaire(formLogIn);

  // Si les champs ne sont pas valides, empêchez immédiatement la propagation de l'événement
  if (!valid) {
    // Empêcher immédiatement la propagation de l'événement
    event.stopImmediatePropagation();
    // Les champs ne sont pas valides, affichez une alerte
    alert('Les champs ne sont pas valides.');
    // Reset les champs a vides
    formLogIn.reset();
  } else {
    postLogin({ email: email.value, password: password.value })
      .then(data => {
        localStorage.token = data.token
        window.location.href = '../index.html'
      })
      .catch(error => alert(error))
  }
  // Si les champs sont valides, soumettre le formulaire
  // Annule événement pour qu'il n'execute pas de post ou autre
  // Obtention valeurs des champs sur id
  // const email = formLogIn.querySelector('#email').value;
  // const password = formLogIn.querySelector('#password').value;
  // Stock les valeurs des champs
  // const variables = { email, password };
  // // Affiche valeurs des champs en console (check ONLY)
  // console.log(variables);
  // // stringify
  // console.log(JSON.stringify(variables))

});


// recupere URL de -> form
/*const action = form.getAttribute('action');
console.log(action) // URL

  // Fonction pour envoyer les données de connexion au serveur
  function sendData() {
    // Récupère les données du formulaire
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Envoie une requête HTTP POST au serveur
    fetch(action, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      // Si la requête a réussi
      if (data.success) {
        // Récupère le token renvoyé par le serveur
        var token = data.token;

        // Enregistre le token dans le local storage
        localStorage.setItem("token", token);

        // Affiche un message de succès
        alert("Connexion réussie !");
      }
      else {
        // Affiche un message d'erreur
        alert("Erreur de connexion !");
      }
    })
    .catch(error => {
      // Gère l'erreur
      alert(error);
    });
  }

/*fetch(action).then((response) => {//.then(data => data.json())
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


// Fonction pour le login
/*
function login(email, password) {
  // URL de l'API
  const apiUrl = "http://localhost:5678/api/users/login"; //"https://my-api.com/login";
 
  // Données à envoyer
  const data = {
    email,
    password,
  };
 
  // Envoi de la requête
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // Si la requête a réussi
      if (response.status === 200) {
        // Enregistrement du token dans le local storage
        const token = data.token;
        const userId = data.userId;
        const tokenArray = [token, userId];
        localStorage.setItem("token", JSON.stringify(tokenArray));
 
        // Retour du token et de l'id
        return tokenArray;
      } else {
        // Si la requête a échoué
        // Gérer l'erreur
        return handleError(response.status);
      }
    });
}
 
// Fonction pour gérer les codes d'erreurs
function handleError(statusCode) {
  // Traitement des erreurs
  switch (statusCode) {
    case 401:
      // Erreur d'authentification
      return "Erreur d'authentification";
    case 404:
      // Utilisateur introuvable
      return "Utilisateur introuvable";
    default:
      // Erreur inconnue
      return "Erreur inconnue";
  }
}

/** programme appel des 2 fonction http request */
/*
const tokenArray = login("sophie.bluel@test.tld", "S0phie");

if (tokenArray) {
// Le login a réussi
console.log(tokenArray); // ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4', 1]
} else {
// Le login a échoué
console.log(handleError(401)); // Erreur d'authentification
}*/


/*
const login = async (email, password) => {
    const apiUrl = "http://localhost:5678/api/users/login";
    const data = {
      email,
      password,
    };
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (response.status === 200) {
      const token = response.json().token;
      const userId = response.json().userId;
      const tokenArray = [token, userId];
      localStorage.setItem("token", JSON.stringify(tokenArray));
  
      return tokenArray;
    } else {
      return handleError(response.status);
    }
  };
  
  const handleError = async (statusCode) => {
    switch (statusCode) {
      case 401:
        return "Erreur d'authentification";
      case 404:
        return "Utilisateur introuvable";
      default:
        return "Erreur inconnue";
    }
  };
  
  try {
    const tokenArray = await login("sophie.bluel@test.tld", "S0phie");
    console.log(tokenArray);
  } catch (error) {
    console.error(error);
  }
  */
/*
 let user1 = {
  email: 'sophie.bluel@test.tld',
  password: 'S0phie'
};

let response = await fetch('http://localhost:5678/api/users/login', {
  method: 'POST',
  body: JSON.stringify(user1),
  headers: {
    'Content-Type': 'application/json'
    }
});

console.log(JSON.stringify(user1))
let result1 = await response.json();
alert(result1.message);*/

