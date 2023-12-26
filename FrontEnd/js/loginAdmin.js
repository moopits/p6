
//import { formLogIn } from "./components/domLinker"
//console.log(formLogIn)
console.log(import.meta.url);
// declaration de la fonction CONTROLE des champs
function validerFormulaire(formLogIn) {
    // CTRL que le champ email n'est pas vide
    const email = formLogIn.querySelector('#email').value;
    if (email === '') {
      alert('Le champ email ne doit pas être vide.');
      return false;
    }
    // CTRL que le champ email est un e-mail valide
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
      alert('Le champ email doit être un e-mail valide.');
      return false;
    }
    // CTRL que le champ mot de passe n'est pas vide
    const password = formLogIn.querySelector('#password').value;
    if (password === '') {
      alert('Le champ mot de passe ne doit pas être vide.');
      return false;
    }
    // CTRL que le champ mot de passe a au moins 8 caractères
    if (password.length < 8) {
      alert('Le champ mot de passe doit avoir au moins 8 caractères.');
      return false;
    }
    // Les champs sont valides, renvoi true
    return true;
}


// gestion formulaire
//const formLogIn = document.querySelector('#mainCenter form');
const formLogIn = document.querySelector('#mainCenter #logInForm')
formLogIn.addEventListener('submit', (event) => {
    // Vérifiez les champs du formulaire
    const valid = validerFormulaire(formLogIn);

    // Si les champs ne sont pas valides, empêchez immédiatement la propagation de l'événement
    if (!valid) {
        // Empêcher immédiatement la propagation de l'événement
        event.stopImmediatePropagation();
        event.preventDefault();     
        // Les champs ne sont pas valides, affichez une alerte
        alert('Les champs ne sont pas valides.');
        // Reset les champs a vides
        formLogIn.reset();
    }
    // Si les champs sont valides, soumettre le formulaire
    // Annule événement pour qu'il n'execute pas de post ou autre
    event.preventDefault(); // stop la propagation submit
    // Obtention valeurs des champs sur id
    const email = formLogIn.querySelector('#email').value;
    const password = formLogIn.querySelector('#password').value;
    // Stock les valeurs des champs
    const variables = { email, password };
    // Affiche valeurs des champs en console (check ONLY)
    console.log(variables);
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