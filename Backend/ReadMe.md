# Backend API - Sophie Bluel

Ce repo contient le code backend de l'architecte Sophie Bluel. 

## Lancement du backend

Après avoir récupéré le REPO executez la commande `npm install` pour installer les dépendances du projet

Une fois les dépendances installées lancez le projet avec la commande `npm start`

Compte de test pour Sophie Bluel

```
email: sophie.bluel@test.tld

password: S0phie 
```
Lien pour voir la
[documentation Swagger](http://localhost:5678/api-docs/)

Pour lire la documentation, utiliser Chrome ou Firefox


function deleteData(url, id) {
  return fetch(url + "/" + id, {
    method: "DELETE",
  })
    .then(response => response.status === 204)
    .catch(error => {
      throw new Error(error);
    });
}

const result = confirm();

if (result) {
  // Supprimer l'élément
} else {
  // Ne pas supprimer l'élément
}


ICON image modal telechargement
<i class="fa-regular fa-image"></i>

formulaire a créer pour modal
	<form action="#" method="">
						<label for="name">Nom</label>
						<input type="text" name="name" id="name" autocomplete="off">
						<label for="email">Email</label>
						<input type="email" name="email" id="email" autocomplete="off">
						<label for="message">Message</label>
						<textarea name="message" id="message" cols="30" rows="10"></textarea>
						<input type="submit" value="Envoyer">
					</form>


          		<section id="contact">
			<h2>Log In</h2>
			<form id="logInForm" action="http://localhost:->5678/api/users/login" method="post">
				<label for="name">E-mail</label>
				<input type="email" name="email" id="email">
				<label for="email">Mot de passe</label>
				<input type="password" name="password" id="password">
				<input type="submit" value="Se connecter">
			</form>
            <div id="containerDiv_a">
                <a id="color" href="#"><span id="underline" >Mot de passe oublié</span></a>
            </div>
		</section>