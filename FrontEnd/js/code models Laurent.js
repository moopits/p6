/******** CODE MODELS ********/

/*for(let i = 0; i < containerButtons.length; i++) {
    /*const filterButton = containerButtons[i].querySelector("button:nth-child(" + String(k[i+1]) + ")");
    */
    /*const filterButton = containerButtons[i].querySelector("button")
*/
   /* console.log(filterButton)}*/

// Sélectionne le bouton qui se trouve à la deuxième position à partir de la fin
//const secondButtonFromEnd = containerButton.querySelector("button:nth-of-type(-2)");

/*const arrayButtons = document.querySelectorAll(".containerButtons button")
console.log(arrayButtons[3])

/*console.log(arrayButtons.querySelector("button:nth-child(3)"))
*/
/*const buttons = containerButton.querySelectorAll("button")
*/
/*button0.addEventListener('click', (event) => { /*conserver event*/
    // Exécuter le code pour le bouton 0 (tous)
  /*  fetch('http://localhost:5678/api/works')
    .then((response) => response.json())
    .then((data) => {
    // Méthode filter() (recuperer length bd CATEGORY)
    /* CREER un index category.lentgh ->  categoryId[category.lentgh] */
    /* creer tableau length BD category*/
 /*   const categoryId = data
    console.log('button0 ')
    console.log(categoryId)
    })
});
/*
arrayButtons[0].addEventListener('click', (event) => { /*conserver event*/
  // Exécuter le code pour le bouton 0 (tous)
  /*  fetch('http://localhost:5678/api/works')
    .then((response) => response.json())
    .then((data) => {
    // Méthode filter() (recuperer length bd CATEGORY)
    /* CREER un index category.lentgh ->  categoryId[category.lentgh] */
    /* creer tableau length BD category*/
 /*   const categoryId = data
    console.log('button0 ')
    console.log(categoryId)
    })
});
*/


/*for(const i = 0; i < arrayButtons.length; i++) {*/
    /*arrayButtons[0].addEventListener('click', (event) => { /*conserver event*/
  // Exécuter le code pour le bouton 0 (tous)
    /*fetch('http://localhost:5678/api/works')
    .then((response) => response.json())
    .then((data) => {
    // Méthode filter() (recuperer length bd CATEGORY)
    /* CREER un index category.lentgh ->  categoryId[category.lentgh] */
    /* creer tableau length BD category*/
   /* if(i === 0) {
        const categoryId = data
    } else {
        const categoryId = data.filter((item) => item.categoryId === i)
    }
    console.log('button0 ')
    console.log(categoryId)
    })
});

*/




/*filterButton.addEventListener('click', (event) => { /*conserver event*/
    // Exécuter le code pour le bouton 1
 /*   fetch('http://localhost:5678/api/works')
    .then((response) => response.json())
    .then((data) => {
    const categoryId = data.filter((item) => item.categoryId === 1)
    console.log('button1')
    console.log(categoryId)
    })
});



/* organigramme filter

1 - lire base de donnée category
2 - stocker dans tableau les data base de données
3 - lire la .length (taille du tableau)
4 - creer nbr de button = taille du tableau
    par defaut afficher TOUS (base données entiere)
    Button TOUS en vert - les autres NON vert
    commence a 0 + length (taille du tableau) base de donées
    afficher les button dans 'containerButton'

5 - au CLICK sur MOUSE
5-1 - lire de nouveau la base de données 'WORK'
    - RAISON :  car mise a jour possible entre 2 clicks
*/
