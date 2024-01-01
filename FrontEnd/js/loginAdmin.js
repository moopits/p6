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
    alert('Le champ mot de passe doit avoir au moins 6 caractères.');
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
  // Vérifiez les champs du formulaire APPEL -> FONCTION -> return true;
  const valid = validerFormulaire(formLogIn);
  // CONDITION TRUE/FALSE
  if (valid) {
    postLogin({ email: email.value, password: password.value })
      .then(data => {
        localStorage.token = data.token
        window.location.href = '../index.html'
      })
      .catch(error => alert(error))
  } else {
    // Si les champs ne sont pas valides
    // Empêcher immédiatement la propagation de l'événement
    event.stopImmediatePropagation();
    // Les champs ne sont pas valides, affichez une ALERT
    alert('Les champs ne sont pas valides.');
    // RESET les champs a vides
    formLogIn.reset();
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

